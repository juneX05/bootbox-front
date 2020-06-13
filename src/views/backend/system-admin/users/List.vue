<template>
    <v-container fluid>
        <listings :items="users" :keys="keys" v-slot:default="props">
            <v-card class="pt-2 ">
                <v-row align="center" class="spacer mb-1" justify="space-around" no-gutters>
                    <v-col cols="4">
                        <v-avatar :color="props.item.profile_picture ? '' : randomColor()"
                                  size="80px"
                        >
                            <img
                                    :alt=" props.item.name "
                                    :src=" host + '/public' + props.item.profile_picture.path "
                                    v-if=" props.item.profile_picture "
                            >
                            <v-icon size="30px"
                                    v-else
                                    v-text="getInitials(props.item.name)"
                            ></v-icon>
                        </v-avatar>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title class="subheading font-weight-bold text-break">{{ props.item.name }}
                        </v-card-title>
                    </v-col>
                </v-row>


                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn @click="goTo('users-edit',{id:props.item.id})" small>Edit</v-btn>
                    <v-spacer/>
                    <v-btn @click="goTo('users-show', {id:props.item.id})" small>More...</v-btn>
                    <v-spacer/>
                    <v-btn @click.prevent="confirmDelete()" small v-if="props.item.id === item.id">Confirm</v-btn>
                    <v-btn @click.prevent="prepareDelete(props.item)" small v-else>Delete</v-btn>
                </v-card-actions>
            </v-card>
        </listings>
    </v-container>
</template>

<script>
    import Listings from "../../../../components/Listings";

    export default {
        name: 'UsersList',
        components: {Listings},
        data() {
            return {
                keys: [
                    'name'
                ],
                item: {},
                host: process.env.VUE_APP_API_HOST,
                colors: ['success', 'error', 'info']
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
            randomColor() {
                let index = Math.floor(Math.random() * (3 - 0) + 0);
                return this.colors[index];
            },
            getInitials(full_name) {
                let names = full_name.split(' ');
                let initial = names[0].charAt(0) + (names.length > 0 ? names[1].charAt(0) : '');
                return initial.toUpperCase()
            }
        },
    }
</script>