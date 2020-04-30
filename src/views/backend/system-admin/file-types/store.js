import router from "../../../../router";

const fileTypes = {
    state: {
        allFileTypes: [],
        fileTypeLoading: false,
        fileType: {}
    },
    getters: {
        getFileTypes(state) {
            return state.allFileTypes;
        },

        getFileType(state) {
            return state.fileType;
        },

        getFileTypeById: (state) => (id) => {
            return state.allFileTypes.find(fileType => fileType.id === id)
        },

        getFileTypesCount(state) {
            return state.allFileTypes.length
        },

        getFileTypeLoadingStatus(state) {
            return state.fileTypeLoading
        }
    },
    mutations: {
        SET_FILE_TYPES(state, fileTypes) {
            state.allFileTypes = fileTypes;
        },

        ADD_FILE_TYPE(state, fileType) {
            state.allFileTypes.push(fileType);
        },

        UPDATE_FILE_TYPE(state, {id, fileType}) {
            let index = state.allFileTypes.findIndex(fileType => fileType.id === id);
            state.allFileTypes[index] = fileType;
        },

        DELETE_FILE_TYPE(state, id) {
            let index = state.allFileTypes.findIndex(fileType => fileType.id === id)
            state.allFileTypes.splice(index, 1)
        },

        SET_FILE_TYPE(state, fileType) {
            state.fileType = fileType;
        },

        SET_LOADING(state, value) {
            state.loading = value
        },
    },
    actions: {
        async loadFileTypes({commit}) {
            await this._vm.$axios.get("/fileTypes").then(({data}) => {
                const fileTypes = data.data;
                commit("SET_FILE_TYPES", fileTypes);
            });
        },

        async addFileType({commit}, formInput) {
            commit("SET_LOADING", true);
            await this._vm.$axios.post('/fileTypes', formInput).then(() => {
                commit("ADD_FILE_TYPE", formInput);
                router.push({name: 'fileTypes-list'})
            })
            commit("SET_LOADING", false);
        },

        async updateFileType({commit}, {id, formInput}) {
            await this._vm.$axios.put('/fileTypes/' + id, formInput)
                .then(() => {
                    commit("UPDATE_FILE_TYPE", {id, formInput})
                    router.push({name: 'fileTypes-list'})
                })
        },

        async getFileType({commit}, id) {
            await this._vm.$axios.get('/fileTypes/' + id)
                .then(({data}) => {
                    commit('SET_FILE_TYPE', data.data[0]);
                })
        },

        async deleteFileType({commit}, id) {
            await this._vm.$axios.delete('/fileTypes/' + id)
                .then(() => {
                    commit("DELETE_FILE_TYPE", id)
                })
        }
    }
}

export default fileTypes