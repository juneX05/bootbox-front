<template>
    <v-col cols="12" md="6" sm="8">
        <v-card>
            <v-row align="center" justify="center">
                <v-card-title>{{ id ? 'Update' : 'Create' }} Role</v-card-title>
            </v-row>
            <v-divider/>
            <v-col cols="12">
                <data-form :form=" form " :permissions="permissions"></data-form>
            </v-col>
            <v-divider/>
            <v-card-actions>
                <v-row align="center" justify="center">
                    <v-btn :loading="loading" @click="processRole" color="success">
                        {{ id ? 'Update' : 'Add' }} Role
                    </v-btn>
                </v-row>
            </v-card-actions>
        </v-card>
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
            }
        },
        computed: {
            form: {
                get() {
                    if (this.id) {
                        return this.$store.getters.getRole
                    } else {
                        return {name: '', permissions: []}
                    }
                },

                set(value) {
                    return value
                }
            },
            permissions: {
                get() {
                    return this.$store.getters.getAllPermissions
                }
            }
        },
        created() {
            if (this.id) {
                this.$store.dispatch('loader', {type: 'showRole', data: this.id})
            }
            this.$store.dispatch('loader', 'loadPermissions');
        },
        methods: {
            processRole() {
                this.loading = true;
                let actionType = this.id ? 'updateRole' : 'addRole';
                let data = {
                    data: this.form
                };
                if (this.id) data['id'] = this.id;

                this.$store.dispatch('loader', {type: actionType, data: data});
                this.$router.push({name: 'roles-list'});
                this.loading = false;
            },
        }
    }
</script>

<style>

</style>