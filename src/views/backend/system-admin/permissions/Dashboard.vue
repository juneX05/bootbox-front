<template>
    <v-col cols="12">
        <v-row align="center" justify="center">
            <h1>Total Permissions : {{ permissionsCount }}</h1>
        </v-row>
    </v-col>
</template>

<script>
    export default {
        name: 'PermissionsDashboard',
        created() {
            this.$store.dispatch('loader', 'loadPermissions');
        },
        methods: {},
        computed: {
            permissionsCount() {
                return this.$store.getters.getPermissionsCount;
            },
        }
    }
</script>