<template>
    <v-col cols="12" md="6" sm="8">
        <v-form v-if="$can('permissions_store')" v-model="valid">
            <v-card>
                <v-row align="center" justify="center">
                    <v-card-title>Create Permission</v-card-title>
                </v-row>
                <v-divider/>
                <v-col cols="12">
                    <data-form :form=" form "></data-form>
                </v-col>
                <v-divider/>
                <v-card-actions>
                    <v-row align="center" justify="center">
                        <v-btn :disabled="!valid" :loading="loading" @click="add" color="primary">
                            <v-icon>mdi-lock-plus</v-icon>
                            Add Permission
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
        name: 'PermissionCreate',
        components: {NotAllowed, DataForm},
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getPermissionLoadingStatus
            }
        },
        data() {
            return {
                valid: false,
                form: {name: '', description: ''},
            }
        },
        created() {
        },
        methods: {
            add() {
                this.$store.dispatch('loader', {action: 'addPermission', payload: this.form});
            },
        }
    }
</script>

<style>

</style>