<template>
    <v-row justify="center">
        <v-col cols="12" md="6" sm="8" v-if="$can('users_show')">
            <v-card align="left">
                <v-card-title>Describe User</v-card-title>
                <v-card-text>
                    <div>
                        <b>Name</b> : {{form.name}}
                    </div>
                    <div>
                        <b>Email</b> : {{form.email}}
                    </div>
                    <div>
                        <b>Role</b> :
                        <v-chip class="ma-1" color="primary" small>
                            {{form.role.name}}
                        </v-chip>
                    </div>
                    <div><b>Permissions </b> :</div>
                    <v-divider/>
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
        name: 'UserShow',
        components: {NotAllowed},
        props: ['id'],
        computed: {
            loading() {
                return this.$store.getters.getUserLoadingStatus
            },
            form: {
                get() {
                    if (this.$store.getters.getUser === undefined) {
                        return {name: '', description: ''}
                    }
                    return this.$store.getters.getUser
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
            this.$store.commit('SET_USER', {});
            this.$store.dispatch('loader', {action: 'getUser', payload: this.id});
        },
        methods: {},
    }
</script>

<style>

</style>
