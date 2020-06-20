import Home from "../views/web/Home";
import About from "../views/web/About";

const navbar_routes = [
	{
		path: "/",
		name: "home",
		component: Home,
		meta: {
            auth: false,
            title: "Home",
            icon: "home",
            permission: false,
        }
	},
	{
		path: "/about",
		name: "about",
		component: About,
		meta: {
            auth: false,
            title: "About",
            icon: "information",
            permission: false
        }
	}
];

export default navbar_routes;
