const profiles_routes = [
    {
        path: "/profile",
        name: 'profiles-dashboard',
        component: () => import('./Dashboard'),
        meta: {
            auth: true, title: 'Profile', icon: 'lock', exact: true,
            permission: 'profile_update'
        }
    },
];

export default profiles_routes;
