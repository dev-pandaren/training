<template>
    <details class="details">
        <summary v-html="title"></summary>
        <slot></slot>
    </details>
</template>

<script>
export default {
	props: ['title']
}
</script>

<style scoped>
.details summary::-webkit-details-marker {
	color: #949494;
	margin-right: 10px;
}
</style>
