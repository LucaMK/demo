import Vue from 'vue';
import VueRouter from 'vue-router'
import HelloWorld from './pages/HelloWorld'
import sec from './pages/second'

Vue.use(VueRouter)

const routes = new VueRouter({
	routes:[
		{
			path: '/',
			name: 'home',
			component: HelloWorld
		},
		{
			path: '/sec',
			name: 'second',
			component: sec
		}
	]
})

export default routes;