<template>
    <v-row align-center justify-center>
        <v-col cols="12" v-if="$route.name==='files-create' ">
            <v-file-input
                    :error-messages="apiValidationErrors['file'] || '' "
                    @change="apiValidationErrors['file'] = '' "
                    dense
                    label="File to Upload"
                    outlined
                    v-model="form.file"
            ></v-file-input>
        </v-col>
        <v-col cols="12" v-else>
            <v-text-field
                    :error-messages="apiValidationErrors['name'] || '' "
                    @change="apiValidationErrors['name'] = '' "
                    :rules="[required('File Name')]" dense
                    label="File Name"
                    outlined
                    v-model="form.name"
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-textarea
                    :error-messages="apiValidationErrors['description'] || '' "
                    @change="apiValidationErrors['description'] = '' "
                    :rules="[required('File Description')]"
                    dense label="File Description"
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
            form: {type: Object, required: true},
        },
        data() {
            return {
                ...validations
            }
        }
    }
</script>