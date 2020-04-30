<template>
    <v-col cols="12" md="6" sm="8">
        <v-card flat>
            <v-card-title>Role Description</v-card-title>
            <v-card-text>
                <v-row>
                    <p>Name</p>
                    <v-spacer/>
                    <p>{{ role.name }}</p>
                </v-row>
                <v-row v-if="role.permissions">
                    <p>Permissions</p>
                    <v-spacer/>
                    <p>
                        <v-chip :key="index" v-for="(permission,index) in role.permissions">
                            {{permission.name}}
                        </v-chip>
                    </p>
                </v-row>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
    export default {
        name: 'RoleShow',
        props: ['id'],
        mounted() {
            this.$store.dispatch('loader', {type: 'showRole', data: this.id});
        },
        computed: {
            role() {
                return this.$store.getters.getRole;
            }
        },
    }
</script>