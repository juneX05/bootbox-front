<template>
	<v-list dense nav>
		<template v-if="!$vuetify.breakpoint.mdAndUp">
			<v-list-item
					:exact="item.meta.exact"
					:key=" 'navbar' + index "
					:to="item.path"
					v-for="(item,index) in navbar_items"
			>
				<v-list-item-icon>
					<v-icon>mdi-{{item.meta.icon}}</v-icon>
				</v-list-item-icon>

				<v-list-item-title>{{item.meta.title}}</v-list-item-title>
			</v-list-item>
		</template>
		<template v-for="(item,index) in sidebar_items">
			<template v-if="authenticated">
				<v-list-item
						:exact="item.meta.exact"
						:key=" 'sidebar' + index "
						:to="item.path"
						v-if="!item.children"
				>
					<v-list-item-icon>
						<v-icon>mdi-{{item.meta.icon}}</v-icon>
					</v-list-item-icon>

					<v-list-item-title>{{item.meta.title}}</v-list-item-title>
				</v-list-item>

				<v-list-group
						:key=" 'sidebar' + index "
						prepend-icon="mdi-account"
						v-if="item.children"
						value="true"
				>
					<template v-slot:activator>
						<v-list-item-title>Users</v-list-item-title>
					</template>

					<template v-for="(children,index) in item.children">
						<v-list-item :exact="child.meta.exact" :key=" 'child' + index " :to="child.path" link>
							<v-list-item-icon>
								<v-icon>mdi-{{child.meta.icon}}</v-icon>
							</v-list-item-icon>
							<v-list-item-title>{{child.meta.title}}</v-list-item-title>
						</v-list-item>
					</template>
				</v-list-group>
			</template>
		</template>
		<template v-if="!$vuetify.breakpoint.mdAndUp && !authenticated">
			<v-list-item :exact="true" :to="{name:'login'}">
				<v-list-item-icon>
					<v-icon>mdi-lock</v-icon>
				</v-list-item-icon>

				<v-list-item-title>Login</v-list-item-title>
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
		},
		computed: {
			authenticated() {
				return this.$store.state.token;
			}
		}
	};
</script>