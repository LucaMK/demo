<template>
	<div id="app-content" >
		<h1>{{msg}}</h1>
		<h2>this is msg h2 {{msg}}</h2>
		<h3>this is test hot maddiler</h3>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'this is vue indexPage'
		}
	},
	created() {
		console.log('this is console init  created');
	},
	mounted() {
		console.log('this is mounted function ');
	}
}
</script>

<style>
#app-content{
	width: 100%;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>