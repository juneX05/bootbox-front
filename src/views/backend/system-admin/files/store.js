import router from "../../../../router";

const files = {
    state: {
        allFiles: [],
        fileLoading: false,
        file: {}
    },
    getters: {
        getFiles(state) {
            return state.allFiles;
        },

        getFile(state) {
            return state.file;
        },

        getFilesCount(state) {
            return state.allFiles.length
        },

        getFileLoadingStatus(state) {
            return state.fileLoading
        }
    },
    mutations: {
        SET_FILES(state, files) {
            state.allFiles = files;
        },

        DELETE_FILE(state, id) {
            let index = state.allFiles.findIndex(file => file.id === id)
            state.allFiles.splice(index, 1)
        },

        SET_FILE(state, file) {
            state.file = file;
        },

        SET_LOADING(state, value) {
            state.loading = value
        },
    },
    actions: {
        async loadFiles({commit}) {
            await this._vm.$axios.get("/files").then(({data}) => {
                const files = data.data;
                commit("SET_FILES", files);
            }).catch((error) => {
                commit("SET_SNACKBAR", {
                    show: true, color: 'error',
                    text: error.response.data.message
                });
            });
        },

        async addFile({commit}, formInput) {
            commit("SET_FILES", []);
            await this._vm.$axios.post('/files', formInput).then(() => {
                router.push({name: 'files-list'})
                commit("SET_SNACKBAR", {
                    show: true, color: 'success',
                    text: 'File Added Successfully'
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

        async updateFile({commit}, {id, formInput}) {
            commit("SET_FILES", []);
            await this._vm.$axios.put('/files/' + id, formInput)
                .then(() => {
                    router.push({name: 'files-list'})
                    commit("SET_FILE", {});
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'File Updated Successfully'
                    });
                }).catch((error) => {
                    commit("SET_VALIDATION_ERRORS", error.response.data.errors);
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async getFile({commit}, id) {
            await this._vm.$axios.get('/files/' + id)
                .then(({data}) => {
                    commit('SET_FILE', data.data);
                }).catch((error) => {
                    commit("SET_SNACKBAR", {
                        show: true, color: 'error',
                        text: error.response.data.message
                    });
                })
        },

        async deleteFile({commit}, id) {
            await this._vm.$axios.delete('/files/' + id)
                .then(() => {
                    commit("DELETE_FILE", id)
                    commit("SET_SNACKBAR", {
                        show: true, color: 'success',
                        text: 'File Deleted Successfully'
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

export default files
