import router from "../../../../router";

const fileExtensions = {
    state: {
        allFileExtensions: [],
        fileExtensionLoading: false,
        fileExtension: {}
    },
    getters: {
        getFileExtensions(state) {
            return state.allFileExtensions;
        },

        getFileExtension(state) {
            return state.fileExtension;
        },

        getFileExtensionsCount(state) {
            return state.allFileExtensions.length
        },

        getFileExtensionLoadingStatus(state) {
            return state.fileExtensionLoading
        }
    },
    mutations: {
        SET_FILE_EXTENSIONS(state, fileExtensions) {
            state.allFileExtensions = fileExtensions;
        },

        DELETE_FILE_EXTENSION(state, id) {
            let index = state.allFileExtensions.findIndex(fileExtension => fileExtension.id === id)
            state.allFileExtensions.splice(index, 1)
        },

        SET_FILE_EXTENSION(state, fileExtension) {
            state.fileExtension = fileExtension;
        },

        SET_LOADING(state, value) {
            state.loading = value
        },
    },
    actions: {
        async loadFileExtensions({commit}) {
            await this._vm.$axios.get("/fileExtensions").then(({data}) => {
                const fileExtensions = data.data;
                commit("SET_FILE_EXTENSIONS", fileExtensions);
            }).catch((error) => {
                commit("SET_SNACKBAR", {
                    show: true, color: 'error',
                    text: error.response.data.message
                });
            });
        },

        async addFileExtension({commit}, formInput) {
            commit("SET_FILE_EXTENSIONS", []);
            await this._vm.$axios.post('/fileExtensions', formInput).then(() => {
                router.push({name: 'fileExtensions-list'})
                commit("SET_SNACKBAR", {
                    show: true, color: 'success',
                    text: 'New File Extension Added Successfully'
                });
            }).catch((error) => {
                commit("SET_SNACKBAR", {
                    show: true, color: 'error',
                    text: error.response.data.message
                });
            })
            commit("SET_LOADING", false);
        },

        async updateFileExtension({commit}, {id, formInput}) {
            commit("SET_FILE_EXTENSIONS", []);
            await this._vm.$axios.put('/fileExtensions/' + id, formInput)
                .then(() => {
                    router.push({name: 'fileExtensions-list'})
                    commit("SET_FILE_EXTENSION", {});
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'File Extension Updated Successfully'
                    });
                }).catch((error) => {
                    commit("SET_VALIDATION_ERRORS", error.response.data.errors);
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async getFileExtension({commit}, id) {
            await this._vm.$axios.get('/fileExtensions/' + id)
                .then(({data}) => {
                    commit('SET_FILE_EXTENSION', data.data);
                }).catch((error) => {
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async deleteFileExtension({commit}, id) {
            await this._vm.$axios.delete('/fileExtensions/' + id)
                .then(() => {
                    commit("DELETE_FILE_EXTENSION", id)
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'File Extension Deleted Successfully'
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

export default fileExtensions
