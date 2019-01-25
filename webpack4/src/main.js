import Vue from 'vue';
import FastClick from 'fastclick'
import App from './App';


FastClick.attach(document.body);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app-box')