<template>
    <v-row align="center" justify="center">
        <v-col cols="12" lg="10" md="10" sm="12">
            <v-form v-if="$can('profile_update')" v-model="valid">
                <v-row align="center" justify="center">
                    <avatar :name="form.name" :profile_picture="form.profile_picture"/>
                </v-row>
                <v-row align="center" justify="center">
                    <v-card-title>{{form.name}}</v-card-title>
                </v-row>
                <v-row align="center" class="mb-2" justify="center">
                    <!-- Role -->
                    <v-chip>
                        {{form.role ? form.role.name : ''}}
                    </v-chip>
                </v-row>
                <v-card class="mb-2">
                    <v-card-title class="justify-center">
                        <div>Profile Picture</div>
                    </v-card-title>
                    <v-divider/>
                    <v-row align="center" justify="center">
                        <v-btn @click=" update = 'profile_picture' " class="ma-2" v-if=" update !== 'profile_picture' ">
                            Click here to change Profile Picture
                        </v-btn>
                        <v-btn @click=" removeProfilePicture " class="ma-2"
                               v-if=" update !== 'profile_picture' && form.profile_picture ">
                            Remove Profile Picture
                        </v-btn>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="8" sm="12" v-if=" update === 'profile_picture' ">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-file-input
                                            :error-messages="apiValidationErrors['profile_picture'] || '' "
                                            :rules="[imageSize('Profile Picture', $route.name === 'profile' )]"
                                            @change="apiValidationErrors['profile_picture'] = '' "
                                            accept="image/*"
                                            dense
                                            label="Profile Picture"
                                            outlined
                                            v-model="editForm.profile_picture"
                                    ></v-file-input>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-row align="center" justify="center">
                            <v-btn @click=" update = null " class="mr-4"
                                   color="warning" v-if=" update === 'profile_picture' ">
                                <v-icon>mdi-lock-edit</v-icon>
                                Close
                            </v-btn>
                            <v-btn :disabled="!valid"
                                   @click="updateProfilePicture" color="primary" v-if=" update === 'profile_picture'">
                                <v-icon>mdi-lock-edit</v-icon>
                                Update Profile Picture
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                </v-card>
                <v-card class="mb-2">
                    <v-card-title class="justify-center">
                        <div>User Info</div>
                    </v-card-title>
                    <v-divider/>
                    <v-row align="center" justify="center">
                        <v-btn @click=" update = 'user_info' " class="ma-2" v-if=" update !== 'user_info' ">
                            Click here to change Info
                        </v-btn>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="8" sm="12">
                            <v-list-item>
                                <v-list-item-content v-if=" update !== 'user_info' ">Name:</v-list-item-content>
                                <v-list-item-content v-if=" update !== 'user_info' ">{{form.name}}</v-list-item-content>
                                <v-list-item-content v-else>
                                    <v-text-field
                                            :error-messages="apiValidationErrors['name'] || '' "
                                            :rules="[required('Name')]"
                                            @change="apiValidationErrors['name'] = '' "
                                            dense label="User Name" outlined
                                            v-model="editForm.name"
                                    ></v-text-field>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content v-if=" update !== 'user_info' ">Email:</v-list-item-content>
                                <v-list-item-content v-if=" update !== 'user_info'">{{form.email}}</v-list-item-content>
                                <v-list-item-content v-else>
                                    <v-text-field
                                            :error-messages="apiValidationErrors['email'] || '' "
                                            :rules=" [required('Email'), emailFormat()] "
                                            @change="apiValidationErrors['email'] = '' " dense
                                            label="Email"
                                            outlined
                                            v-model="editForm.email"
                                    ></v-text-field>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-row align="center" justify="center">
                            <v-btn @click=" update = null " class="mr-4"
                                   color="warning" v-if=" update === 'user_info' ">
                                <v-icon>mdi-lock-edit</v-icon>
                                Close
                            </v-btn>
                            <v-btn :disabled="!valid"
                                   @click="updateUserInfo" color="primary" v-if=" update === 'user_info'">
                                <v-icon>mdi-lock-edit</v-icon>
                                Update Info
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                </v-card>
                <v-card class="mb-2">
                    <v-card-title class="justify-center">
                        <div>Password</div>
                    </v-card-title>
                    <v-divider/>
                    <v-row align="center" justify="center" v-if=" update !== 'password' ">
                        <v-btn @click=" update = 'password' " class="ma-2">
                            Click here to change Password
                        </v-btn>
                    </v-row>
                    <v-row align="center" justify="center" v-else>
                        <v-col cols="12" md="8" sm="12">
                            <v-list-item>
                                <v-text-field
                                        :error-messages="apiValidationErrors['password'] || '' "
                                        :rules=" $route.name !== 'users-edit' ? [required('Password')] : [] "
                                        @change="apiValidationErrors['password'] = '' "
                                        dense label="Password"
                                        outlined
                                        v-model="editForm.password"
                                ></v-text-field>
                            </v-list-item>
                            <v-list-item>
                                <v-text-field
                                        :error-messages="apiValidationErrors['password'] || '' "
                                        :rules=" $route.name !== 'users-edit' ? [required('Password Confirmation')] : [] "
                                        @change="apiValidationErrors['password'] = '' "
                                        dense label="Confirm Password"
                                        outlined
                                        v-model="editForm.password_confirmation"
                                ></v-text-field>
                            </v-list-item>
                        </v-col>
                    </v-row>
                    <v-card-actions justify="center">
                        <v-row justify="center">
                            <v-btn @click=" update = null " class="mr-4" color="warning" v-if=" update === 'password' ">
                                <v-icon>mdi-lock-edit</v-icon>
                                Close
                            </v-btn>
                            <v-btn :disabled="!valid"
                                   @click="updateUserPassword" color="primary" v-if=" update === 'password'">
                                <v-icon>mdi-lock-edit</v-icon>
                                Update Password
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                </v-card>
                <v-card class="mb-2">
                    <v-card-title class="justify-center">
                        <div>Permissions</div>
                    </v-card-title>
                    <v-divider/>
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="8" sm="12">
                            <div>
                                <v-chip :key="index"
                                        class="ma-1" color="primary" small
                                        v-for="(permission,index) in form.permissions">
                                    {{permission.name}}
                                </v-chip>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-form>
            <not-allowed v-else></not-allowed>
        </v-col>
    </v-row>
</template>

<script>
    import NotAllowed from "../NotAllowed";
    import Avatar from "../../../components/Avatar";
    import validations from "../../../utilities/validations";

    export default {
        name: 'ProfileEdit',
        components: {Avatar, NotAllowed,},
        props: ['id'],
        computed: {
            form: {
                get() {
                    return this.$store.getters.getCurrentUser
                },
                set(value) {
                    return value
                }
            },
            editForm: {
                get() {
                    return JSON.parse(JSON.stringify(this.form))
                },
                set(value) {
                    return value
                }
            },
            permissions() {
                let permissions = {};
                this.form.permissions.forEach((permission) => {
                    let items = permission.name.split("_")
                    let key = '';
                    for (var i = 0; i < items.length; i++) {
                        if (items.length - 1 > i) key += items[i]
                        if (items.length - 2 > i) key += "_"
                    }
                    permissions[items[0]] = [].concat([key])
                    permissions[items[0]] = items[items.length - 1]
                })
                console.log(permissions)
                return permissions
            }
        },
        data() {
            return {
                valid: false,
                profile: {name: '', description: ''},
                update: '',
                ...validations
            }
        },
        created() {
            this.$store.dispatch('loader', {action: 'getCurrentUser'});
        },
        methods: {
            updateUserInfo() {
                this.$store.dispatch('loader', {
                    action: 'updateUserInfo',
                    payload: {
                        email: this.editForm.email,
                        name: this.editForm.name
                    }
                });
            },
            updateUserPassword() {
                this.$store.dispatch('loader', {
                    action: 'updateUserPassword',
                    payload: {
                        password: this.editForm.password,
                        password_confirmation: this.editForm.password_confirmation
                    }
                });
            },
            removeProfilePicture() {
                this.$store.dispatch('loader', {
                    action: 'removeProfilePicture',
                    payload: {id: this.editForm.id}
                });
            },
            updateProfilePicture() {
                let formData = new FormData()
                formData.append('profile_picture', this.editForm.profile_picture)
                formData.append('_method', 'put')
                this.$store.dispatch('loader', {
                    action: 'updateProfilePicture',
                    payload: {formInput: formData}
                });
            }
        },
    }
</script>

<style>

</style>
