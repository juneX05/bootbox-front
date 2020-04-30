<template>
    <v-row align-center justify-center>
        <v-col cols="12">
            <v-text-field
                    :rules="[required('FileType Name')]" dense
                    label="FileType Name"
                    outlined
                    v-model="form.name"
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-textarea
                    dense label="FileType Description"
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