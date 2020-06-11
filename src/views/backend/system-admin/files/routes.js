const files_routes = [
    {
        path: "/files/",
        name: "files",
        component: () => import('../../../../components/EmptyRouterView'),
        meta: {
            auth: true,
            title: "Files",
            icon: "lock"
        },
        children: [
            {
                path: "/files",
                name: 'files-dashboard',
                component: () => import('./Dashboard'),
                meta: {
                    auth: true, title: 'Files Dashboard', icon: 'lock', exact: true
                }
            },
            {
                path: "/files/list",
                name: 'files-list',
                component: () => import('./List'),
                meta: {
                    auth: true, title: 'All Files', icon: 'lock-open', exact: true
                }
            },
            {
                path: "/files/create",
                name: 'files-create',
                component: () => import('./Create'),
                meta: {
                    auth: true, title: 'Add File', icon: 'lock-plus', exact: true
                }
            },
            {
                path: "/files/:id/edit",
                name: 'files-edit',
                component: () => import('./Edit'),
                props: true,
                meta: {
                    auth: true, title: 'Edit File', icon: 'lock-search'
                }
            },
            {
                path: "/files/:id/show",
                name: 'files-show',
                component: () => import('./Show'),
                props: true,
                meta: {
                    auth: true, title: 'Edit File', icon: 'lock-search'
                }
            },
        ]
    },
];

export default files_routes;
