<template>
    <v-row align="center" justify="center">
        <v-col cols="12" md="6" sm="8">
            <v-card>
                <v-card-title>Describe Role</v-card-title>
                <v-card-text>
                    <v-list-item>
                        <b>Name</b> : {{form.name}}
                    </v-list-item>
                    <v-list-item>
                        <b>Description</b> : {{form.description}}
                    </v-list-item>
                    <v-list-item>
                        <b>Permissions</b> :
                        <v-chip :key="index"
                                class="ml-1" color="primary" small v-for="(permission,index) in form.permissions">
                            {{permission.name}}
                        </v-chip>
                    </v-list-item>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'RoleShow',
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getRoleLoadingStatus
            },
            form: {
                get() {
                    if (this.$store.getters.getRole === undefined) {
                        return {name: '', description: ''}
                    }
                    return this.$store.getters.getRole
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
            this.$store.dispatch('loader', {action: 'getRole', payload: this.id});
        },
        methods: {},
    }
</script>

<style>

</style>