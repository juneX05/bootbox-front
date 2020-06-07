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

        getFileExtensionById: (state) => (id) => {
            return state.allFileExtensions.find(fileExtension => fileExtension.id === id)
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

        ADD_FILE_EXTENSION(state, fileExtension) {
            state.allFileExtensions.push(fileExtension);
        },

        UPDATE_FILE_EXTENSION(state, {id, fileExtension}) {
            let index = state.allFileExtensions.findIndex(fileExtension => fileExtension.id === id);
            state.allFileExtensions[index] = fileExtension;
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
            });
        },

        async addFileExtension({commit}, formInput) {
            commit("SET_LOADING", true);
            await this._vm.$axios.post('/fileExtensions', formInput).then(() => {
                commit("ADD_FILE_EXTENSION", formInput);
                router.push({name: 'fileExtensions-list'})
            })
            commit("SET_LOADING", false);
        },

        async updateFileExtension({commit}, {id, formInput}) {
            await this._vm.$axios.put('/fileExtensions/' + id, formInput)
                .then(() => {
                    commit("UPDATE_FILE_EXTENSION", {id, formInput})
                    router.push({name: 'fileExtensions-list'})
                })
            commit("SET_FILE_EXTENSION", {});
        },

        async getFileExtension({commit}, id) {
            await this._vm.$axios.get('/fileExtensions/' + id)
                .then(({data}) => {
                    commit('SET_FILE_EXTENSION', data.data[0]);
                })
        },

        async deleteFileExtension({commit}, id) {
            await this._vm.$axios.delete('/fileExtensions/' + id)
                .then(() => {
                    commit("DELETE_FILE_EXTENSION", id)
                })
        }
    }
}

export default fileExtensions