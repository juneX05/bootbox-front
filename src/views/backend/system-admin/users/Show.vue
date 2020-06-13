<template>
    <v-row align="center" justify="center">
        <v-col cols="12" md="6" sm="8">
            <v-card>
                <v-card-title>Describe User</v-card-title>
                <v-card-text>
                    <v-list-item>
                        <b>Name</b> : {{form.name}}
                    </v-list-item>
                    <v-list-item>
                        <b>Email</b> : {{form.email}}
                    </v-list-item>
                    <v-list-item>
                        <b>Permissions</b> :
                        <v-chip :key="index"
                                class="ml-1" color="primary" small v-for="(permission,index) in form.permissions">
                            {{permission.name}}
                        </v-chip>
                    </v-list-item>
                    <v-list-item>
                        <b>Roles</b> :
                        <v-chip class="ml-1" color="primary" small>
                            {{form.role.name}}
                        </v-chip>
                    </v-list-item>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'UserShow',
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getUserLoadingStatus
            },
            form: {
                get() {
                    if (this.$store.getters.getUser === undefined) {
                        return {name: '', description: ''}
                    }
                    return this.$store.getters.getUser
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
            this.$store.dispatch('loader', {action: 'getUser', payload: this.id});
        },
        methods: {},
    }
</script>

<style>

</style>