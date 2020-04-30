<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Create FileType</v-card-title>
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
                            Add FileType
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
        name: 'FileTypeCreate',
        components: {DataForm},
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getFileTypeLoadingStatus
            }
        },
        data() {
            return {
                valid: false,
                form: {name: '', description: ''},
            }
        },
        created() {
            this.$store.dispatch('loader', 'loadFileTypes');
        },
        methods: {
            add() {
                this.$store.dispatch('loader', {action: 'addFileType', payload: this.form});
            },
        }
    }
</script>

<style>

</style>