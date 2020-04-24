<template>
	<h1>Welcome to the secret page.</h1>
</template>
<script>
export default {
	name: "secret",
	data() {
		return {};
	},
	created() {
		this.$store.dispatch("loader", "loadRoles");
	},
	computed: {
		roles() {
			return this.$store.getters.getRoles;
		}
	}
};
</script>
