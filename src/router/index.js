import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/web/Login";

import sidebar_routes from "./sidebar";
import navbar_routes from "./navbar";

import cookies from "js-cookie";
import store from "../store"

Vue.use(VueRouter);

const other_routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            auth: 'middle',
        }
    }
];

const routes = [...navbar_routes, ...sidebar_routes, ...other_routes];
const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach(async (to, from, next) => {
    // this.$Progress.start();
    const token = cookies.get('x-access-token');
    if (to.meta.auth === 'middle' && token !== undefined) {
        next({name: 'secret'});
    } else if (to.meta.auth === true && token === undefined) {
        await store.dispatch('refreshToken');
        if (store.getters.getToken) {
            next()
        } else {
            next({name: 'login'})
        }
    } else {
        next();
    }
});
router.afterEach(() => {
    // this.$Progress.finish();
})
export default router;
