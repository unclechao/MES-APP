import Vue from 'vue'
import App from './App'

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

import device from './pages/mes/device.vue'
Vue.component('device', device)

import help from './pages/mes/help.vue'
Vue.component('help', help)

import my from './pages/mes/my.vue'
Vue.component('my', my)

import workOrder from './pages/mes/workOrder.vue'
Vue.component('workOrder', workOrder)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
