<template>
	<view>

		消息页面
	</view>
</template>

<script>
	export default {
		name: "mes",
		data() {
			return {
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
						title: '消息',
						name: 'message',
						color: 'blue',
						cuIcon: 'message'
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
