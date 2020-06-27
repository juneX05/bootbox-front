import router from "../../../../router";

const permissions = {
    state: {
        allPermissions: [],
        permissionLoading: false,
        permission: {}
    },
    getters: {
        getPermissions(state) {
            return state.allPermissions;
        },

        getPermission(state) {
            return state.permission;
        },

        getPermissionsCount(state) {
            return state.allPermissions.length
        },

        getPermissionLoadingStatus(state) {
            return state.permissionLoading
        }
    },
    mutations: {
        SET_PERMISSIONS(state, permissions) {
            state.allPermissions = permissions;
        },

        DELETE_PERMISSION(state, id) {
            let index = state.allPermissions.findIndex(permission => permission.id === id)
            state.allPermissions.splice(index, 1)
        },

        SET_PERMISSION(state, permission) {
            state.permission = permission;
        },

        SET_LOADING(state, value) {
            state.loading = value
        },
    },
    actions: {
        async loadPermissions({commit}) {
            await this._vm.$axios.get("/permissions").then(({data}) => {
                const permissions = data.data;
                commit("SET_PERMISSIONS", permissions);
            }).catch((error) => {
                commit("SET_SNACKBAR", {
                    show: true, color: 'error',
                    text: error.response.data.message
                });
            });
        },

        async addPermission({commit}, formInput) {
            commit("SET_PERMISSIONS", []);
            await this._vm.$axios.post('/permissions', formInput).then(() => {
                router.push({name: 'permissions-list'})
                commit("SET_SNACKBAR", {
                    show: true, color: 'success',
                    text: 'New Permission Added Successfully'
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

        async updatePermission({commit}, {id, formInput}) {
            commit("SET_PERMISSIONS", []);
            await this._vm.$axios.put('/permissions/' + id, formInput)
                .then(() => {
                    router.push({name: 'permissions-list'})
                    commit("SET_PERMISSION", {});
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'Permission Updated Successfully'
                    });
                }).catch((error) => {
                    commit("SET_VALIDATION_ERRORS", error.response.data.errors);
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async getPermission({commit}, id) {
            await this._vm.$axios.get('/permissions/' + id)
                .then(({data}) => {
                    commit('SET_PERMISSION', data.data);
                }).catch((error) => {
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async deletePermission({commit}, id) {
            await this._vm.$axios.delete('/permissions/' + id)
                .then(() => {
                    commit("DELETE_PERMISSION", id)
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'Permission Deleted Successfully'
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

export default permissions
