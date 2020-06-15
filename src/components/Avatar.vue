<template>
    <v-avatar :color="profile_picture ? '' : randomColor()"
              :size=" size + 'px' "
    >
        <img
                :alt=" name "
                :src=" host_path + profile_picture.path "
                v-if=" profile_picture "
        >
        <v-icon size="30px"
                v-else
                v-text="getInitials(name)"
        ></v-icon>
    </v-avatar>
</template>

<script>
    export default {
        name: 'Avatar',
        props: {
            profile_picture: {type: Object},
            name: {required: true, type: String},
            size: {default: 80}
        },
        data() {
            return {
                host_path: process.env.VUE_APP_API_HOST + '/public',
                colors: ['success', 'error', 'info']
            }
        },
        methods: {
            randomColor() {
                let index = Math.floor(Math.random() * (3 - 0) + 0);
                return this.colors[index];
            },
            getInitials(full_name) {
                let names = full_name.split(' ');
                let initial = names[0].charAt(0) + (names.length > 0 ? names[1].charAt(0) : '');
                return initial.toUpperCase()
            }
        }
    }
</script>