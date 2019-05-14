<template>
	<div class="hello-con">
		<img src="../../static/img/logo.png" alt="logImage" srcset="">
		<span>thsi is hello world0</span>
		<div class="sub-class">sub text</div>
	</div>
</template>
<script>
export default {
	name: 'test_helloworld'
}
</script>
<style lang="sass" scoped>

.hello-con {
	width: 100%;
	background: #e47932;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.sub-class{
		width: 100px;
		height: 100px;
		background-color: rgba(23,234,232, .5);

		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>

