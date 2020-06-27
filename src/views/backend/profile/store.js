import router from "../../../router";

const profiles = {
    state: {
        profile: {}
    },
    getters: {
        getProfile(state) {
            return state.profile;
        },
    },
    mutations: {
        SET_PROFILE(state, profile) {
            state.profile = profile;
        },
    },
    actions: {

        async updateProfile({commit}, {id, formInput}) {
            commit("SET_PROFILES", []);
            await this._vm.$axios.post('/profiles/' + id, formInput)
                .then(() => {
                    router.push({name: 'profiles-list'})
                    commit("SET_PROFILE", {});
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'Profile Updated Successfully'
                    });
                }).catch((error) => {
                    commit("SET_VALIDATION_ERRORS", error.response.data.errors);
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async updateProfilePicture({dispatch, commit}, {formInput}) {
            await this._vm.$axios.post('/profile/picture/update', formInput)
                .then(() => {
                    dispatch('getCurrentUser')
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'Profile Picture Updated Successfully'
                    });
                }).catch((error) => {
                    commit("SET_VALIDATION_ERRORS", error.response.data.errors);
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async updateUserInfo({dispatch, commit}, formInput) {
            await this._vm.$axios.put('/profile/change/info', formInput)
                .then(() => {
                    dispatch('getCurrentUser')
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'Information Updated Successfully'
                    });
                }).catch((error) => {
                    commit("SET_VALIDATION_ERRORS", error.response.data.errors);
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async updateUserPassword({dispatch, commit}, formInput) {
            await this._vm.$axios.put('/profile/change/password', formInput)
                .then(() => {
                    dispatch('getCurrentUser')
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: "Password Changed Successfully\n\n. In 10 seconds you will be logged out so that you can enter your new password."
                    });
                    setTimeout(() => {
                        dispatch('logout')
                    }, 10000)
                }).catch((error) => {
                    commit("SET_VALIDATION_ERRORS", error.response.data.errors);
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async removeProfilePicture({dispatch, commit}) {
            await this._vm.$axios.put('/profile/picture/remove')
                .then(() => {
                    dispatch("getCurrentUser")
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

        async getProfile({commit}) {
            let id = this.$store.state.current_user ? this.$store.state.current_user.id : ''
            await this._vm.$axios.get('/users/' + id)
                .then(({data}) => {
                    commit('SET_PROFILE', data.data[0]);
                }).catch((error) => {
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

    }
}

export default profiles
