<template>
	<v-app id="inspire">
		<v-row align="center" justify="center" v-if="loading">
			<v-overlay opacity="1">
				<v-progress-circular
						indeterminate
						size="64"
				></v-progress-circular>
			</v-overlay>
		</v-row>

		<v-content align="center" v-show="!loading">
			<v-app-bar app clipped-right dark dense>
				<v-app-bar-nav-icon
						@click.stop="drawer = !drawer"
						v-if="$vuetify.breakpoint.smAndDown || authenticated"
				></v-app-bar-nav-icon>

				<v-toolbar-title>Breathe Box</v-toolbar-title>

				<v-spacer></v-spacer>

				<navbar></navbar>

				<v-spacer/>

				<v-toolbar-items>
					<v-list-item
							:exact="true"
							:to="{ name: 'login' }"
							v-if="$vuetify.breakpoint.mdAndUp && !authenticated"
					>
						<v-list-item-icon>
							<v-icon>mdi-lock</v-icon>
						</v-list-item-icon>

						<v-list-item-title>Login</v-list-item-title>
					</v-list-item>
					<v-list-item @click="rightDrawer = !rightDrawer" v-show="authenticated">
						<avatar :name="current_user.name" :profile_picture="current_user.profile_picture" :size="45"
								v-if="current_user"></avatar>
					</v-list-item>
				</v-toolbar-items>
			</v-app-bar>

			<v-navigation-drawer
					app dark left v-if="$vuetify.breakpoint.smAndDown || authenticated"
					v-model="drawer">
				<sidebar></sidebar>
			</v-navigation-drawer>

			<v-navigation-drawer app clipped dark right v-if="authenticated" v-model="rightDrawer">
				<rightsidebar></rightsidebar>
			</v-navigation-drawer>

			<v-container fluid>
				<router-view></router-view>
			</v-container>

			<v-row style="margin-top:100px;">
				<v-footer :padless="true" absolute>
					<v-card
							class="deep-purple accent-4 text-center"
							dark
							flat
							tile
							width="100%"
					>
						<v-card-text class="white--text">
							<div>
								Hold your breath. You are in the right place. Mr
								Dev.
							</div>
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
		<vue-progress-bar></vue-progress-bar>
		<snackbar></snackbar>
	</v-app>
</template>
<script>
import sidebar from "./components/sidebar";
import navbar from "./components/navbar";
import rightsidebar from "./components/right_sidebar";
import snackbar from "./components/Snackbar"
import Avatar from "./components/Avatar";
// import cookies from "js-cookie";

export default {
	components: {
		Avatar,
		sidebar,
		navbar,
		rightsidebar,
		snackbar
	},
	data() {
		return {
			open: false,
			rightDrawer: false
		};
	},
	created() {
		this.initializeSidebar();
		this.$store.dispatch("refreshToken");
	},
	methods: {
		initializeSidebar() {
			this.open = this.$vuetify.breakpoint.mdAndUp;
		},
	},
	computed: {
		drawer: {
			get() {
				return this.open;
			},
			set(value) {
				this.open = value;
			}
		},
		loading() {
			return this.$store.getters.refreshingStatus;
		},
		authenticated() {
			return this.$store.state.token;
		},
		current_user() {
			return this.$store.state.current_user;
		}
	}
};
</script>
