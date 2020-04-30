const roles_routes = [
    {
        path: "/roles/",
        name: "roles",
        component: () => import('../../../../components/EmptyRouterView'),
        meta: {
            auth: true,
            title: "Roles",
            icon: "lock"
        },
        children: [
            {
                path: "/roles",
                name: 'roles-dashboard',
                component: () => import('./Dashboard'),
                meta: {
                    auth: true, title: 'Roles Dashboard', icon: 'lock', exact: true
                }
            },
            {
                path: "/roles/list",
                name: 'roles-list',
                component: () => import('./List'),
                meta: {
                    auth: true, title: 'All Roles', icon: 'lock-open', exact: true
                }
            },
            {
                path: "/roles/create",
                name: 'roles-create',
                component: () => import('./Create'),
                meta: {
                    auth: true, title: 'Add Role', icon: 'lock-plus', exact: true
                }
            },
            {
                path: "/roles/:id/edit",
                name: 'roles-edit',
                component: () => import('./Edit'),
                props: true,
                meta: {
                    auth: true, title: 'Edit Role', icon: 'lock-search'
                }
            },
            {
                path: "/roles/:id/show",
                name: 'roles-show',
                component: () => import('./Show'),
                props: true,
                meta: {
                    auth: true, title: 'Edit Role', icon: 'lock-search'
                }
            },
        ]
    },
];

export default roles_routes;
