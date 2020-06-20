<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-if="$can('users_store')" v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Create User</v-card-title>
                </v-row>
                <v-divider/>
                <v-col cols="12">
                    <data-form :form=" form " :permissions="permissions" :roles="roles"></data-form>
                </v-col>
                <v-divider/>
                <v-card-actions>
                    <v-row align="center" justify="center">
                        <v-btn :disabled="!valid" :loading="loading" @click="add" color="primary">
                            <v-icon>mdi-lock-plus</v-icon>
                            Add User
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
        name: 'UserCreate',
        components: {NotAllowed, DataForm},
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getUserLoadingStatus
            },
            permissions() {
                return this.$store.getters.getPermissions
            },
            roles() {
                return this.$store.getters.getRoles
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
            this.$store.dispatch('loader', 'loadRoles');
        },
        methods: {
            add() {
                let formData = this.generateFormData(this.form, ['profile_picture']);
                this.$store.dispatch('loader', {action: 'addUser', payload: formData});
            },
        }
    }
</script>

<style>

</style>