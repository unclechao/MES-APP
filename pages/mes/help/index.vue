<template>
	<view>
		<view class="cu-list menu sm-border" @click="NavChange('instructionOnline')">
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-read text-blue"></text>
					<text>在线说明书</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-service text-blue"></text>
					<text>故障操作指导</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-wenzi text-blue"></text>
					<text>术语解释</text>
				</view>
			</view>
		</view>
		<view class="cu-list menu sm-border margin-top" @click="NavChange('about')">
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-info text-blue"></text>
					<text>关于</text>
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
					case "about":
						uni.navigateTo({
							url: '/pages/mes/help/about'
						});
						break;
					case "instructionOnline":
						uni.navigateTo({
							url: '/pages/mes/help/instructionOnline'
						});
						break;
					default:
						this.$root.title = '帮助'
						break;
				}
			},
		}
	}
</script>
