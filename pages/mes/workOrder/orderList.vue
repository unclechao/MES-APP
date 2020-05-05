<template>
	<view>
		<cu-custom bgColor="bg-black" isBack="true">
			<block slot="content">工单列表</block>
		</cu-custom>
		<view class="cu-list menu-avatar">
			<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in orderList" :key="index"
			 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
				<view class="cu-avatar bg-green lg round" style="font-size: 8pt;">{{item.Status}}</view>
				<view class="content">
					<view>{{item.SN}}</view>
					<view class="text-gray text-sm">
						<text class="margin-right-xs"></text> {{item.Product}}
					</view>
				</view>
				<view class="action" style="width: 90px;">
					<view class="text-grey text-sm">{{item.Type}}</view>
					<view class="cu-tag round bg-grey">{{item.CompletedCount}} / {{item.Target}} </view>
				</view>
				<view class="move" v-if="item.Status=='队列等待'">
					<view class="bg-blue">下发</view>
					<view class="bg-red">结束</view>
				</view>
				<view class="move" v-if="item.Status=='执行中'">
					<view class="bg-blue">停止</view>
					<view class="bg-red">结束</view>
				</view>
				<view class="move" v-if="item.Status=='停止'">>
					<view class="bg-blue">继续</view>
					<view class="bg-red">结束</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				listTouchStart: 0,
				listTouchStartY: 0,
				listTouchDirection: null,
				orderList: [{
					SN: '20201010123456123',
					Type: '灌装',
					Status: '队列等待',
					Target: '260',
					CompletedCount: '125',
					Product: '水',
					CreateTime: '2019-11-12 23:31:23'
				}, {
					SN: '20200221132334398',
					Type: '灌装',
					Status: '执行中',
					Target: '480',
					CompletedCount: '56',
					Product: '苯胺',
					CreateTime: '2020-5-4 15:11:09'
				}]
			};
		},
		methods: {
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX;
				this.listTouchStartY = e.touches[0].pageY;
			},
			// ListTouch计算方向
			ListTouchMove(e) {
				if (this.listTouchStart - e.touches[0].pageX > 60 && this.listTouchStartY - e.touches[0].pageY < 20 && e.touches[0]
					.pageY - this.listTouchStartY < 20) {
					this.listTouchDirection = 'left';
				}
			},
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			}
		}
	}
</script>
