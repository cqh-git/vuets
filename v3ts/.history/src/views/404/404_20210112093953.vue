<template>
	<div class="root">
		222222222222
	</div>
</template>

<script>
	export default {
		name: 'a2',
		mounted() {
			setTimeout(() => {
				console.log(this.$router)
			}, 2000)
		}
	}
</script>
