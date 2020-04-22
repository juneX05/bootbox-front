import "vuetify/dist/vuetify.min.css";
import "./assets/override.css";

import Vue from "vue";
import App from "./App";

import vuetify from "./plugins/vuetify";
import axios from "./plugins/axios";
import router from "./router";

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.prototype.log = console.log;
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
	el: "#app",
	vuetify,
	router,
	render: h => h(App)
});
