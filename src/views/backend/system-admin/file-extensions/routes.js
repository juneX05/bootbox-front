const fileExtensions_routes = [
    {
        path: "/fileExtensions/",
        name: "fileExtensions",
        component: () => import('../../../../components/EmptyRouterView'),
        meta: {
            auth: true,
            title: "FileExtensions",
            icon: "lock",
            permission: 'file_extensions_access'
        },
        children: [
            {
                path: "/fileExtensions",
                name: 'fileExtensions-dashboard',
                component: () => import('./Dashboard'),
                meta: {
                    auth: true, title: 'FileExtensions Dashboard', icon: 'lock', exact: true,
                    permission: 'file_extensions_access',
                }
            },
            {
                path: "/fileExtensions/list",
                name: 'fileExtensions-list',
                component: () => import('./List'),
                meta: {
                    auth: true, title: 'All FileExtensions', icon: 'lock-open', exact: true,
                    permission: 'file_extensions_access',
                }
            },
            {
                path: "/fileExtensions/create",
                name: 'fileExtensions-create',
                component: () => import('./Create'),
                meta: {
                    auth: true, title: 'Add FileExtension', icon: 'lock-plus', exact: true,
                    permission: 'file_extensions_store',
                }
            },
            {
                path: "/fileExtensions/:id/edit",
                name: 'fileExtensions-edit',
                component: () => import('./Edit'),
                props: true,
                meta: {
                    auth: true, title: 'Edit FileExtension', icon: 'lock-search',
                    permission: 'file_extensions_update',
                }
            },
            {
                path: "/fileExtensions/:id/show",
                name: 'fileExtensions-show',
                component: () => import('./Show'),
                props: true,
                meta: {
                    auth: true, title: 'Show FileExtension', icon: 'lock-search',
                    permission: 'file_extensions_show'
                }
            },
        ]
    },
];

export default fileExtensions_routes;
