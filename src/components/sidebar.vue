<template>
  <v-list nav dense>
    <template v-for="(item,index) in sidebar_items">
      <v-list-item
        v-if="!item.children"
        :key=" 'sidebar' + index "
        :to="item.path"
        :exact="item.meta.exact"
      >
        <v-list-item-icon>
          <v-icon>mdi-{{item.meta.icon}}</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{item.meta.title}}</v-list-item-title>
      </v-list-item>

      <v-list-group
        v-if="item.children"
        :key=" 'sidebar' + index "
        prepend-icon="mdi-account"
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <template v-for="(children,index) in item.children">
          <v-list-item link :key=" 'child' + index " :to="child.path" :exact="child.meta.exact">
            <v-list-item-icon>
              <v-icon>mdi-{{child.meta.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{child.meta.title}}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list-group>
    </template>
    <template v-if="!$vuetify.breakpoint.mdAndUp">
      <v-list-item
        :key=" 'navbar' + index "
        :to="item.path"
        :exact="item.meta.exact"
        v-for="(item,index) in navbar_items"
      >
        <v-list-item-icon>
          <v-icon>mdi-{{item.meta.icon}}</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{item.meta.title}}</v-list-item-title>
      </v-list-item>
      <v-list-item :to="{name:'login'}" :exact="true">
        <v-list-item-icon>
          <v-icon>mdi-lock</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Login</v-list-item-title>
      </v-list-item>
      <v-list-item @click="true" style="background-color:red">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import sidebar_routes from "../router/sidebar";
import navbar_routes from "../router/navbar";

export default {
	data() {
		return {
			sidebar_items: sidebar_routes,
			navbar_items: navbar_routes
		};
	}
};
</script>