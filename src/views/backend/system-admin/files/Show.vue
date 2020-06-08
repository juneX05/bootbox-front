<template>
    <v-row align="center" justify="center">
        <v-col cols="12" md="6" sm="8">
            <v-card>
                <v-card-title>Describe File</v-card-title>
                <v-card-text>
                    <v-list-item>
                        <b>Name</b> : {{form.name}}
                    </v-list-item>
                    <v-list-item>
                        <b>Uploaded By</b> : {{form.user.name}}
                    </v-list-item>
                    <v-list-item>
                        <b>Description</b> : {{form.description}}
                    </v-list-item>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'FileShow',
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getFileLoadingStatus
            },
            form: {
                get() {
                    if (this.$store.getters.getFile === undefined) {
                        return {extension: '', icon: '', file_type: null}
                    }
                    return this.$store.getters.getFile
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
            this.$store.dispatch('loader', {action: 'getFile', payload: this.id});
        },
        methods: {},
    }
</script>

<style>

</style>