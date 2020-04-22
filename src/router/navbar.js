import Home from "../views/web/Home";
import About from "../views/web/About";

const navbar_routes = [
	{
		path: "/",
		name: "home",
		component: Home,
		meta: {
			title: "Home",
			icon: "home"
		}
	},
	{
		path: "/about",
		name: "about",
		component: About,
		meta: {
			title: "About",
			icon: "information"
		}
	}
];

export default navbar_routes;
