<template>
	<view>
		<view class="cu-list menu sm-border" @click="NavChange('createOrder')">
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-edit text-blue"></text>
					<text>创建工单</text>
				</view>
			</view>
		</view>
		<view class="cu-list menu sm-border">
			<view class="cu-item arrow" @click="NavChange('orderList')">
				<view class="content">
					<text class="cuIcon-list text-blue"></text>
					<text>工单列表</text>
				</view>
			</view>
			<view class="cu-item arrow" @click="NavChange('orderSchedule')">
				<view class="content">
					<text class="cuIcon-newshot text-blue"></text>
					<text>计划排产</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		methods: {
			NavChange: function(target) {
				switch (target) {
					case "createOrder":
						uni.navigateTo({
							url: '/pages/mes/workOrder/createOrder'
						});
						break;
					case "orderList":
						uni.navigateTo({
							url: '/pages/mes/workOrder/orderList'
						});
						break;
					case "orderSchedule":
						uni.navigateTo({
							url: '/pages/mes/workOrder/orderSchedule'
						});
						break;
					default:
						this.$root.title = '工单'
						break;
				}
			},
		}
	}
</script>
