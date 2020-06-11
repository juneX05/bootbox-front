<template>
    <v-col cols="12">
        <v-row align="center" justify="center">
            <h1>Total FileExtensions : {{ fileExtensionsCount }}</h1>
        </v-row>
    </v-col>
</template>

<script>
    export default {
        name: 'FileExtensionsDashboard',
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