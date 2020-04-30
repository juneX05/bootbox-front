<template>
    <v-data-iterator
            :items="items"
            :items-per-page.sync="itemsPerPage"
            :page="page"
            :search="search"
            :sort-by="sortBy.toLowerCase()"
            :sort-desc="sortDesc"
            hide-default-footer
    >
        <template v-if="items.length > 0" v-slot:header>
            <v-toolbar
                    :height="$vuetify.breakpoint.smAndUp ? '58px' : '200px' "
                    class="mb-1"
                    color="blue darken-3"
                    dark>
                <v-row align="center" justify="center" style="text-align: center">
                    <v-col cols="12" sm="4">
                        <v-text-field
                                clearable
                                flat
                                hide-details
                                label="Search"
                                prepend-inner-icon="mdi-magnify"
                                solo-inverted
                                v-model="search"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="5">

                        <v-select
                                :items="keys"
                                flat
                                hide-details
                                label="Sort by"
                                prepend-inner-icon="mdi-magnify"
                                solo
                                v-model="sortBy"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-btn-toggle
                                mandatory
                                v-model="sortDesc"
                        >
                            <v-btn
                                    :value="false"
                                    color="blue"
                                    depressed
                                    small
                            >
                                <v-icon>mdi-arrow-up</v-icon>
                            </v-btn>
                            <v-btn
                                    :value="true"
                                    color="blue"
                                    depressed
                                    small
                            >
                                <v-icon>mdi-arrow-down</v-icon>
                            </v-btn>
                        </v-btn-toggle>
                    </v-col>
                </v-row>
            </v-toolbar>
        </template>

        <template v-slot:default="props">
            <v-row>
                <v-col :key=" 'items'+index " :lg="lg" :md="md" :sm="sm" cols="12" v-for="(item,index) in props.items">
                    <slot v-bind:item="item"></slot>
                </v-col>
            </v-row>
        </template>

        <template v-slot:no-data>
            <v-col align="center" cols="12" justify="center">
                <v-card>
                    <v-card-text>
                        No data Available
                    </v-card-text>
                </v-card>
            </v-col>
        </template>

        <template v-if="items.length > 0" v-slot:footer>
            <v-row align="center" class="mt-2 mr-2 ml-2" justify="center">
                <v-col cols="12" sm="6">
                    <v-row align="center" justify="center">
                        <span class="grey--text">Items per page</span>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        class="ml-2" color="primary" dark text v-on="on">
                                    {{ itemsPerPage }}
                                    <v-icon>mdi-chevron-down</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                        :key="index"
                                        @click="updateItemsPerPage(number)"
                                        v-for="(number, index) in itemsPerPageArray"
                                >
                                    <v-list-item-title>{{ number }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-row>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-row align="center" justify="center">
                        <span class="mr-4 grey--text"> Page {{ page }} of {{ numberOfPages }}</span>
                        <v-btn @click="formerPage" class="mr-1" color="blue darken-3" dark fab>
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn @click="nextPage" class="ml-1" color="blue darken-3" dark fab>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </template>
    </v-data-iterator>
</template>

<script>

    export default {
        name: 'Listings',
        props: {
            items: {type: Array, required: true},
            keys: {type: Array, required: true},
            sortBy: {type: String, default: ''},
            sm: {type: Number, default: 6},
            md: {type: Number, default: 4},
            lg: {type: Number, default: 4},
        },
        data() {
            return {
                itemsPerPageArray: [4, 8, 12],
                search: '',
                filter: {},
                sortDesc: false,
                page: 1,
                itemsPerPage: 4,
            }
        },
        computed: {
            numberOfPages() {
                return Math.ceil(this.items.length / this.itemsPerPage)
            },
            filteredKeys() {
                return this.keys.filter(key => key !== `Name`)
            },
        },
        methods: {
            nextPage() {
                if (this.page + 1 <= this.numberOfPages) this.page += 1
            },
            formerPage() {
                if (this.page - 1 >= 1) this.page -= 1
            },
            updateItemsPerPage(number) {
                this.itemsPerPage = number
            },
        },
    }
</script>