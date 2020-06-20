<template>
    <v-col cols="12">
        <v-row align="center" justify="center" v-if="$can('permissions_access')">
            <h1>Total Permissions : {{ permissionsCount }}</h1>
        </v-row>
        <not-allowed v-else></not-allowed>
    </v-col>
</template>

<script>
    import NotAllowed from "../../NotAllowed";
    export default {
        name: 'PermissionsDashboard',
        components: {NotAllowed},
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