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

        getPermissionById: (state) => (id) => {
            return state.allPermissions.find(permission => permission.id === id)
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

        ADD_PERMISSION(state, permission) {
            state.allPermissions.push(permission);
        },

        UPDATE_PERMISSION(state, {id, permission}) {
            let index = state.allPermissions.findIndex(permission => permission.id === id);
            state.allPermissions[index] = permission;
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
            });
        },

        async addPermission({commit}, formInput) {
            commit("SET_LOADING", true);
            await this._vm.$axios.post('/permissions', formInput).then(() => {
                commit("ADD_PERMISSION", formInput);
                router.push({name: 'permissions-list'})
            })
            commit("SET_LOADING", false);
        },

        async updatePermission({commit}, {id, formInput}) {
            await this._vm.$axios.put('/permissions/' + id, formInput)
                .then(() => {
                    commit("UPDATE_PERMISSION", {id, formInput})
                    router.push({name: 'permissions-list'})
                })
        },

        async getPermission({commit}, id) {
            await this._vm.$axios.get('/permissions/' + id)
                .then(({data}) => {
                    commit('SET_PERMISSION', data.data[0]);
                })
        },

        async deletePermission({commit}, id) {
            await this._vm.$axios.delete('/permissions/' + id)
                .then(() => {
                    commit("DELETE_PERMISSION", id)
                })
        }
    }
}

export default permissions