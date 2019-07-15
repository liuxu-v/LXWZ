<template>
	<view >
		<view class="dh" @click="wz">
			<text >位置信息</text>
			<uni-icon type="forward" size="30" class="ic"></uni-icon>
		</view>
		
		
		
		
	</view>
	
	
		
	
	
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	
	export default {
		components: {uniIcon},
		methods:{
			wz:function(){
				uni.navigateTo({
					url:"my"
				})
			}
			
		}
		
		}
</script>

<style>	

	.dh{
		background: #FF766A;
	}
	.dh text{
		display: inline-block;
		width: 80%;
		padding: 5px;
		padding-left: 15px;
	}
	.ic{
		width: 20%;
	}


</style>
