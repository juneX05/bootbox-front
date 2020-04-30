<template>
    <v-col cols="12">
        <v-row align="center" justify="center">
            <h1>Total FileTypes : {{ fileTypesCount }}</h1>
        </v-row>
    </v-col>
</template>

<script>
    export default {
        name: 'FileTypesDashboard',
        created() {
            this.$store.dispatch('loader', 'loadFileTypes');
        },
        methods: {},
        computed: {
            fileTypesCount() {
                return this.$store.getters.getFileTypesCount;
            },
        }
    }
</script>