<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Edit FileType</v-card-title>
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
                            Update FileType
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
        name: 'FileTypeEdit',
        components: {DataForm},
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getFileTypeLoadingStatus
            },
            form: {
                get() {
                    if (this.$store.getters.getFileType === undefined) {
                        return {name: '', description: ''}
                    }
                    return this.$store.getters.getFileType
                },
                set(value) {
                    return value
                }
            }
        },
        data() {
            return {
                valid: false,
                fileType: {name: '', description: ''}
            }
        },
        created() {
            this.$store.dispatch('loader', {action: 'getFileType', payload: this.id});
        },
        methods: {
            update() {
                this.$store.dispatch('loader', {
                    action: 'updateFileType',
                    payload: {id: this.id, formInput: this.form}
                });
            },
        },
    }
</script>

<style>

</style>