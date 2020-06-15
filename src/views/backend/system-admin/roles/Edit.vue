<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Edit Role</v-card-title>
                </v-row>
                <v-divider/>
                <v-col cols="12">
                    <data-form :form=" form " :permissions="permissions"></data-form>
                </v-col>
                <v-divider/>
                <v-card-actions>
                    <v-row align="center" justify="center">
                        <v-btn :disabled="!valid" :loading="loading" @click="update" color="primary">
                            <v-icon>mdi-lock-edit</v-icon>
                            Update Role
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
        name: 'RoleEdit',
        components: {DataForm},
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getRoleLoadingStatus
            },
            permissions() {
                return this.$store.getters.getPermissions
            },
            form: {
                get() {
                    return this.$store.getters.getRole
                },
                set(value) {
                    return value
                }
            }
        },
        data() {
            return {
                valid: false,
                role: {name: '', description: ''}
            }
        },
        created() {
            this.$store.commit("SET_ROLE", {});
            this.$store.dispatch('loader', 'loadPermissions');
            this.$store.dispatch('loader', {action: 'getRole', payload: this.id});
        },
        methods: {
            update() {
                this.$store.dispatch('loader', {
                    action: 'updateRole',
                    payload: {id: this.id, formInput: this.form}
                });
            },
        },
    }
</script>

<style>

</style>