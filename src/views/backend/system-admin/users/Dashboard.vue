<template>
    <v-col cols="12">
        <v-row align="center" justify="center">
            <h1>Total Users : {{ usersCount }}</h1>
        </v-row>
    </v-col>
</template>

<script>
    export default {
        name: 'UsersDashboard',
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