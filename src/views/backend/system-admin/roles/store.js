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

        getRoleById: (state) => (id) => {
            return state.allRoles.find(role => role.id === id)
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
            });
        },

        async addRole({commit}, formInput) {
            commit("SET_LOADING", true);
            await this._vm.$axios.post('/roles', formInput).then(() => {
                commit("ADD_ROLE", formInput);
                router.push({name: 'roles-list'})
            })
            commit("SET_LOADING", false);
        },

        async updateRole({commit}, {id, formInput}) {
            await this._vm.$axios.put('/roles/' + id, formInput)
                .then(() => {
                    commit("UPDATE_ROLE", {id, formInput})
                    router.push({name: 'roles-list'})
                })
        },

        async getRole({commit}, id) {
            await this._vm.$axios.get('/roles/' + id)
                .then(({data}) => {
                    commit('SET_ROLE', data.data[0]);
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