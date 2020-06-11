<template>
    <v-row align="center" justify="center">
        <v-col cols="12" md="6" sm="8">
            <v-card>
                <v-card-title>Describe Permission</v-card-title>
                <v-card-text>
                    <v-list-item>
                        <b>Name</b> : {{form.name}}
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
        name: 'PermissionShow',
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getPermissionLoadingStatus
            },
            form: {
                get() {
                    if (this.$store.getters.getPermission === undefined) {
                        return {name: '', description: ''}
                    }
                    return this.$store.getters.getPermission
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
            this.$store.dispatch('loader', {action: 'getPermission', payload: this.id});
        },
        methods: {},
    }
</script>

<style>

</style>