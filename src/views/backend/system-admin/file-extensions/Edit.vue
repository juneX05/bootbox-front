<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Edit FileExtension</v-card-title>
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
                            Update FileExtension
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
        name: 'FileExtensionEdit',
        components: {DataForm},
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getFileExtensionLoadingStatus
            },
            form: {
                get() {
                    return this.$store.getters.getFileExtension
                },
                set(value) {
                    return value
                }
            }
        },
        data() {
            return {
                valid: false,
                fileExtension: {name: '', description: ''}
            }
        },
        created() {
            this.$store.commit('SET_FILE_EXTENSION', {});
            this.$store.dispatch('loader', {action: 'getFileExtension', payload: this.id});
        },
        methods: {
            update() {
                this.$store.dispatch('loader', {
                    action: 'updateFileExtension',
                    payload: {id: this.id, formInput: this.form}
                });
            },
        },
    }
</script>

<style>

</style>