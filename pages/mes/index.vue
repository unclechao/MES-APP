<template>
	<view>
		<!-- 页眉 -->
		<cu-custom bgColor="bg-black">
			<block slot="content">MES 管理系统</block>
		</cu-custom>
		<!-- 内容 -->
		<scroll-view v-show="PageCur=='index'" scroll-y class="page">
			<image src="/static/rochiev.png" mode="widthFix" style="padding:20upx" class="response"></image>
			<view class="nav-list">
				<view @click="ComponentChange(item.name)" class="nav-li" :class="'bg-'+item.color" :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
				 v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
		<workOrder v-show="PageCur=='workOrder'"></workOrder>
		<device v-if="PageCur=='device'"></device>
		<help v-if="PageCur=='help'"></help>
		<my v-if="PageCur=='my'"></my>
		<!-- 页脚 -->
		<view class="cu-bar tabbar  bg-black shadow foot">
			<view :class="PageCur=='index' ? 'action text-blue' : 'action text-gray'" @click="NavChange" data-cur="index">
				<view class="cuIcon-home"></view>
				首页
			</view>
			<view :class="PageCur=='workOrder' ? 'action text-blue' : 'action text-gray'" @click="NavChange" data-cur="workOrder">
				<view class="cuIcon-form"></view>
				工单
			</view>
			<view :class="PageCur=='device' ? 'action text-blue' : 'action text-gray'" @click="NavChange" data-cur="device">
				<view class="cuIcon-repair"></view>
				设备
			</view>
			<view :class="PageCur=='help' ? 'action text-blue' : 'action text-gray'" @click="NavChange" data-cur="help">
				<view class="cuIcon-question"></view>
				帮助
			</view>
			<view :class="PageCur=='my' ? 'action text-blue' : 'action text-gray'" @click="NavChange" data-cur="my">
				<view class="cuIcon-my"></view>
				我的
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			},
			ComponentChange: function(pageName) {
				this.PageCur = pageName
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}

	.box {
		margin: 20upx 0;
	}

	.box view.cu-bar {
		margin-top: 20upx;
	}
</style>
