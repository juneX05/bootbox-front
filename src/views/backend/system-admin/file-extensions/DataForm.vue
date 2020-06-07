<template>
    <v-row align-center justify-center>
        <v-col cols="12">
            <v-select :items="file_types" :menu-props="{closeOnContentClick:true}"
                      :rules="[requiredSelect('File Type')]"
                      chips dense item-text="name"
                      label="FileTypes" outlined return-object small-chips v-model="form.file_type">
            </v-select>
        </v-col>
        <v-col cols="12">
            <v-text-field
                    :rules="[required('Extension Name')]" dense
                    label="File Extension (without the preceding dot)"
                    outlined
                    v-model="form.extension"
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field
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
            file_types: {type: Array, required: true}
        },
        data() {
            return {
                ...validations
            }
        }
    }
</script>