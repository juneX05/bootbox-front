<template>
    <v-menu
            :close-on-content-click="false"
            :return-value.sync="selected"
            min-width="290px"
            offset-y
            ref="date_menu"
            transition="scale-transition"
            v-model="date_menu"
    >
        <template v-slot:activator="{ on }">
            <v-text-field
                    :label="label"
                    :required="required"
                    @input="$emit('input', $event.target.value)"
                    dense
                    outlined
                    readonly
                    v-model="selected" v-on="on"
            ></v-text-field>
        </template>
        <v-date-picker :value="date" no-title scrollable v-model="selected">
            <v-spacer></v-spacer>
            <v-btn @click="date_menu = false" color="primary" text>Cancel</v-btn>
            <v-btn @click="$refs.date_menu.save(selected)" color="primary" text>OK</v-btn>
        </v-date-picker>
    </v-menu>
</template>

<script>
    export default {
        props: {
            value: {type: String, default: ''},
            label: {type: String, default: 'Enter Date'},
            required: {type: Boolean, default: false}
        },
        data() {
            return {
                date_menu: false,
                date: null
            }
        },
        computed: {
            selected: {
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