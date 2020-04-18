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

import createOrder from './pages/mes/workOrder/createOrder.vue'
Vue.component('createOrder', createOrder)

import orderList from './pages/mes/workOrder/orderList.vue'
Vue.component('orderList', orderList)

import orderSchedule from './pages/mes/workOrder/orderSchedule.vue'
Vue.component('orderSchedule', orderSchedule)

import about from './pages/mes/help/about.vue'
Vue.component('about', about)

import instructionOnline from './pages/mes/help/instructionOnline.vue'
Vue.component('instructionOnline', instructionOnline)

import guide from './pages/mes/help/guide.vue'
Vue.component('guide', guide)

import termExplain from './pages/mes/help/termExplain.vue'
Vue.component('termExplain', termExplain)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
})
app.$mount()
