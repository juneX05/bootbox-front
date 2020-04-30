<template>
    <v-row align-center justify-center>
        <v-col cols="12">
            <v-text-field
                    dense label="Role Name"
                    outlined
                    v-model="form.name"
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-textarea
                    dense label="Role Description"
                    outlined
                    v-model="form.description"
            ></v-textarea>
        </v-col>
        <v-col cols="12">
            <selector :items="permissions"
                      item_text="name"
                      label="Permissions"
                      v-model="form.permissions"
            ></selector>
        </v-col>
    </v-row>
</template>

<script>
    import Selector from "../../../../components/Selector";

    export default {
        name: 'DataForm',
        components: {Selector},
        props: {
            form: {type: Object, required: true},
            permissions: {type: Array, required: true},
        }
    }
</script>