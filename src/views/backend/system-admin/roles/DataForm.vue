<template>
    <v-row align-center justify-center>
        <v-col cols="12">
            <v-text-field
                    :error-messages="apiValidationErrors['name'] || '' "
                    @change="apiValidationErrors['name'] = '' "
                    :rules="[required('Role Name')]" dense
                    label="Role Name"
                    outlined
                    v-model="form.name"
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-textarea
                    :error-messages="apiValidationErrors['description'] || '' "
                    @change="apiValidationErrors['description'] = '' "
                    dense label="Role Description"
                    outlined
                    v-model="form.description"
            ></v-textarea>
        </v-col>
        <v-col cols="12">
            <selector
                    :error-messages="apiValidationErrors['permissions'] || '' "
                    :items="permissions"
                    @change="apiValidationErrors['permissions'] = '' "
                    item_text="name" label="Permissions"
                    v-model="form.permissions"
            ></selector>
        </v-col>
    </v-row>
</template>

<script>
    import validations from "../../../../utilities/validations";
    import selector from "../../../../components/Selector";

    export default {
        name: 'DataForm',
        props: {
            form: {type: Object, required: true},
            permissions: {type: Array, required: true}
        },
        components: {
            selector
        },
        data() {
            return {
                ...validations
            }
        }
    }
</script>