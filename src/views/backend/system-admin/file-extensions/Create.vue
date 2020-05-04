<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Create FileExtension</v-card-title>
                </v-row>
                <v-divider/>
                <v-col cols="12">
                    <data-form :file_types="file_types" :form=" form "></data-form>
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
    </v-col>
</template>

<script>
    import DataForm from "./DataForm";

    export default {
        name: 'FileExtensionCreate',
        components: {DataForm},
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getFileExtensionLoadingStatus
            },
            file_types() {
                return this.$store.getters.getFileTypes
            }
        },
        data() {
            return {
                valid: false,
                form: {extension: '', extension_icon: '', file_type: null},
            }
        },
        created() {
            this.$store.dispatch('loader', 'loadFileTypes');
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