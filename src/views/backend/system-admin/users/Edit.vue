<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-if="$can('users_update')" v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Edit User</v-card-title>
                </v-row>
                <v-divider/>
                <v-col cols="12">
                    <v-btn @click=" removeProfilePicture "
                           v-if=" form.profile_picture && Object.keys(form.profile_picture).includes('path') ">
                        Remove Profile Picture
                    </v-btn>

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
        <not-allowed v-else></not-allowed>
    </v-col>
</template>

<script>
    import DataForm from "./DataForm";
    import NotAllowed from "../../NotAllowed";

    export default {
        name: 'UserEdit',
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
            this.$store.commit('SET_USER', {});
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

            removeProfilePicture() {
                this.$store.dispatch('loader', {
                    action: 'removeProfilePicture',
                    payload: {id: this.id}
                });
            }
        },
    }
</script>

<style>

</style>