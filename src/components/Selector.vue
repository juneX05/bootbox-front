<template>
    <v-select :item-text="item_text" :items="items" :rules="rules"
              :label="label" :menu-props="{closeOnContentClick:true}" chips
              dense multiple outlined return-object small-chips v-model="selections">
        <template v-slot:prepend-item>
            <v-list-item @click="selectToggle" ripple>
                <v-list-item-action>
                    <v-icon>{{ selectIcon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Select All</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider class="mt-2"></v-divider>
        </template>
    </v-select>

</template>

<script>
    export default {
        props: {
            value: {default: ''},
            items: {type: Array, required: true},
            rules: {
                type: Array, default: function () {
                    return []
                }
            },
            item_text: {type: String, required: true},
            label: {type: String, default: 'Enter Date'},
            required: {type: Boolean, default: false}
        },
        methods: {
            selectToggle() {
                this.$nextTick(() => {
                    if (this.allSelectedItems) {
                        this.selections = []
                    } else {
                        this.selections = this.items.slice()
                    }
                })
            },
        },
        data() {
            return {
                selected: []
            }
        },
        computed: {
            selections: {
                get() {
                    return this.value
                },
                set(value) {
                    this.selected = value;
                    this.$emit('input', value)
                }
            },
            allSelectedItems() {
                return this.items.length === this.selections.length
            },
            someSelectedItems() {
                return this.selections.length > 0 && !this.allSelectedItems
            },
            selectIcon() {
                if (this.allSelectedItems) return 'mdi-close-box';
                if (this.someSelectedItems) return 'mdi-minus-box';
                return 'mdi-checkbox-blank-outline'
            },
        },
    }
</script>