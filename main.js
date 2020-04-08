import Vue from 'vue'
import App from './App'

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

import device from './pages/mes/device/index.vue'
Vue.component('device', device)

import help from './pages/mes/help/index.vue'
Vue.component('help', help)

import my from './pages/mes/my/index.vue'
Vue.component('my', my)

import workOrder from './pages/mes/workOrder/index.vue'
Vue.component('workOrder', workOrder)

import about from './pages/mes/help/about.vue'
Vue.component('about', about)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
})
app.$mount()
