<template>
  <v-toolbar-items>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-list-item
        v-for="(item,index) in items"
        :key=" 'topnav' + index "
        :to="item.path"
        :exact="item.meta.exact"
      >
        <v-list-item-icon>
          <v-icon>mdi-{{item.meta.icon}}</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{item.meta.title}}</v-list-item-title>
      </v-list-item>
    </template>
  </v-toolbar-items>
</template>

<script>
import navbar_routes from "../router/navbar";

export default {
	props: ["drawer"],
	data() {
		return {
			items: navbar_routes
		};
	}
};
</script>
