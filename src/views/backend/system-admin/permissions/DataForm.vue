<template>
    <v-row align-center justify-center>
        <v-col cols="12">
            <v-text-field
                    :rules="[required('Permission Name')]" dense
                    label="Permission Name"
                    outlined
                    :error-messages="apiValidationErrors['name'] || '' "
                    @change="apiValidationErrors['name'] = '' "
                    v-model="form.name"
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-textarea
                    :error-messages="apiValidationErrors['description'] || '' "
                    :rules="[]"
                    @change="apiValidationErrors['description'] = '' "
                    dense label="Permission Description"
                    outlined
                    v-model="form.description"
            ></v-textarea>
        </v-col>
    </v-row>
</template>

<script>
    import validations from "../../../../utilities/validations";

    export default {
        name: 'DataForm',
        props: {
            form: {
                type: Object, required: true,
                default: () => {
                    return {
                        name: '',
                        description: '',
                    }
                }
            },
        },
        data() {
            return {
                ...validations
            }
        },
        methods: {}
    }
</script>