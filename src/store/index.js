import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import cookies from "js-cookie";
import roles from "../views/backend/system-admin/roles/store";
import permissions from "../views/backend/system-admin/permissions/store";
import fileExtensions from "../views/backend/system-admin/file-extensions/store";
import files from "../views/backend/system-admin/files/store";
import users from "../views/backend/system-admin/users/store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        roles, permissions, fileExtensions, files, users
        // other modules here ...
    },
    state: {
        token: null,
        current_user: null,
        refreshing: null,
        snackbar: {
            show: false,
            text: 'Default message',
            color: 'success'
        },
        validation_errors: {},
    },

    getters: {
        getToken(state) {
            return state.token;
        },

        refreshingStatus(state) {
            return state.refreshing;
        },

        getCurrentUser(state) {
            return state.current_user;
        }
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },

        SET_REFRESHING_TOKEN(state, status) {
            state.refreshing = status;
        },

        REMOVE_TOKEN(state) {
            state.token = null;
        },

        SET_SNACKBAR(state, snackbar) {
            state.snackbar = snackbar
        },

        SET_CURRENT_USER(state, current_user) {
            state.current_user = current_user
        },

        SET_VALIDATION_ERRORS(state, errors) {
            if (Object.keys(errors) > 0) {
                Object.keys(errors).forEach((key) => {
                    errors[key] = errors[key][0]
                })
            }
            state.validation_errors = errors;
        }
    },

    actions: {
        async setToken({commit}, {token, expiresIn}) {
            const expiryTime = new Date(
                new Date().getTime() + expiresIn * 1000
            );
            cookies.set("x-access-token", token, {
                expires: expiryTime
            });
            commit("SET_TOKEN", token);
            commit("SET_REFRESHING_TOKEN", false);
        },

        async refreshToken({dispatch, getters}) {

            // commit("SET_REFRESHING_TOKEN", true);

            this._vm.$axios.post(process.env.VUE_APP_REFRESH_TOKEN_API_URL).then(async ({data}) => {
                const {token, expiresIn} = data;
                dispatch("setToken", {token, expiresIn});

                if (!getters.getCurrentUser) {
                    await dispatch("getCurrentUser");
                }

                if (window.location.pathname === '/login') {
                    await router.push({name: 'secret'})
                }
            }).catch(() => {
                if (window.location.pathname !== '/login') {
                    router.push({name: 'login'})
                }
            });
        },

        async getCurrentUser({commit}) {

            // commit("SET_REFRESHING_TOKEN", true);

            await this._vm.$axios.get(process.env.VUE_APP_CURRENT_USER_API_URL).then(({data}) => {
                let user = data.data[0];
                commit("SET_CURRENT_USER", user);

                commit("SET_SNACKBAR", {
                    show: true, text: "Welcome back " + user.name, color: 'success'
                });
            }).catch(() => {
                // commit("SET_REFRESHING_TOKEN", false);
            });
        },

        async login({dispatch, commit}, data) {
            await this._vm.$axios.post(process.env.VUE_APP_LOGIN_API_URL, data).then(async ({data}) => {
                const {token, expiresIn} = data;
                dispatch("setToken", {token, expiresIn});
                await dispatch("getCurrentUser");
                await router.push({name: "secret"});
            }).catch((error) => {
                commit("SET_SNACKBAR", {
                    show: true, text: error.response.data.message, color: 'error'
                })
            });
        },

        logout({commit}) {
            cookies.remove("x-access-token");
            commit("REMOVE_TOKEN");
            commit("SET_CURRENT_USER", null);
            router.push({name: 'home'});
        },

        loader({dispatch, getters}, data) {
            let id = setInterval(checker, 1000);

            function checker() {
                if (!getters.refreshingStatus) {
                    clearInterval(id);
                    if ([null, undefined].includes(getters.getToken))
                        return;

                    if (typeof data === "object") {
                        const {action, payload} = data;
                        dispatch(action, payload);
                    } else {
                        dispatch(data);
                    }
                }
            }
        }
    }
});
