import "vuetify/dist/vuetify.min.css";
import "./assets/override.css";

import Vue from "vue";
import App from "./App";

import vuetify from "./plugins/vuetify";
import axios from "./plugins/axios";
import router from "./router";
import store from "./store/index";

Vue.config.productionTip = true;
Vue.config.devtools = true;

Vue.prototype.log = console.log;
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
	el: "#app",
	vuetify,
	store,
	router,
	render: h => h(App)
});
