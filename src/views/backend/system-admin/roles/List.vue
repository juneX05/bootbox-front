<template>
    <v-container fluid>
        <listings :items="roles" :keys="keys" v-if="$can('roles_access')" v-slot:default="props">
            <v-card>
                <v-card-title class="subheading font-weight-bold">{{ props.item.name }}</v-card-title>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn
                            @click="goTo('roles-edit',{id:props.item.id})"
                            small v-if="$can('roles_update')">Edit
                    </v-btn>
                    <v-spacer/>
                    <v-btn
                            @click="goTo('roles-show', {id:props.item.id})"
                            small v-if="$can('roles_show')">More...
                    </v-btn>
                    <v-spacer/>
                    <div v-if="$can('roles_destroy')">
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
    import NotAllowed from "../../NotAllowed";

    export default {
        name: 'RolesList',
        components: {NotAllowed, Listings},
        data() {
            return {
                keys: [
                    'name'
                ],
                item: {}
            }
        },
        computed: {
            roles() {
                return this.$store.getters.getRoles;
            },
        },
        created() {
            this.$store.dispatch('loader', 'loadRoles');
        },
        methods: {
            prepareDelete(item) {
                this.item = item;
            },
            confirmDelete() {
                this.$store.dispatch('loader', {
                    payload: this.item.id,
                    action: 'deleteRole'
                });
            },
        },
    }
</script>
