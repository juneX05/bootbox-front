<template>
    <v-row align-center justify-center>
        <v-col cols="12">
            <v-file-input
                    :error-messages="apiValidationErrors['profile_picture'] || '' "
                    :rules="[imageSize('Profile Picture', $route.name === 'users-edit' )]"
                    @change="apiValidationErrors['profile_picture'] = '' "
                    accept="image/*"
                    dense
                    label="Profile Picture"
                    outlined
                    v-model="form.profile_picture"
            ></v-file-input>
        </v-col>
        <v-col cols="12">
            <v-text-field
                    :error-messages="apiValidationErrors['name'] || '' "
                    :rules="[required('User Name')]"
                    @change="apiValidationErrors['name'] = '' " dense
                    label="User Name"
                    outlined
                    v-model="form.name"
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field
                    :error-messages="apiValidationErrors['email'] || '' "
                    :rules=" [required('Email'), emailFormat()] "
                    @change="apiValidationErrors['email'] = '' " dense
                    label="Email"
                    outlined
                    v-model="form.email"
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field
                    :error-messages="apiValidationErrors['password'] || '' "
                    :rules=" $route.name !== 'users-edit' ? [required('Password')] : [] "
                    @change="apiValidationErrors['password'] = '' "
                    dense label="Password"
                    outlined
                    v-model="form.password"
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field
                    :error-messages="apiValidationErrors['password'] || '' "
                    :rules=" $route.name !== 'users-edit' ? [required('Password Confirmation')] : [] "
                    @change="apiValidationErrors['password'] = '' "
                    dense label="Confirm Password"
                    outlined
                    v-model="form.password_confirmation"
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <selector
                    :change=" roleChanged "
                    :error-messages="apiValidationErrors['role'] || '' " :items="roles"
                    :multiple="false"
                    item_text="name" label="Role"
                    v-model="form.role"
            ></selector>
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
            permissions: {type: Array, required: true},
            roles: {type: Array, required: true}
        },
        components: {
            selector
        },
        data() {
            return {
                ...validations
            }
        },
        methods: {
            roleChanged() {
                console.log(this.form.role)
                if (this.form.permissions.length === 0) {
                    this.form.permissions = this.form.role.permissions
                }
            }
        }
    }
</script>
