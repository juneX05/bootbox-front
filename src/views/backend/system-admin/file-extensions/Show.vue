<template>
    <v-row align="center" justify="center">
        <v-col cols="12" md="6" sm="8">
            <v-card>
                <v-card-title>Describe FileExtension</v-card-title>
                <v-card-text>
                    <v-list-item>
                        <b>Extension</b> : {{form.extension}}
                    </v-list-item>
                    <v-list-item>
                        <b>Icon</b> : {{form.icon}}
                    </v-list-item>
                    <v-list-item>
                        <b>Mime Type</b> : {{form.mime_type}}
                    </v-list-item>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'FileExtensionShow',
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getFileExtensionLoadingStatus
            },
            form: {
                get() {
                    if (this.$store.getters.getFileExtension === undefined) {
                        return {extension: '', icon: '', file_type: null}
                    }
                    return this.$store.getters.getFileExtension
                },
                set(value) {
                    return value
                }
            }
        },
        data() {
            return {}
        },
        created() {
            this.$store.dispatch('loader', {action: 'getFileExtension', payload: this.id});
        },
        methods: {},
    }
</script>

<style>

</style>