<template>
    <v-row align="center" justify="center">
        <v-col cols="12" md="6" sm="8" v-if="$can('roles_show')">
            <v-card>
                <v-card-title>Describe Role</v-card-title>
                <v-card-text>
                    <v-list-item>
                        <v-list-item-content>Name</v-list-item-content>
                        <v-list-item-content>{{form.name}}</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>Description</v-list-item-content>
                        <v-list-item-content>{{form.description || 'null'}}</v-list-item-content>
                    </v-list-item>
                    <v-divider/>
                    <v-list-item>
                        <v-list-item-content>
                            <div>Permissions</div>
                        </v-list-item-content>
                    </v-list-item>
                    <div>
                        <v-chip :key="index"
                                class="ma-1" color="primary" small v-for="(permission,index) in form.permissions">
                            {{permission.name}}
                        </v-chip>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <not-allowed v-else></not-allowed>
    </v-row>
</template>

<script>
    import NotAllowed from "../../NotAllowed";
    export default {
        name: 'RoleShow',
        components: {NotAllowed},
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
            this.$store.commit('SET_ROLES', {});
            this.$store.dispatch('loader', {action: 'getRole', payload: this.id});
        },
        methods: {},
    }
</script>

<style>

</style>
