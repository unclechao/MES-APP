<template>
	<view>
		<!-- 页眉 -->
		<cu-custom bgColor="bg-black">
			<block slot="content">{{title}}</block>
		</cu-custom>
		<!-- 内容 -->
		<scroll-view v-show="PageCur=='index'" scroll-y class="page">
			<image src="/static/rochiev.png" mode="widthFix" style="padding:20upx" class="response"></image>
			<view class="nav-list">
				<view @click="ComponentChange(item)" class="nav-li" :class="'bg-'+item.color" :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
				 v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
		<workOrder v-show="PageCur=='workOrder'"></workOrder>
		<device v-show="PageCur=='device'"></device>
		<help v-show="PageCur=='help'"></help>
		<my v-show="PageCur=='my'"></my>
		<!-- 页脚 -->
		<view class="cu-bar tabbar  bg-black shadow foot">
			<view :class="PageCur=='index' ? 'action text-blue' : 'action text-gray'" @click="NavChange" data-cur="index">
				<view class="cuIcon-home"></view>
				<text>首页</text>
			</view>
			<view :class="PageCur=='workOrder' ? 'action text-blue' : 'action text-gray'" @click="NavChange" data-cur="workOrder">
				<view class="cuIcon-form"></view>
				<text>工单</text>
			</view>
			<view :class="PageCur=='device' ? 'action text-blue' : 'action text-gray'" @click="NavChange" data-cur="device">
				<view class="cuIcon-repair"></view>
				<text>设备</text>
			</view>
			<view :class="PageCur=='help' ? 'action text-blue' : 'action text-gray'" @click="NavChange" data-cur="help">
				<view class="cuIcon-question"></view>
				<text>帮助</text>
			</view>
			<view :class="PageCur=='my' ? 'action text-blue' : 'action text-gray'" @click="NavChange" data-cur="my">
				<view class="cuIcon-my"></view>
				<text>我的</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'MES 管理系统',
				PageCur: 'index',
				elements: [{
						title: '工单',
						name: 'workOrder',
						color: 'blue',
						cuIcon: 'form'
					},
					{
						title: '设备',
						name: 'device',
						color: 'blue',
						cuIcon: 'repair'
					},
					{
						title: '帮助',
						name: 'help',
						color: 'blue',
						cuIcon: 'question'
					},
					{
						title: '我的 ',
						name: 'my',
						color: 'blue',
						cuIcon: 'my'
					},
				],
			};
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
				switch (this.PageCur) {
					case "device":
						this.title = '设备'
						break;
					case "my":
						this.title = '我的'
						break;
					case "help":
						this.title = '帮助'
						break;
					case "workOrder":
						this.title = '工单'
						break;
					default:
						this.title = 'MES 管理系统'
						break;
				}
			},
			ComponentChange: function(page) {
				this.PageCur = page.name
				this.title = page.title
			}
		}
	}
</script>
