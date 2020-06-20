<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-if="$can('file_extensions_store')" v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Create FileExtension</v-card-title>
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
                            Add FileExtension
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
        name: 'FileExtensionCreate',
        components: {NotAllowed, DataForm},
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getFileExtensionLoadingStatus
            },
        },
        data() {
            return {
                valid: false,
                form: {icon: '', extension: '', file_type: null},
            }
        },
        created() {
        },
        methods: {
            add() {
                this.$store.dispatch('loader', {action: 'addFileExtension', payload: this.form});
            },
        }
    }
</script>

<style>

</style>