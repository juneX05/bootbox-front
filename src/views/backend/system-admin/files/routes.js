const files_routes = [
    {
        path: "/files/",
        name: "files",
        component: () => import('../../../../components/EmptyRouterView'),
        meta: {
            auth: true,
            title: "Files",
            icon: "lock",
            permission: 'files_access'
        },
        children: [
            {
                path: "/files",
                name: 'files-dashboard',
                component: () => import('./Dashboard'),
                meta: {
                    auth: true, title: 'Files Dashboard', icon: 'lock', exact: true,
                    permission: 'files_access'
                }
            },
            {
                path: "/files/list",
                name: 'files-list',
                component: () => import('./List'),
                meta: {
                    auth: true, title: 'All Files', icon: 'lock-open', exact: true,
                    permission: 'files_access'
                }
            },
            {
                path: "/files/create",
                name: 'files-create',
                component: () => import('./Create'),
                meta: {
                    auth: true, title: 'Add File', icon: 'lock-plus', exact: true,
                    permission: 'files_store'
                }
            },
            {
                path: "/files/:id/edit",
                name: 'files-edit',
                component: () => import('./Edit'),
                props: true,
                meta: {
                    auth: true, title: 'Edit File', icon: 'lock-search',
                    permission: 'files_update'
                }
            },
            {
                path: "/files/:id/show",
                name: 'files-show',
                component: () => import('./Show'),
                props: true,
                meta: {
                    auth: true, title: 'Show File', icon: 'lock-search',
                    permission: 'files_show'
                }
            },
        ]
    },
];

export default files_routes;
