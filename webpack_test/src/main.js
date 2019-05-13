import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
console.log('this is app components is App', App);

Vue.config.productionTip = false

var vm = new Vue({
	el: '#app',
	router,
	data() {
		return {
			msg: 'this is main .js vue data'
		}
	},
	created() {
		console.log('this is vue modle creat function ');
	},
	components: {App},
	template: `
	<div>
		<App/>
	</div>
		`,
	mounted() {
		var h = document.createElement('DIV');
		h.innerHTML = `<div>this is create append child</div>`;
		document.body.appendChild(h);
		console.log('this is log vue mounted function ', this.$el, this , this.el);
	}
})