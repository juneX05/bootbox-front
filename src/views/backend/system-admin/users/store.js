import router from "../../../../router";

const users = {
    state: {
        allUsers: [],
        userLoading: false,
        user: {}
    },
    getters: {
        getUsers(state) {
            return state.allUsers;
        },

        getUser(state) {
            return state.user;
        },

        getUserById: (state) => (id) => {
            return state.allUsers.find(user => user.id === id)
        },

        getUsersCount(state) {
            return state.allUsers.length
        },

        getUserLoadingStatus(state) {
            return state.userLoading
        }
    },
    mutations: {
        SET_USERS(state, users) {
            state.allUsers = users;
        },

        ADD_USER(state, user) {
            state.allUsers.push(user);
        },

        UPDATE_USER(state, {id, user}) {
            let index = state.allUsers.findIndex(user => user.id === id);
            state.allUsers[index] = user;
        },

        DELETE_USER(state, id) {
            let index = state.allUsers.findIndex(user => user.id === id)
            state.allUsers.splice(index, 1)
        },

        SET_USER(state, user) {
            state.user = user;
        },

        SET_LOADING(state, value) {
            state.loading = value
        },
    },
    actions: {
        async loadUsers({commit}) {
            await this._vm.$axios.get("/users").then(({data}) => {
                const users = data.data;
                commit("SET_USERS", users);
            });
        },

        async addUser({commit}, formInput) {
            commit("SET_LOADING", true);
            await this._vm.$axios.post('/users', formInput).then(() => {
                commit("ADD_USER", formInput);
                router.push({name: 'users-list'})
                commit("SET_SNACKBAR", {
                    show: true, color: 'success',
                    text: 'New User Added Successfully'
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

        async updateUser({commit}, {id, formInput}) {
            await this._vm.$axios.post('/users/' + id, formInput)
                .then(() => {
                    commit("UPDATE_USER", {id, formInput})
                    router.push({name: 'users-list'})
                    commit("SET_USER", {});
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'User Updated Successfully'
                    });
                }).catch((error) => {
                    commit("SET_VALIDATION_ERRORS", error.response.data.errors);
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async getUser({commit}, id) {
            await this._vm.$axios.get('/users/' + id)
                .then(({data}) => {
                    commit('SET_USER', data.data[0]);
                })
        },

        async deleteUser({commit}, id) {
            await this._vm.$axios.delete('/users/' + id)
                .then(() => {
                    commit("DELETE_USER", id)
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'User Removed Successfully'
                    });
                })
        }
    }
}

export default users