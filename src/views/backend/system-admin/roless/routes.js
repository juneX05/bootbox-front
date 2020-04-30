const roles_routes = [
    {
        path: "/roles/",
        name: "roles",
        component: () => import('../../../../components/EmptyRouterView'),
        meta: {
            auth: true,
            title: "Roles",
            icon: "briefcase"
        },
        children: [
            {
                path: "/roles",
                name: 'roles-dashboard',
                component: () => import('./Dashboard'),
                meta: {
                    auth: true, title: 'Roles Dashboard', icon: 'briefcase'
                }
            },
            {
                path: "/roles/create",
                name: 'roles-create',
                component: () => import('./Create'),
                meta: {
                    auth: true, title: 'Add Role', icon: 'briefcase-plus'
                }
            },
            {
                path: "/roles/:id/edit",
                name: 'roles-edit',
                component: () => import('./Edit'),
                props: true,
                meta: {
                    auth: true, title: 'Edit Role', icon: 'briefcase-search'
                }
            },
        ]
    },
];

export default roles_routes;
