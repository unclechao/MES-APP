<template>
	<view>
		<cu-custom bgColor="bg-black" isBack="true">
			<block slot="content">关于</block>
		</cu-custom>
		<view class="flex padding justify-center">
			<image mode="aspectFit" style="width: 120px; height: 120px;" src="/static/rochiev.png"></image>
		</view>
		<view class="padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="solid-bottom padding">
					<text class="text-black text-xxl text-bold">MES 管理系统</text>
					<view>版本: 1.0</view>
				</view>
			</view>
		</view>
		<view class="padding-sm" style="position: fixed;bottom: 0;width: 100%;">
			<view class="flex justify-center">
				<text class="text-gray text-sm">长春融成智能设备制造股份有限公司 版权所有</text>
			</view>
			<view class="flex justify-center">
				<text class=" text-gray text-sm">Copyright © 2020 Rochiev. All Rights Reserved.</text>
			</view>
		</view>
	</view>
</template>
