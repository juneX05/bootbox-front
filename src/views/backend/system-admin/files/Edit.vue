<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-if="$can('files_update')" v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Edit File</v-card-title>
                </v-row>
                <v-divider/>
                <v-col cols="12">
                    <data-form :form=" form "></data-form>
                </v-col>
                <v-divider/>
                <v-card-actions>
                    <v-row align="center" justify="center">
                        <v-btn :disabled="!valid" :loading="loading" @click="update" color="primary">
                            <v-icon>mdi-lock-edit</v-icon>
                            Update File
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
        name: 'FileEdit',
        components: {NotAllowed, DataForm},
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getFileLoadingStatus
            },
            form: {
                get() {
                    return this.$store.getters.getFile
                },
                set(value) {
                    return value
                }
            }
        },
        data() {
            return {
                valid: false,
                file: {name: '', description: '', upload_file: null}
            }
        },
        created() {
            this.$store.commit("SET_FILE", {});
            this.$store.dispatch('loader', {action: 'getFile', payload: this.id});
        },
        methods: {
            update() {
                this.$store.dispatch('loader', {
                    action: 'updateFile',
                    payload: {id: this.id, formInput: this.form}
                });
            },
        },
    }
</script>

<style>

</style>