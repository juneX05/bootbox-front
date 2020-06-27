<template>
    <v-container fluid>
        <listings :items="users" :keys="keys" v-if="$can('users_access')" v-slot:default="props">
            <v-card class="pt-2 ">
                <v-row align="center" class="spacer mb-1" justify="space-around" no-gutters>
                    <v-col cols="4">
                        <avatar :name="props.item.name" :profile_picture="props.item.profile_picture"></avatar>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title class="subheading font-weight-bold text-break">{{ props.item.name }}
                        </v-card-title>
                    </v-col>
                </v-row>


                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn
                            @click="goTo('users-edit',{id:props.item.id})"
                            small v-if="$can('users_update')">Edit
                    </v-btn>
                    <v-spacer/>
                    <v-btn
                            @click="goTo('users-show', {id:props.item.id})"
                            small v-if="$can('users_show')">More...
                    </v-btn>
                    <v-spacer/>
                    <div v-if="$can('users_destroy')">
                        <v-btn @click.prevent="confirmDelete()"
                               small
                               v-if="props.item.id === item.id">Confirm
                        </v-btn>
                        <v-btn @click.prevent="prepareDelete(props.item)"
                               small
                               v-else>Delete
                        </v-btn>
                    </div>

                </v-card-actions>
            </v-card>
        </listings>
        <not-allowed v-else></not-allowed>
    </v-container>
</template>

<script>
    import Listings from "../../../../components/Listings";
    import Avatar from "../../../../components/Avatar";
    import NotAllowed from "../../NotAllowed";

    export default {
        name: 'UsersList',
        components: {NotAllowed, Avatar, Listings},
        data() {
            return {
                keys: [
                    'name'
                ],
                item: {},
            }
        },
        computed: {
            users() {
                return this.$store.getters.getUsers;
            },
        },
        created() {
            this.$store.dispatch('loader', 'loadUsers');
        },
        methods: {
            prepareDelete(item) {
                this.item = item;
            },
            confirmDelete() {
                this.$store.dispatch('loader', {
                    payload: this.item.id,
                    action: 'deleteUser'
                });
            },
        },
    }
</script>
