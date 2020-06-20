<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-if="$can('roles_store')" v-model="valid">
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
                        <v-btn :disabled="!valid" :loading="loading" @click="add" color="primary">
                            <v-icon>mdi-lock-plus</v-icon>
                            Add Role
                        </v-btn>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-form>
        <not-allowed v-else></not-allowed>
    </v-col>
</template>

<script>
    import DataForm from "./DataForm";
    import NotAllowed from "../../NotAllowed";

    export default {
        name: 'RoleCreate',
        components: {NotAllowed, DataForm},
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getRoleLoadingStatus
            },
            permissions() {
                return this.$store.getters.getPermissions
            }
        },
        data() {
            return {
                valid: false,
                form: {name: '', description: '', permissions: []},
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