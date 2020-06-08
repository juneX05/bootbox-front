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

        getFileById: (state) => (id) => {
            return state.allFiles.find(file => file.id === id)
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

        ADD_FILE(state, file) {
            state.allFiles.push(file);
        },

        UPDATE_FILE(state, {id, file}) {
            let index = state.allFiles.findIndex(file => file.id === id);
            state.allFiles[index] = file;
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
            });
        },

        async addFile({commit}, formInput) {
            commit("SET_LOADING", true);
            await this._vm.$axios.post('/files', formInput).then(() => {
                commit("ADD_FILE", formInput);
                router.push({name: 'files-list'})
            })
            commit("SET_LOADING", false);
        },

        async updateFile({commit}, {id, formInput}) {
            await this._vm.$axios.put('/files/' + id, formInput)
                .then(() => {
                    commit("UPDATE_FILE", {id, formInput})
                    router.push({name: 'files-list'})
                })
            commit("SET_FILE", {});
        },

        async getFile({commit}, id) {
            await this._vm.$axios.get('/files/' + id)
                .then(({data}) => {
                    commit('SET_FILE', data.data[0]);
                })
        },

        async deleteFile({commit}, id) {
            await this._vm.$axios.delete('/files/' + id)
                .then(() => {
                    commit("DELETE_FILE", id)
                })
        }
    }
}

export default files