<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Edit User</v-card-title>
                </v-row>
                <v-divider/>
                <v-col cols="12">
                    <data-form :form=" form " :permissions="permissions" :roles="roles"></data-form>
                </v-col>
                <v-divider/>
                <v-card-actions>
                    <v-row align="center" justify="center">
                        <v-btn :disabled="!valid" :loading="loading" @click="update" color="primary">
                            <v-icon>mdi-lock-edit</v-icon>
                            Update User
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
        name: 'UserEdit',
        components: {DataForm},
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
            },
            form: {
                get() {
                    return this.$store.getters.getUser
                },
                set(value) {
                    return value
                }
            }
        },
        data() {
            return {
                valid: false,
                user: {name: '', description: ''}
            }
        },
        created() {
            this.$store.dispatch('loader', 'loadPermissions');
            this.$store.dispatch('loader', 'loadRoles');
            this.$store.dispatch('loader', {action: 'getUser', payload: this.id});
        },
        methods: {
            update() {
                let formData = this.generateFormData(this.form, ['profile_picture']);
                formData.append('_method', 'PUT');
                this.$store.dispatch('loader', {
                    action: 'updateUser',
                    payload: {id: this.id, formInput: formData}
                });
            },
        },
    }
</script>

<style>

</style>