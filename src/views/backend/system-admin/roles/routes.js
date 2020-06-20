const roles_routes = [
    {
        path: "/roles/",
        name: "roles",
        component: () => import('../../../../components/EmptyRouterView'),
        meta: {
            auth: true,
            title: "Roles",
            icon: "lock",
            permission: 'roles_access'
        },
        children: [
            {
                path: "/roles",
                name: 'roles-dashboard',
                component: () => import('./Dashboard'),
                meta: {
                    auth: true, title: 'Roles Dashboard', icon: 'lock', exact: true,
                    permission: 'roles_access'
                }
            },
            {
                path: "/roles/list",
                name: 'roles-list',
                component: () => import('./List'),
                meta: {
                    auth: true, title: 'All Roles', icon: 'lock-open', exact: true,
                    permission: 'roles_access'
                }
            },
            {
                path: "/roles/create",
                name: 'roles-create',
                component: () => import('./Create'),
                meta: {
                    auth: true, title: 'Add Role', icon: 'lock-plus', exact: true,
                    permission: 'roles_store'
                }
            },
            {
                path: "/roles/:id/edit",
                name: 'roles-edit',
                component: () => import('./Edit'),
                props: true,
                meta: {
                    auth: true, title: 'Edit Role', icon: 'lock-search',
                    permission: 'roles_update'
                }
            },
            {
                path: "/roles/:id/show",
                name: 'roles-show',
                component: () => import('./Show'),
                props: true,
                meta: {
                    auth: true, title: 'Edit Role', icon: 'lock-search',
                    permission: 'roles_show'
                }
            },
        ]
    },
];

export default roles_routes;
