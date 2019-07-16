<template>
	<view>
		<rich-text :nodes="ull"></rich-text>
	</view>
</template>

<script>
	export default {
		onLoad() {
			var _this=this
			uni.getStorage({
				key:"xq",
				success(res){
					_this.ull=res.data					
				}
			})		
		},
		onReady: () => {
			uni.removeStorage({
				key:"xq"
			})			
		},
		data:function(){
			return{
				ull:''
			}
		}
	}
</script>

<style>
</style>
