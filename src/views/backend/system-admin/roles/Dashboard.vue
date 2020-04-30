<template>
    <v-col cols="12">
        <v-row align="center" justify="center">
            <h1>Total Roles : {{ rolesCount }}</h1>
        </v-row>
    </v-col>
</template>

<script>
    export default {
        name: 'RolesDashboard',
        created() {
            this.$store.dispatch('loader', 'loadRoles');
        },
        methods: {},
        computed: {
            rolesCount() {
                return this.$store.getters.getRolesCount;
            },
        }
    }
</script>