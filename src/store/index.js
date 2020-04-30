import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import cookies from "js-cookie";
import roles from "../views/backend/system-admin/roles/store";
import permissions from "../views/backend/system-admin/permissions/store";
import fileTypes from "../views/backend/system-admin/file-types/store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
		roles, permissions, fileTypes
		// other modules here ...
	},
    state: {
        token: null,
        user: null,
        refreshing: null,
    },

    getters: {
        getToken(state) {
            return state.token;
        },

		refreshingStatus(state) {
			return state.refreshing;
		},
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
			this._vm.$axios.defaults.headers.common.Authorization =
				"Bearer " + token;
			commit("SET_TOKEN", token);
			commit("SET_REFRESHING_TOKEN", false);
		},

		async refreshToken({dispatch, commit}, redirectTo = null) {

			if (redirectTo === null) {
				commit("SET_REFRESHING_TOKEN", true);
			}

			this._vm.$axios.post("/refresh-token").then(({data}) => {
                const {token, expiresIn} = data;
                dispatch("setToken", {token, expiresIn});

                if (window.location.pathname === '/login') {
                    router.push({name: 'secret'})
                }

                if (redirectTo !== null) {
                    router.push({name: redirectTo});
                }
            }).catch(() => {
                if (redirectTo === null) {
                    commit("SET_REFRESHING_TOKEN", false);
                }
            });
        },

        async checkRoute({dispatch, getters}, {to, next, initial = false}) {
            const token = cookies.get('x-access-token');
            if (to.meta.auth === 'middle' && token !== undefined) {
                return next({name: 'secret'});
            } else if (to.meta.auth === true && token === undefined) {
                await dispatch('refreshToken');
                if (getters.getToken) {
                    if (initial) return next(to);
                    else return next();
                } else {
                    return next({name: 'login'})
                }
            } else {
				if (initial) return next(to);
				else return next();
			}
		},

		async loadRoles({commit}) {
			await this._vm.$axios.get("/roles").then(({data}) => {
				const roles = data.data;
				commit("SET_ROLES", roles);
			});
		},

		async login({dispatch}, data) {
			await this._vm.$axios.post("/login", data).then(({data}) => {
				const {token, expiresIn} = data;
				dispatch("setToken", {token, expiresIn});
				router.push({name: "secret"});
			});
		},

		logout({ commit }) {
			cookies.remove("x-access-token");
			commit("REMOVE_TOKEN");
			router.push({name: 'home'});
		},

		loader({ dispatch, getters }, data) {
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
