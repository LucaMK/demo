<template>
	<div class="h-container">
		<img src="../../static/logo.png" alt="logo">
		<h1>this is helloworld page</h1>
		<h2>{{msg}}</h2>
	</div>
</template>

<script>
export default {
	name:'helloworld',
	data() {
		return {
			msg: 'this is hello msg'
		}
	}
}
</script>

<style lang="sass" scoped>
.h-container 
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		img
			width: 200px;
			height: auto;
		
		h1
			color: red;
		
		h2
			color: blue;
		
</style>