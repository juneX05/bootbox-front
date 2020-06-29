import router from "../../../../router";

const roles = {
    state: {
        allRoles: [],
        roleLoading: false,
        role: {}
    },
    getters: {
        getRoles(state) {
            return state.allRoles;
        },

        getRole(state) {
            return state.role;
        },

        getRolesCount(state) {
            return state.allRoles.length
        },

        getRoleLoadingStatus(state) {
            return state.roleLoading
        }
    },
    mutations: {
        SET_ROLES(state, roles) {
            state.allRoles = roles;
        },

        DELETE_ROLE(state, id) {
            let index = state.allRoles.findIndex(role => role.id === id)
            state.allRoles.splice(index, 1)
        },

        SET_ROLE(state, role) {
            state.role = role;
        },

        SET_LOADING(state, value) {
            state.loading = value
        },
    },
    actions: {
        async loadRoles({commit}) {
            await this._vm.$axios.get("/roles").then(({data}) => {
                const roles = data.data;
                commit("SET_ROLES", roles);
            }).catch((error) => {
                commit("SET_SNACKBAR", {
                    show: true, color: 'error',
                    text: error.response.data.message
                });
            });
        },

        async addRole({commit}, formInput) {
            commit("SET_ROLES", []);
            await this._vm.$axios.post('/roles', formInput).then(() => {
                router.push({name: 'roles-list'})
                commit("SET_SNACKBAR", {
                    show: true, color: 'success',
                    text: 'New Role Added Successfully'
                });
            }).catch((error) => {
                commit("SET_VALIDATION_ERRORS", error.response.data.errors);
                commit("SET_SNACKBAR", {
                    show: true, color: 'error',
                    text: error.response.data.message
                });
            })
            commit("SET_LOADING", false);
        },

        async updateRole({commit}, {id, formInput}) {
            commit("SET_ROLES", []);
            await this._vm.$axios.put('/roles/' + id, formInput)
                .then(() => {
                    router.push({name: 'roles-list'})
                    commit("SET_ROLE", {});
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'Role Updated Successfully'
                    });
                }).catch((error) => {
                    commit("SET_VALIDATION_ERRORS", error.response.data.errors);
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async getRole({commit}, id) {
            await this._vm.$axios.get('/roles/' + id)
                .then(({data}) => {
                    commit('SET_ROLE', data.data);
                }).catch((error) => {
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async deleteRole({commit}, id) {
            await this._vm.$axios.delete('/roles/' + id)
                .then(() => {
                    commit("DELETE_ROLE", id)
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'Role Removed Successfully'
                    });
                }).catch((error) => {
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        }
    }
}

export default roles
