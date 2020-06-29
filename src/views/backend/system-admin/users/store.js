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
            }).catch((error) => {
                commit("SET_SNACKBAR", {
                    show: true, color: 'error',
                    text: error.response.data.message
                });
            });
        },

        async addUser({commit}, formInput) {
            commit("SET_USERS", []);
            await this._vm.$axios.post('/users', formInput).then(() => {
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
        },

        async updateUser({commit}, {id, formInput}) {
            commit("SET_USERS", []);
            await this._vm.$axios.post('/users/' + id, formInput)
                .then(() => {
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

        async removeProfilePicture({commit}, {id}) {
            await this._vm.$axios.post('/users/remove/profile_picture', {user_id: id})
                .then(({data}) => {
                    let user = data.data
                    commit("SET_USER", user);
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'Profile Picture Removed Successfully'
                    });
                }).catch((error) => {
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async getUser({commit}, id) {
            await this._vm.$axios.get('/users/' + id)
                .then(({data}) => {
                    commit('SET_USER', data.data);
                }).catch((error) => {
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
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
