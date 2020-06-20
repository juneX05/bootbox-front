<template>
    <v-container fluid>
        <listings :items="files" :keys="keys" v-if="$can('files_access')" v-slot:default="props">
            <v-card>
                <v-card-title class="subheading font-weight-bold">{{ props.item.name }}</v-card-title>
                <v-card-subtitle class="">
                    <b> Owned By: </b> {{ props.item.user ? props.item.user.name : '' }}
                </v-card-subtitle>
                <v-btn :href="`${host_url}/public${props.item.path}`">View File</v-btn>
                <v-card-subtitle class=""><b> File Type: </b> {{ props.item.file_extension.extension }} file
                </v-card-subtitle>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn @click="goTo('files-edit',{id:props.item.id})"
                           small v-if="$can('files_update')">Rename
                    </v-btn>
                    <v-spacer/>
                    <v-btn @click="goTo('files-show', {id:props.item.id})"
                           small v-if="$can('files_show')">More...
                    </v-btn>
                    <v-spacer/>
                    <v-btn @click.prevent="confirmDelete()" small
                           v-if="$can('files_destroy') && props.item.id === item.id">Confirm
                    </v-btn>
                    <v-btn
                            @click.prevent="prepareDelete(props.item)"
                            small v-if="$can('files_destroy')">Delete
                    </v-btn>
                </v-card-actions>
            </v-card>
        </listings>
        <not-allowed v-else></not-allowed>
    </v-container>
</template>

<script>
    import Listings from "../../../../components/Listings";
    import NotAllowed from "../../NotAllowed";

    export default {
        name: 'FilesList',
        components: {NotAllowed, Listings},
        data() {
            return {
                keys: [
                    'name'
                ],
                item: {},
                host_url: process.env.VUE_APP_API_HOST
            }
        },
        computed: {
            files() {
                return this.$store.getters.getFiles;
            },
        },
        created() {
            this.$store.dispatch('loader', 'loadFiles');
        },
        methods: {
            prepareDelete(item) {
                this.item = item;
            },
            confirmDelete() {
                this.$store.dispatch('loader', {
                    payload: this.item.id,
                    action: 'deleteFile'
                });
            },
        },
    }
</script>