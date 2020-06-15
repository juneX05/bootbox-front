<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Edit Permission</v-card-title>
                </v-row>
                <v-divider/>
                <v-col cols="12">
                    <data-form :form=" form "></data-form>
                </v-col>
                <v-divider/>
                <v-card-actions>
                    <v-row align="center" justify="center">
                        <v-btn :disabled="!valid" :loading="loading" @click="update" color="primary">
                            <v-icon>mdi-lock-edit</v-icon>
                            Update Permission
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
        name: 'PermissionEdit',
        components: {DataForm},
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getPermissionLoadingStatus
            },
            form: {
                get() {
                    return this.$store.getters.getPermission
                },
                set(value) {
                    return value
                }
            }
        },
        data() {
            return {
                valid: false,
                permission: {name: '', description: ''}
            }
        },
        created() {
            this.$store.commit("SET_PERMISSION", {});
            this.$store.dispatch('loader', {action: 'getPermission', payload: this.id});
        },
        methods: {
            update() {
                this.$store.dispatch('loader', {
                    action: 'updatePermission',
                    payload: {id: this.id, formInput: this.form}
                });
            },
        },
    }
</script>

<style>

</style>