<template>
    <v-col cols="12">
        <v-card>
            <v-card-title>Login Page</v-card-title>
            <v-divider/>
            <v-form v-model="valid">
                <v-card-text>
                    <v-col cols="12">
                        <v-text-field
                                :rules=" [required('Email'), emailFormat()] "
                                dense
                                label="Email"
                                outlined
                                v-model="form.email"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                                :rules=" [required('Password')] "
                                dense
                                label="Password"
                                outlined
                                type="password"
                                v-model="form.password"
                        ></v-text-field>
                    </v-col>
                </v-card-text>
                <v-card-actions>
                    <v-row align="center" justify="center">
                        <v-btn :disabled="!valid" @click="login" color="primary">Login</v-btn>
                    </v-row>
                </v-card-actions>
            </v-form>
            <div>{{errors}}</div>
        </v-card>
    </v-col>
</template>

<script>
    import validations from "../../utilities/validations";

    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                },
                valid: null,
                errors: null,
                ...validations
            };
        },
        methods: {
            login() {
                this.$store.dispatch('login', this.form);
            }
        }
    };
</script>
