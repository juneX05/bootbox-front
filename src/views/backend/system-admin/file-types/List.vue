<template>
    <v-container fluid>
        <listings :items="fileTypes" :keys="keys" v-slot:default="props">
            <v-card>
                <v-card-title class="subheading font-weight-bold">{{ props.item.name }}</v-card-title>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn @click="goTo('fileTypes-edit',{id:props.item.id})" small>Edit</v-btn>
                    <v-spacer/>
                    <v-btn @click="goTo('fileTypes-show', {id:props.item.id})" small>More...</v-btn>
                    <v-spacer/>
                    <v-btn @click.prevent="confirmDelete()" small v-if="props.item.id === item.id">Confirm</v-btn>
                    <v-btn @click.prevent="prepareDelete(props.item)" small v-else>Delete</v-btn>
                </v-card-actions>
            </v-card>
        </listings>
    </v-container>
</template>

<script>
    import Listings from "../../../../components/Listings";

    export default {
        name: 'FileTypesList',
        components: {Listings},
        data() {
            return {
                keys: [
                    'name'
                ],
                item: {}
            }
        },
        computed: {
            fileTypes() {
                return this.$store.getters.getFileTypes;
            },
        },
        created() {
            this.$store.dispatch('loader', 'loadFileTypes');
        },
        methods: {
            prepareDelete(item) {
                this.item = item;
            },
            confirmDelete() {
                this.$store.dispatch('loader', {
                    payload: this.item.id,
                    action: 'deleteFileType'
                });
            },
        },
    }
</script>