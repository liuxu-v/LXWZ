<template>
	<div class="content">
		<div class="contenta">
			<view class="contentaa">
				<text>用户名:</text>
				<input type="text" value="" placeholder="请输入用户名" @blur="bl"/>
			</view>
			<view class="contentbb">
				<text>密码:</text>
				<input type="text"  password="" value="" @blur="psdbl" placeholder="请输入密码" />
			</view>
			<view class="contentcc">
				<button type="default" @click="dl">登录</button>
				<button type="primary">注册</button>
			</view>
			<view class="contentdd">
				<view>----其他登录方式----</view>
				<view>
					<view>
						<img src="../../static/login/wx.png" alt="" @click="wx_login">
						<img src="../../static/login/qq.png" alt="" @click="qq_login">
						<img src="../../static/login/wb.png" alt="" @click="wb_login">
					</view>					
				</view>
			</view>
		</div>
	</div>
</template>

<script>
	export default {
		data:function(){
		 return {
		   inputValue:'',
		   psdValue:'',
		   username:'',
		   avtar_url:''
		 }	
		},
		methods:{
			dl:function(){
				if(this.inputValue.length!=0&&this.psdValue.length!=0){
					uni.showToast({
						title:"登录成功",																								
					})
					setTimeout(function(){
						uni.navigateBack({
							
						})
					},2000)
				}
			},
			bl:function(event){
				this.inputValue=event.target.value
				if(this.inputValue.length==0){
					uni.showToast({
						title:"用户名不得为空"
					})
				}
			},
			psdbl:function(event){
				this.psdValue=event.target.value
				if(this.psdValue.length==0){
					uni.showToast({
						title:"密码不得为空"
					})
				}
			},
			wx_login:function(){
				uni.getProvider({
					service:"oauth",
					success: (loginRes) => {
						uni.login({							
						provider: "weixin",				
						success:(loginRes)=>{
							uni.showToast({
								title:"微信登录成功"
							})
							
							uni.getUserInfo({
								provider:"weixin",
								withCredentials:"true",
								success: (loginRes) => {
									this.username=loginRes.userInfo.nickName
									this.avtar_url=loginRes.userInfo.avatarUrl
									uni.setStorage({
										key:"login_info",
										data:{username:this.username,avtarurl:this.avtar_url}
									})
									
								}
							})
							setTimeout(function(){
								uni.navigateBack({
									
								})
							},1000)
							
							},
							fail: (loginRes) => {
								uni.showToast({
									title:"微信登录失败"
								})
							}
							})
					},
					fail: (loginRes) => {
						uni.showToast({
							title:"未检测到微信"
						})
					}
				})
														
			},
			qq_login:function(){
				uni.showToast({
					title:"正在开发中",
					icon:"none"
				})
			},
			wb_login:function(){
				uni.showToast({
					title:"正在开发中",
					icon:"none"
				})
			}
		}
		
			
		
	}
</script>

<style>
	
.content{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 500px;
	}
.contenta{
	width: 80%;
	height: 300px;
	border: 1px solid grey;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	
	
}
input{
	border: 1px solid grey;
}
.contentaa,.contentbb,.contentcc{
	width: 100%;
	display: flex;
	justify-content: center;
}
.contentbb text{
	letter-spacing: 5px;
}
.contentaa input,.contentbb input,.contentcc input {
	border-radius: 3px;
}
.contentcc button{
	width: 30%;
}
.contentdd img{
	width: 32px;
	height: 32px;
	display: inline-block;
	padding-left:8px;
	padding-right:8px
}
.contentdd view:first-child{
	text-align: center;
	margin-bottom: 15px;
}
.contentdd view:last-child>view{
	margin: 0 auto;
}


	
	
</style>
