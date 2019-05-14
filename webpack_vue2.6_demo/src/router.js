import Vue from 'vue';
import router from 'vue-router'
import HelloWorld from './pages/HelloWorld_page'

Vue.use(router)

const routes = new router({
	routes:[
		{
			path: '/',
			name: 'home',
			component: HelloWorld
		}
	]
})

export default routes;