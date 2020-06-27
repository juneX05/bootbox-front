<template>
    <v-container fluid>
        <listings :items="fileExtensions" :keys="keys" v-if="$can('file_extensions_access')" v-slot:default="props">
            <v-card>
                <v-card-title class="subheading font-weight-bold">{{ props.item.extension }}</v-card-title>
                <v-card-subtitle class="">{{ props.item.mime_type }}</v-card-subtitle>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn @click="goTo('fileExtensions-edit',{id:props.item.id})"
                           small v-if="$can('file_extensions_update')">Edit
                    </v-btn>
                    <v-spacer/>
                    <v-btn @click="goTo('fileExtensions-show', {id:props.item.id})"
                           small v-if="$can('file_extensions_show')">More...
                    </v-btn>
                    <v-spacer/>
                    <div v-if="$can('file_extensions_destroy')">
                        <v-btn @click.prevent="confirmDelete()"
                               small
                               v-if="props.item.id === item.id">Confirm
                        </v-btn>
                        <v-btn @click.prevent="prepareDelete(props.item)"
                               small
                               v-else>Delete
                        </v-btn>
                    </div>
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
        name: 'FileExtensionsList',
        components: {NotAllowed, Listings},
        data() {
            return {
                keys: [
                    'extension'
                ],
                item: {}
            }
        },
        computed: {
            fileExtensions() {
                return this.$store.getters.getFileExtensions;
            },
        },
        created() {
            this.$store.dispatch('loader', 'loadFileExtensions');
        },
        methods: {
            prepareDelete(item) {
                this.item = item;
            },
            confirmDelete() {
                this.$store.dispatch('loader', {
                    payload: this.item.id,
                    action: 'deleteFileExtension'
                });
            },
        },
    }
</script>
