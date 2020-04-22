<template>
  <v-col cols="12">
    <v-card>
      <v-card-title>Login Page</v-card-title>
      <v-divider/>
      <v-form v-model="valid" @submit.prevent="login">
        <v-card-text>
          <v-col cols="12">
            <v-text-field
              label="Email"
              v-model="form.email"
              :rules=" [required('Email'), emailFormat()] "
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              type="password"
              label="Password"
              v-model="form.password"
              :rules=" [required('Password')] "
              dense
              outlined
            ></v-text-field>
          </v-col> 
        </v-card-text>
        <v-card-actions>
          <v-row align="center" justify="center">
            <v-btn color="primary" type="submit" :disabled="!valid">Login</v-btn>
          </v-row>
        </v-card-actions>
      </v-form>
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
			...validations
		};
	},
	methods: {
		login() {
			this.$axios.post("/login", this.form).then(res => {
				console.log(res);
			});
		}
	}
};
</script>
