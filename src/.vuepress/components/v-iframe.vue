<template>
	<iframe
		class="frame"
		:src="src"
		:height="height"
		style="width: 100%;"
		scrolling="no"
		frameborder="no"
		allowtransparency="true"
		allowfullscreen="true"
	>
	</iframe>
</template>

<script>
export default {
	props: ['height', 'src']
}
</script>

<style scoped>
.frame {
	margin: 20px 0;
}
</style>
