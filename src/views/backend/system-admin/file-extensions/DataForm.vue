<template>
    <v-row align-center justify-center>
        <v-col cols="12">
            <v-text-field
                    :error-messages="apiValidationErrors['mime_type'] || '' "
                    @change="apiValidationErrors['mime_type'] = '' "
                    :rules="[required('Mime Type')]" dense
                    label="Enter the full mime type (xxxxx/xxxx)"
                    outlined
                    v-model="form.mime_type"
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field
                    :error-messages="apiValidationErrors['extension'] || '' "
                    @change="apiValidationErrors['extension'] = '' "
                    :rules="[required('Extension Name')]" dense
                    label="File Extension (without the preceding dot)"
                    outlined
                    v-model="form.extension"
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field
                    :error-messages="apiValidationErrors['extension_icon'] || '' "
                    @change="apiValidationErrors['extension_icon'] = '' "
                    dense label="Extension Icon"
                    outlined
                    v-model="form.extension_icon"
            ></v-text-field>
        </v-col>
    </v-row>
</template>

<script>
    import validations from "../../../../utilities/validations";

    export default {
        name: 'DataForm',
        props: {
            form: {type: Object, required: true},
        },
        data() {
            return {
                ...validations
            }
        }
    }
</script>