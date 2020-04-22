const sidebar_routes = [
  {
		path: "/secret",
		name: "secret",
		component: () => import('../views/system/Secret.vue'),
		meta: {
			title: "Secret",
			icon: "lock-clock"
		}
	},
];

export default sidebar_routes;
