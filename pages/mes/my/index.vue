<template>
	<view>
		<view class="cu-list menu sm-border">
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-comment text-blue"></text>
					<text>消息通知</text>
				</view>
			</view>
		</view>
		<view class="cu-list menu sm-border margin-top">
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-lock text-blue"></text>
					<text>修改密码</text>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-exit text-blue"></text>
					<text>退出登录</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
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
