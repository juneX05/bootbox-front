const permissions_routes = [
    {
        path: "/permissions/",
        name: "permissions",
        component: () => import('../../../../components/EmptyRouterView'),
        meta: {
            auth: true,
            title: "Permissions",
            icon: "lock"
        },
        children: [
            {
                path: "/permissions",
                name: 'permissions-dashboard',
                component: () => import('./Dashboard'),
                meta: {
                    auth: true, title: 'Permissions Dashboard', icon: 'lock', exact: true
                }
            },
            {
                path: "/permissions/list",
                name: 'permissions-list',
                component: () => import('./List'),
                meta: {
                    auth: true, title: 'All Permissions', icon: 'lock-open', exact: true
                }
            },
            {
                path: "/permissions/create",
                name: 'permissions-create',
                component: () => import('./Create'),
                meta: {
                    auth: true, title: 'Add Permission', icon: 'lock-plus', exact: true
                }
            },
            {
                path: "/permissions/:id/edit",
                name: 'permissions-edit',
                component: () => import('./Edit'),
                props: true,
                meta: {
                    auth: true, title: 'Edit Permission', icon: 'lock-search'
                }
            },
            {
                path: "/permissions/:id/show",
                name: 'permissions-show',
                component: () => import('./Show'),
                props: true,
                meta: {
                    auth: true, title: 'Edit Permission', icon: 'lock-search'
                }
            },
        ]
    },
];

export default permissions_routes;
