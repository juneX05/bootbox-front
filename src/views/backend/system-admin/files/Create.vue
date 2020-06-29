<template>
    <v-col cols="12" md="6" sm="8">
        <v-form enctype="multipart/form-data" v-if="$can('files_store')" v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Create File</v-card-title>
                </v-row>
                <v-divider/>
                <v-col cols="12">
                    <data-form :form=" form "></data-form>
                </v-col>
                <v-divider/>
                <v-card-actions>
                    <v-row align="center" justify="center">
                        <v-btn :disabled="!valid" :loading="loading" @click="add" color="primary">
                            <v-icon>mdi-lock-plus</v-icon>
                            Add File
                        </v-btn>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-form>
        <not-allowed v-else></not-allowed>
    </v-col>
</template>

<script>
    import DataForm from "./DataForm";
    import NotAllowed from "../../NotAllowed";

    export default {
        name: 'FileCreate',
        components: {NotAllowed, DataForm},
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getFileLoadingStatus
            },
        },
        data() {
            return {
                valid: false,
                form: {name: '', type: '', upload_file: null},
            }
        },
        created() {

        },
        methods: {
            add() {
                let formData = new FormData();
                let formKeys = Object.keys(this.form);
                formKeys.forEach((key) => {
                    formData.append(key, this.form[key]);
                })
                this.$store.dispatch('loader', {action: 'addFile', payload: formData});
            },
        }
    }
</script>

<style>

</style>
