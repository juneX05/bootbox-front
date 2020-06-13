const users_routes = [
    {
        path: "/users/",
        name: "users",
        component: () => import('../../../../components/EmptyRouterView'),
        meta: {
            auth: true,
            title: "Users",
            icon: "lock"
        },
        children: [
            {
                path: "/users",
                name: 'users-dashboard',
                component: () => import('./Dashboard'),
                meta: {
                    auth: true, title: 'Users Dashboard', icon: 'lock', exact: true
                }
            },
            {
                path: "/users/list",
                name: 'users-list',
                component: () => import('./List'),
                meta: {
                    auth: true, title: 'All Users', icon: 'lock-open', exact: true
                }
            },
            {
                path: "/users/create",
                name: 'users-create',
                component: () => import('./Create'),
                meta: {
                    auth: true, title: 'Add User', icon: 'lock-plus', exact: true
                }
            },
            {
                path: "/users/:id/edit",
                name: 'users-edit',
                component: () => import('./Edit'),
                props: true,
                meta: {
                    auth: true, title: 'Edit User', icon: 'lock-search'
                }
            },
            {
                path: "/users/:id/show",
                name: 'users-show',
                component: () => import('./Show'),
                props: true,
                meta: {
                    auth: true, title: 'Edit User', icon: 'lock-search'
                }
            },
        ]
    },
];

export default users_routes;
