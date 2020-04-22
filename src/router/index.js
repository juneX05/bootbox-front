import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/web/Login";

import sidebar_routes from "./sidebar";
import navbar_routes from "./navbar";

Vue.use(VueRouter);

const other_routes = [
	{
		path: "/login",
		name: "login",
		component: Login
	}
];

const routes = navbar_routes.concat(sidebar_routes, other_routes);

const router = new VueRouter({
	mode: "history",
	routes
});

export default router;
