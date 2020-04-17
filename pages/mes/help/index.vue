<template>
	<view>
		<view class="cu-list menu sm-border">
			<view class="cu-item arrow" @click="NavChange('instructionOnline')">
				<view class="content">
					<text class="cuIcon-read text-blue"></text>
					<text>在线说明书</text>
				</view>
			</view>
			<view class="cu-item arrow" @click="NavChange('guide')">
				<view class="content">
					<text class="cuIcon-service text-blue"></text>
					<text>操作指导</text>
				</view>
			</view>
			<view class="cu-item arrow" @click="NavChange('termExplain')">
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
					case "guide":
						uni.navigateTo({
							url: '/pages/mes/help/guide'
						});
						break;
					case "termExplain":
						uni.navigateTo({
							url: '/pages/mes/help/termExplain'
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
