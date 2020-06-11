import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import cookies from "js-cookie";
import roles from "../views/backend/system-admin/roles/store";
import permissions from "../views/backend/system-admin/permissions/store";
import fileExtensions from "../views/backend/system-admin/file-extensions/store";
import files from "../views/backend/system-admin/files/store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        roles, permissions, fileExtensions, files
        // other modules here ...
    },
    state: {
        token: null,
        user: null,
        refreshing: null,
        snackbar: {
            show: false,
            text: 'Default message',
            color: 'success'
        }
    },

    getters: {
        getToken(state) {
            return state.token;
        },

        refreshingStatus(state) {
            return state.refreshing;
        },

        getUser(state) {
            return state.user;
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

        SET_USER(state, user) {
            state.user = user
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

                if (!getters.getUser) {
                    await dispatch("getUser");
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

        async getUser({commit}) {

            // commit("SET_REFRESHING_TOKEN", true);

            await this._vm.$axios.get(process.env.VUE_APP_CURRENT_USER_API_URL).then(({data}) => {

                commit("SET_USER", data);

                commit("SET_SNACKBAR", {
                    show: true, text: "Welcome back " + data.name, color: 'success'
                });
            }).catch(() => {
                // commit("SET_REFRESHING_TOKEN", false);
            });
        },

        async login({dispatch, commit}, data) {
            await this._vm.$axios.post(process.env.VUE_APP_LOGIN_API_URL, data).then(async ({data}) => {
                const {token, expiresIn} = data;
                dispatch("setToken", {token, expiresIn});
                await dispatch("getUser");
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
