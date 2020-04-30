<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Create Role</v-card-title>
                </v-row>
                <v-divider/>
                <v-col cols="12">
                    <data-form :form=" form " :permissions="permissions"></data-form>
                </v-col>
                <v-divider/>
                <v-card-actions>
                    <v-row align="center" justify="center">
                        <v-btn :loading="loading" @click="add" color="success">
                            Add Role
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
        name: 'RolesCreate',
        components: {DataForm},
        props: ['id'],
        data() {
            return {
                loading: false,
                valid: false,
            }
        },
        computed: {
            form: {name: '', permissions: []},
            permissions() {
                return this.$store.getters.getPermissions
            }
        },
        created() {
            this.$store.dispatch('loader', 'loadPermissions');
        },
        methods: {
            add() {
                this.$store.dispatch('loader', {action: 'addRole', payload: this.form});
            },
        }
    }
</script>

<style>

</style>