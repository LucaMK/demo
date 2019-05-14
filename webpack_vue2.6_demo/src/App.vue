<template>
	<div class="container">
		<h1>app title hi!</h1>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style scoped>
.container{
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>