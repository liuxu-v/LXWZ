<template>
	<view>
		<rich-text :nodes="ull"></rich-text>
	</view>
</template>

<script>
	export default {
		onLoad() {
		this.ull=plus.storage.getItem("xq")
		},
		onReady: () => {
			plus.storage.removeItem('xq')
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
