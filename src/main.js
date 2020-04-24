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

/* eslint-disable no-new */
export default new Vue({
	vuetify,
	store,
	router,
	render: h => h(App)
}).$mount("#app");
