<template>
    <v-container fluid>
        <listings :items="roles" :keys="keys" v-slot:default="props">
            <v-card>
                <v-card-title class="subheading font-weight-bold">{{ props.item.name }}</v-card-title>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn :to="{name:'role-edit', params:{id:props.item.id}}">Edit</v-btn>
                    <v-spacer/>
                    <v-btn :to="{name:'role-show', params:{id:props.item.id}}">Describe</v-btn>
                    <v-spacer/>
                    <v-btn @click.prevent="deleteRole()" v-if="props.item.id === item.id">Confirm</v-btn>
                    <v-btn @click.prevent="prepareDelete(props.item)" v-else>Delete</v-btn>
                </v-card-actions>

            </v-card>
        </listings>
    </v-container>
</template>

<script>
    import Listings from "../../../../components/Listings";

    export default {
        name: 'RolesList',
        components: {Listings},
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
                return this.$store.getters.getAllRoles;
            },
        },
        created() {
            this.$store.dispatch('loader', 'loadRoles');
        },
        methods: {
            prepareDelete(item) {
                this.item = item;
            },
            deleteRole() {
                this.$store.dispatch('deleteRole', this.item.id);
            },
        },
    }
</script>