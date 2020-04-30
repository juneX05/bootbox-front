<template>
    <v-row justify="center">
        <v-dialog max-width="290" persistent v-model="dialog">
            <v-card>
                <v-card-title class="headline">{{title}}</v-card-title>
                <v-card-text>{{body_text}}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="dialog = false" color="green darken-1" text>{{canceller_text}}</v-btn>
                    <v-btn @click.stop="caller" color="green darken-1" text>{{caller_text}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            value: {Boolean, default: false},
            caller: {Function},
            caller_text: {String, default: 'Yes'},
            canceller_text: {String, default: 'No'},
            body_text: {String, default: 'Are you sure?'},
            title: {String, default: 'Emergency Action'},
        },
        computed: {
            dialog: {
                get() {
                    return this.value
                },
                set(value) {
                    this.$emit('input', value)
                }
            }
        },
    }
</script>