const fileTypes_routes = [
    {
        path: "/fileTypes/",
        name: "fileTypes",
        component: () => import('../../../../components/EmptyRouterView'),
        meta: {
            auth: true,
            title: "FileTypes",
            icon: "lock"
        },
        children: [
            {
                path: "/fileTypes",
                name: 'fileTypes-dashboard',
                component: () => import('./Dashboard'),
                meta: {
                    auth: true, title: 'FileTypes Dashboard', icon: 'file-cabinet', exact: true
                }
            },
            {
                path: "/fileTypes/list",
                name: 'fileTypes-list',
                component: () => import('./List'),
                meta: {
                    auth: true, title: 'All FileTypes', icon: 'file-multiple', exact: true
                }
            },
            {
                path: "/fileTypes/create",
                name: 'fileTypes-create',
                component: () => import('./Create'),
                meta: {
                    auth: true, title: 'Add FileType', icon: 'file-outline', exact: true
                }
            },
            {
                path: "/fileTypes/:id/edit",
                name: 'fileTypes-edit',
                component: () => import('./Edit'),
                props: true,
                meta: {
                    auth: true, title: 'Edit FileType', icon: 'lock-search'
                }
            },
            {
                path: "/fileTypes/:id/show",
                name: 'fileTypes-show',
                component: () => import('./Show'),
                props: true,
                meta: {
                    auth: true, title: 'Edit FileType', icon: 'lock-search'
                }
            },
        ]
    },
];

export default fileTypes_routes;
