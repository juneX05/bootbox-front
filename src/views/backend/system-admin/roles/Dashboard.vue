<template>
    <v-col cols="12">
        <v-row align="center" justify="center" v-if="$can('roles_access')">
            <h1>Total Roles : {{ rolesCount }}</h1>
        </v-row>
        <not-allowed v-else></not-allowed>
    </v-col>
</template>

<script>
    import NotAllowed from "../../NotAllowed";
    export default {
        name: 'RolesDashboard',
        components: {NotAllowed},
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