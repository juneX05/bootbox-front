<template>
    <v-col cols="12">
        <v-row align="center" justify="center" v-if="$can('file_access')">
            <h1>Total Files : {{ filesCount }}</h1>
        </v-row>
        <not-allowed v-else></not-allowed>
    </v-col>
</template>

<script>
    import NotAllowed from "../../NotAllowed";
    export default {
        name: 'FilesDashboard',
        components: {NotAllowed},
        created() {
            this.$store.dispatch('loader', 'loadFiles');
        },
        methods: {},
        computed: {
            filesCount() {
                return this.$store.getters.getFilesCount;
            },
        }
    }
</script>