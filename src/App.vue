<template>
  <v-app id="inspire">
    <v-app-bar color="deep-purple accent-4" dense dark app clipped-right>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Breathe Box</v-toolbar-title>

      <v-spacer></v-spacer>

      <navbar></navbar>

      <v-spacer/>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-items>
        <v-list-item :to="{name:'login'}" :exact="true" v-if="$vuetify.breakpoint.mdAndUp">
          <v-list-item-icon>
            <v-icon>mdi-lock</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item @click="true" style="background-color:red" v-if="$vuetify.breakpoint.mdAndUp">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
        <v-list-item @click="rightDrawer = !rightDrawer">
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
          </v-avatar>
        </v-list-item>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app left>
      <sidebar></sidebar>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="rightDrawer" app right clipped>
      <rightsidebar></rightsidebar>
    </v-navigation-drawer>

    <v-content align="center">
      <v-container fluid>
        <router-view></router-view>
      </v-container>

      <v-row style="margin-top:100px;">
        <v-footer :padless="true" absolute>
          <v-card dark flat tile width="100%" class="deep-purple accent-4 text-center">
            <v-card-text class="white--text">
              <div>Hold your breath. You are in the right place. Mr Dev.</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              &copy; {{ new Date().getFullYear() }} —
              <strong>Breathe Box</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import sidebar from "./components/sidebar";
import navbar from "./components/navbar";
import rightsidebar from "./components/right_sidebar";

export default {
	components: {
		sidebar,
		navbar,
		rightsidebar
	},
	data() {
		return {
			open: false,
			rightDrawer: false
		};
	},
	created() {
		this.initializeSidebar();
	},
	methods: {
		initializeSidebar() {
			this.open = this.$vuetify.breakpoint.mdAndUp;
		}
	},
	computed: {
		drawer: {
			get() {
				return this.open;
			},
			set(value) {
				this.open = value;
			}
		}
	}
};
</script>
