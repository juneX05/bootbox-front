<template>
    <v-col cols="12">
        <v-row align="center" justify="center" v-if="$can('users_access')">
            <h1>Total Users : {{ usersCount }}</h1>
        </v-row>
        <not-allowed v-else></not-allowed>
    </v-col>
</template>

<script>
    import NotAllowed from "../../NotAllowed";
    export default {
        name: 'UsersDashboard',
        components: {NotAllowed},
        created() {
            this.$store.dispatch('loader', 'loadUsers');
        },
        methods: {},
        computed: {
            usersCount() {
                return this.$store.getters.getUsersCount;
            },
        }
    }
</script>