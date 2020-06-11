<template>
    <v-snackbar
            :color="color" :right="true"
            :timeout="0"
            :top="true"
            v-model="show"
    >
        {{text}}

        <v-btn @click="show = false" right text>Close</v-btn>
    </v-snackbar>
</template>

<script>
    export default {
        name: 'Snackbar',
        computed: {
            show: {
                get() {
                    return this.$store.state.snackbar.show
                },
                set(value) {
                    this.$store.commit('SET_SNACKBAR', {show: value})
                }
            },
            text() {
                return this.$store.state.snackbar.text
            },
            color() {
                return this.$store.state.snackbar.color
            }
        }
    }
</script>