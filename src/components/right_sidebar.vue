<template>
	<v-list dense nav>
		<template>
			<v-list-item two-line>
				<v-list-item-avatar>
					<img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg">
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title>John Smith</v-list-item-title>
					<div>
						<v-chip small>Admin</v-chip>
					</div>
				</v-list-item-content>
			</v-list-item>
		</template>

		<v-divider></v-divider>

		<v-list-item @click="true">
			<v-list-item-icon>
				<v-icon>mdi-refresh</v-icon>
			</v-list-item-icon>

			<v-list-item-title>Change Password</v-list-item-title>
		</v-list-item>

		<v-list-item @click="darkMode = !dark">
			<v-list-item-icon>
				<v-icon>mdi-brightness-4</v-icon>
			</v-list-item-icon>

			<v-list-item-title>Switch to {{dark ? 'Light' : 'Dark' }} Theme</v-list-item-title>
		</v-list-item>

		<v-list-item @click="logout" style="background-color:red" v-if="authenticated">
			<v-list-item-icon>
				<v-icon>mdi-logout</v-icon>
			</v-list-item-icon>

			<v-list-item-title>Logout</v-list-item-title>
		</v-list-item>
	</v-list>
</template>

<script>
	export default {
		data() {
			return {
				dark: true
			};
		},
		computed: {
			darkMode: {
				get() {
					return this.dark;
				},
				set(value) {
					this.dark = value;
					this.$vuetify.theme.dark = value;
				}
			},
			authenticated() {
				return this.$store.state.token
			}
		},
		methods: {
			logout() {
				this.$axios.post('logout')
						.then(() => {
							this.$store.dispatch('logout');
						})
						.catch(() => {
							// console.dir(errors);
						});
			}
		}
	};
</script>