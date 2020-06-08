<template>
    <v-col cols="12">
        <v-row align="center" justify="center">
            <h1>Total Files : {{ filesCount }}</h1>
        </v-row>
    </v-col>
</template>

<script>
    export default {
        name: 'FilesDashboard',
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