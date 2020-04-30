import router from "../../../../router";

const roles = {
    state: {
        allRoles: [],
        loading: false,
    },
    getters: {
        getRoles(state) {
            return state.roles;
        },

        getRoleById: (state) => (id) => {
            return state.allRoles.find(role => role.id === id)
        },

        getRolesCount(state) {
            return state.allRoles.length
        },

        getLoadingStatus(state) {
            return state.loading
        }
    },
    mutations: {
        SET_ROLES(state, roles) {
            state.allRoles = roles;
        },

        ADD_ROLE(state, role) {
            state.allRoles.push(role);
        },

        UPDATE_ROLE(state, {id, role}) {
            let index = state.allRoles.findIndex(role => role.id === id);
            state.allRoles[index] = role;
        },

        DELETE_ROLE(state, id) {
            let index = state.allRoles.findIndex(role => role.id === id)
            state.allRoles.splice(index, 1)
        },

        SET_LOADING(state, value) {
            state.loading = value
        }
    },
    actions: {
        async loadRoles({commit}) {
            await this._vm.$axios.get("/roles").then(({data}) => {
                const roles = data.data;
                commit("SET_ROLES", roles);
            });
        },

        async addRole({commit}, formInput) {
            commit("SET_LOADING", true);
            await this._vm.$axios.post('/roles', formInput).then(() => {
                commit("ADD_ROLE", formInput);
            })
            await router.push({name: 'roles-list'});
            commit("SET_LOADING", false);
        },

        async updateRole({commit}, {id, formInput}) {
            await this._vm.$axios.put('/roles/' + id, formInput)
                .then(() => {
                    commit("UPDATE_ROLE", {id, formInput})
                })
        },

        async deleteRole({commit}, id) {
            await this._vm.$axios.delete('/roles/' + id)
                .then(() => {
                    commit("DELETE_ROLE", id)
                })
        }
    }
}

export default roles