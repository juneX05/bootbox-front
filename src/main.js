import "vuetify/dist/vuetify.min.css";
import "./assets/override.css";

import Vue from "vue";
import App from "./App";

import vuetify from "./plugins/vuetify";
import axios from "./plugins/axios";
import router from "./router";
import store from "./store/index";
import VueProgressBar from "vue-progressbar";

Vue.config.productionTip = true;
Vue.config.devtools = true;

Vue.prototype.log = console.log;
Vue.prototype.$axios = axios;

Vue.use(VueProgressBar, {
	color: "rgb(143, 255, 199)",
	failedColor: "rgb(255,0,6)",
	thickness: '5px',
});

Vue.mixin({
    methods: {
        //Temporary Fix due to inability of button links to switch to dark mode
        goTo(route_name, route_params) {
            this.$router.push({name: route_name, params: route_params})
        },

        generateFormData(form_data, skipper) {
            let formData = new FormData();
            let formKeys = Object.keys(form_data);
            formKeys.forEach((key) => {
                if (typeof form_data[key] === 'object' && !skipper.includes(key)) {
                    formData.append(key, JSON.stringify(form_data[key]));
                } else {
                    formData.append(key, form_data[key]);
                }
            });
            return formData;
        },

        $can(permissionName) {
            let currentUser = this.$store.state.current_user;
            if (permissionName !== false) {
                if (currentUser) {
                    if (currentUser.id === 1) return true //superadmin
                    let permissions = currentUser.permissions;
                    if (permissions) {
                        let permission = permissions.find(permission => permission.name === permissionName);
                        return permission !== undefined
                    }
                }

                return false;
            }
            return true;
        }
    },
    computed: {
        apiValidationErrors: {
            get() {
                return this.$store.state.validation_errors
            },

            set(value) {
                this.$store.state.validation_errors = value
            }
        }
    }
})

/* eslint-disable no-new */
export default new Vue({
	vuetify,
	store,
	router,
	render: h => h(App)
}).$mount("#app");
