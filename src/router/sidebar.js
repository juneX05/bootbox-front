import roles_routes from "../views/backend/system-admin/roles/routes";
import permissions_routes from "../views/backend/system-admin/permissions/routes";
// import fileTypes_routes from "../views/backend/system-admin/file-types/routes";
import fileExtensions_routes from "../views/backend/system-admin/file-extensions/routes";
import files_routes from "../views/backend/system-admin/files/routes";

const sidebar_routes = [
    {
        path: "/secret",
        name: "secret",
        component: () => import('../views/backend/Secret.vue'),
        meta: {
            auth: true,
            title: "Secret",
            icon: "lock-clock"
        }
    },
    ...roles_routes, ...permissions_routes, ...fileExtensions_routes,
    ...files_routes
];

export default sidebar_routes;
