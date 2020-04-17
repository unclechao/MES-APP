<template>
	<view>
		<cu-custom bgColor="bg-black" isBack="true">
			<block slot="content">创建工单</block>
		</cu-custom>
		<form>
			<view class="cu-form-group">
				<view class="title">工单编号<text class="requiredField">﹡</text></view>
				<input placeholder="" name="input" style="text-align:right"></input>
			</view>
			<view class="cu-form-group solid-top solid-bottom">
				<view class="title">类型<text class="requiredField">﹡</text></view>
				<picker @change="OrderTypeChange" :value="orderTypeIndex" :range="orderType">
					<view class="picker">
						{{orderTypeIndex > -1 ? orderType[orderTypeIndex] : '请选择工单类型'}}
					</view>
				</picker>
			</view>
			<!-- 灌装工单 -->
			<view v-show="orderType[orderTypeIndex]=='灌装'">
				<view class="cu-form-group solid-top solid-bottom">
					<view class="title">灌装类型<text class="requiredField">﹡</text></view>
					<picker @change="FillingOrderTypeChange" :value="fillingOrderTypeIndex" :range="fillingOrderType">
						<view class="picker">
							{{fillingOrderTypeIndex > -1 ? fillingOrderType[fillingOrderTypeIndex] : '请选择灌装类型'}}
						</view>
					</picker>
				</view>
				<!-- 灌装工单 -->
				<view v-show="fillingOrderType[fillingOrderTypeIndex]=='灌装'">
					<view class="cu-form-group solid-top solid-bottom">
						<view class="title">空桶来源<text class="requiredField">﹡</text></view>
						<picker @change="EmptyBarrelSourceTypeChange" :value="emptyBarrelSourceTypeIndex" :range="emptyBarrelSourceType">
							<view class="picker">
								{{emptyBarrelSourceTypeIndex > -1 ? emptyBarrelSourceType[emptyBarrelSourceTypeIndex] : '请选择空桶来源'}}
							</view>
						</picker>
					</view>
					<view class="cu-form-group solid-top solid-bottom">
						<view class="title">产品名称<text class="requiredField">﹡</text></view>
						<picker @change="ProductTypeChange" :value="productTypeIndex" :range="productType">
							<view class="picker">
								{{productTypeIndex > -1 ? productType[productTypeIndex] : '请选择产品'}}
							</view>
						</picker>
					</view>
					<view class="cu-form-group solid-top solid-bottom">
						<view class="title">数量<text class="requiredField">﹡</text></view>
						<input placeholder="" name="input" type="number" style="text-align:right"></input>
					</view>
					

				</view>
				<!-- 吹扫工单 -->
				<view v-show="fillingOrderType[fillingOrderTypeIndex]=='吹扫'">
				</view>
				<!-- 补料工单 -->
				<view v-show="fillingOrderType[fillingOrderTypeIndex]=='补料'">
				</view>
			</view>
			<!-- 入库工单 -->
			<view v-show="orderType[orderTypeIndex]=='入库'">
			</view>
			<!-- 出库工单 -->
			<view v-show="orderType[orderTypeIndex]=='出库'">
			</view>
			<!-- 盘库工单 -->
			<view v-show="orderType[orderTypeIndex]=='盘库'">
			</view>
			<!-- 移库工单 -->
			<view v-show="orderType[orderTypeIndex]=='移库'">
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderTypeIndex: -1,
				orderType: ['灌装', '入库', '出库', '盘库', '移库'],
				fillingOrderTypeIndex: -1,
				fillingOrderType: ['灌装', '吹扫', '补料'],
				emptyBarrelSourceTypeIndex: 1,
				emptyBarrelSourceType: ['桶库供桶', '外部供桶'],
				productTypeIndex: -1,
				productType: ['dynamic1', 'dynamic2'],
			};
		},
		methods: {
			OrderTypeChange(e) {
				if (e.detail.value == -1)
					this.orderTypeIndex = 0;
				else
					this.orderTypeIndex = e.detail.value
			},
			FillingOrderTypeChange(e) {
				if (e.detail.value == -1)
					this.fillingOrderTypeIndex = 0;
				else
					this.fillingOrderTypeIndex = e.detail.value
			},
			EmptyBarrelSourceTypeChange(e) {
				if (e.detail.value == -1)
					this.emptyBarrelSourceTypeIndex = 0;
				else
					this.emptyBarrelSourceTypeIndex = e.detail.value
			},
			ProductTypeChange(e) {
				if (e.detail.value == -1)
					this.productTypeIndex = 0;
				else
					this.productTypeIndex = e.detail.value
			},

		}
	}
</script>

<style>
	.requiredField {
		color: #FF5555
	}
</style>
