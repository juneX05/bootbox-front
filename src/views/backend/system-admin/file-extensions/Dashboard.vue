<template>
    <v-col cols="12">
        <v-row align="center" justify="center" v-if="$can('file_extensions_access')">
            <h1>Total FileExtensions : {{ fileExtensionsCount }}</h1>
        </v-row>
        <not-allowed v-else></not-allowed>
    </v-col>
</template>

<script>
    import NotAllowed from "../../NotAllowed";
    export default {
        name: 'FileExtensionsDashboard',
        components: {NotAllowed},
        created() {
            this.$store.dispatch('loader', 'loadFileExtensions');
        },
        methods: {},
        computed: {
            fileExtensionsCount() {
                return this.$store.getters.getFileExtensionsCount;
            },
        }
    }
</script>