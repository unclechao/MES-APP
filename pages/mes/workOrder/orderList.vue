<template>
	<view>
		<cu-custom bgColor="bg-black" isBack="true">
			<block slot="content">工单列表</block>
		</cu-custom>
		<view class="cu-list menu-avatar">
			<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in orderList" :key="index"
			 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
				<view class="cu-avatar round bg-green"></view>
				<view class="content">
					<view >item.SN</view>
					<view class="text-gray text-sm">
						<text class="margin-right-xs"></text> item.Status
					</view>
				</view>
				<view class="action" style="width: 60px;">
					<view class="text-grey text-xs">22:20</view>
					<view class="cu-tag round bg-grey sm">12 / 140</view>
				</view>
				<view class="move">
					<view class="bg-blue">下发</view>
					<!-- <view class="bg-blue">执行</view> -->
					<!-- <view class="bg-blue">停止</view> -->
					<!-- <view class="bg-blue">继续</view> -->
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
					Status: '队列等待'
				}, {
					SN: '20200228123456123',
					Status: '执行中'
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
