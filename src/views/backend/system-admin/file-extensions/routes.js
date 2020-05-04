const fileExtensions_routes = [
    {
        path: "/fileExtensions/",
        name: "fileExtensions",
        component: () => import('../../../../components/EmptyRouterView'),
        meta: {
            auth: true,
            title: "FileExtensions",
            icon: "lock"
        },
        children: [
            {
                path: "/fileExtensions",
                name: 'fileExtensions-dashboard',
                component: () => import('./Dashboard'),
                meta: {
                    auth: true, title: 'FileExtensions Dashboard', icon: 'lock', exact: true
                }
            },
            {
                path: "/fileExtensions/list",
                name: 'fileExtensions-list',
                component: () => import('./List'),
                meta: {
                    auth: true, title: 'All FileExtensions', icon: 'lock-open', exact: true
                }
            },
            {
                path: "/fileExtensions/create",
                name: 'fileExtensions-create',
                component: () => import('./Create'),
                meta: {
                    auth: true, title: 'Add FileExtension', icon: 'lock-plus', exact: true
                }
            },
            {
                path: "/fileExtensions/:id/edit",
                name: 'fileExtensions-edit',
                component: () => import('./Edit'),
                props: true,
                meta: {
                    auth: true, title: 'Edit FileExtension', icon: 'lock-search'
                }
            },
            {
                path: "/fileExtensions/:id/show",
                name: 'fileExtensions-show',
                component: () => import('./Show'),
                props: true,
                meta: {
                    auth: true, title: 'Edit FileExtension', icon: 'lock-search'
                }
            },
        ]
    },
];

export default fileExtensions_routes;
