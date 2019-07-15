<template>
	<view>
	<view style="overflow: hidden;" >
		<view class="header" style="position: fixed;width: 100%;background: white;">
			<view class="wx_btn">
				<button v-for="(value,i) in wx_btn" :key='i' @click="wx_details" :id="value" hover-class="hv">{{value}}</button>
			</view>
		</view>
		<view :style="{height:hei,display:dis}"></view>
		<view class="content">
			<view class="">
				<view class="ti" v-for="(value,i) in wx_detail" :key="i">
					<view class="tia"><text @click="ur(value.content)">{{value.title}}</text></view>
					<view class="tib"><img :src="value.pic" alt="" class="wx_pic"></view>
					<view class="tic">
						<text>来源:{{value.src}}</text>
						<view>
							<text @click="fx(i)">分享</text><text class="share"></text>
							<text @click="sc">收藏</text><text class="sc"></text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup :show="showPopupBottomShare" type="bottom" position="bottom" mode="fixed" @hidePopup="hidePopup" class="textFlow">
    <view class="bottom-title">分享到</view>
    <view class="bottom-content">
        <view class="bottom-content-box" v-for="(item, index) in bottomData" :key="index">
            <view class="bottom-content-image" :class="item.name" @click="who(index)">
                <text class="icon">{{ item.icon }}</text>
            </view>
            <view class="bottom-content-text" >{{ item.text }}</view>
        </view>
    </view>
    <view class="bottom-btn" @click="hidePopup">取消分享</view>
</uni-popup>

	</view>
	</view>
</template>

<script>
	
  import {uniPopup} from "@/components/uni-popup/uni-popup.vue"

	export default {
		components: {uniPopup},
		
		onReady() {
			uni.request({
				url: 'https://api.jisuapi.com/news/channel?appkey=b462678ca6c3defb', //仅为示例，并非真实接口地址。   
				success: (res) => {
					this.wx_btn = res.data.result;

				}
			})
			uni.request({
				url: 'https://api.jisuapi.com/news/get?channel=头条&start=0&num=10&appkey=b462678ca6c3defb', //仅为示例，并非真实接口地址。   
				success: (res) => {
					this.wx_detail = res.data.result.list
					this.dis = "block"
				},
			
			})
			
		},
		
		data: function() {
			return {
				wx_btn: [],
				wx_detail: [],
				hei: "100px",
				dis: "none",
				shar: '',
				heis:0,
				wid:0,
				ii:0,
				showPopupBottomShare:false,
				bottomData: [{
						text: '微信',
						icon: '\ue6a4',
						name: 'wx',
						fangshi:"WXSceneSession"
					},
					{
						text: '朋友圈',
						icon: '\ue646',
						name: 'wx',
						fangshi:"WXSenceTimeline"
					},
					{
						text: 'QQ',
						icon: '\ue66b',
						name: 'qq'
					},
					{
						text: '新浪',
						icon: '\ue600',
						name: 'sina'
					},
					{
						text: '复制',
						icon: '\ue632',
						name: 'copy'
					},
					{
						text: '更多',
						icon: '\ue618',
						name: 'more'
					}
				]
				
				
				
				
							
				
			}
		},
		// 安卓物理键退出分享组件
		onBackPress:function(){		
			if(this.showPopupBottomShare==true){
				this.showPopupBottomShare=false
			}
		},
		onNavigationBarButtonTap:function(val){
			if(val.text==="聊天"){
				uni.showToast({
					title:"功能尚未实现",
					icon:"none"
				})
			}
			if(val.text==="我的"){
				uni.navigateTo({
					url:"mydeo"
				})
			}
		},
		methods: {
			sc:function(){
				uni.showToast({
					title:"功能暂未实现",
					icon:"none"
				})
			},
			who:function(index){
				var fs=this.bottomData[index].fangshi
				console.log(index)
				if(index==2||index==3){
					uni.showToast({
						title:"尚不支持",
						icon:"none"
					})
				}
				if(index==4||index==5){
					uni.showToast({
						title:"尚不支持",
						icon:"none"
					})
				}
				uni.getStorage({
					key: 'login_info',
					success:(res)=> {
					var a=res.data				
					if(a.username!=null&&a.avtarurl!=null){
						if(fs=="WXSenceTimeline"){
							uni.share({
										provider:"weixin",
										scene: "WXSenceTimeline",
										type: 0,
										title:this.wx_detail[this.ii].title,
										summary: this.wx_detail[this.ii].title,
										href:this.wx_detail[this.ii].src,
										imageUrl:this.wx_detail[this.ii].pic,									
										fail: function(err) {
											uni.showToast({
												title:"分享失败"
											})
										}
									})
						}if(fs=="WXSceneSession"){
							uni.share({
										provider:"weixin",
										scene: "WXSceneSession",
										type: 0,
										title:this.wx_detail[this.ii].title,
										summary: this.wx_detail[this.ii].title,
										href:this.wx_detail[this.ii].src,
										imageUrl:this.wx_detail[this.ii].pic,									
										fail: function(err) {
											uni.showToast({
												title:"分享失败"
											})
										}
									})
						}
						
					}
				},
				fail: (res) => {					
					uni.showModal({
						title:"登录",
						content:"登录后才能分享",
						success: (res) => {
							if(res.confirm){
								uni.navigateTo({
									url:"login",								
								})
							}
						}
					})
				}
					})
			},			
			hidePopup:function(){
				this.showPopupBottomShare=false
			},
			wx_details: function(e) {
				var a = e.target.id
				console.log(a)
				uni.request({
					url: 'https://api.jisuapi.com/news/get?channel=' + a + '&start=0&num=10&appkey=b462678ca6c3defb', //仅为示例，并非真实接口地址。   
					success: (res) => {
						this.wx_detail = res.data.result.list
						this.dis = "block"
					},

				});

			},
			ur: function(en) {
				plus.storage.setItem("xq", en)
				uni.navigateTo({
					url: "wx_xq"
				})
			},
			fx: function(i) {
				this.showPopupBottomShare=true
				this.ii=i
				
				
				
					
				
				
				// uni.getProvider({
				// 	service: "share",
				// 	success: (res) => {
				// 		this.shar = res.provider
				// 		
				// 			uni.share({
				// 			provider:"weixin",
				// 			scene: "WXSenceTimeline",
				// 			type: 0,
				// 			title:"我的分享",
				// 			summary: this.wx_detail[1].title,
				// 			href:this.wx_detail[1].src,
				// 			imageUrl:this.wx_detail[1].pic,
				// 			success: function(res) {
				// 				uni.showToast({
				// 					title:"分享成功"
				// 				})
				// 			},
				// 			fail: function(err) {
				// 				uni.showToast({
				// 					title:"分享失败"
				// 				})
				// 			}
				// 		})
				// 	}
				// })
			}



		}


	}
</script>

<style>
	.hv{
		background: red;
	}
	.wx_btn {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.wx_btn:after {
		content: "";
		flex: auto;
	}

	.wx_btn {
		height: 100px;
	}

	.wx_btn button {
		width: 60px;
		height: 30px;
		padding: 0;
		margin: 0;
		line-height: 30px;
		vertical-align: middle;

	}

	.ti {
		font-size: 16px;
		width: 100%;
		margin-bottom: 15px;
	}

	.tia {
		text-align: center;
		font-weight: bold;
		padding-bottom: 20px;
	}

	.tib {
		text-align: center;
		
	}

	.tic {
		display: flex;
		justify-content: space-around;
	}



	.share {
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(../../static/news/share.png) no-repeat center;
		vertical-align: middle;
		margin-right: 5px;
	}

	.sc {
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(../../static/news/sc.png) no-repeat center;
		vertical-align: middle;
	}
	.bottom-title {
		line-height: 60upx;
		font-size: 24upx;
		padding: 15upx 0;
	}
	
	.bottom-content {
		display: flex;
		flex-wrap: wrap;
		padding: 0 35upx;
	}
	
	.bottom-content-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 15upx;
		width: 25%;
		box-sizing: border-box;
	}
	
	.bottom-content-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90upx;
		height: 90upx;
		overflow: hidden;
		background: #007aff;
		border-radius: 10upx;
	}
	
	.bottom-content-text {
		font-size: 26upx;
		color: #333;
		margin-top: 10upx;
	}
	
	.bottom-btn {
		height: 90upx;
		line-height: 90upx;
		border-top: 1px #f5f5f5 solid;
	}
	
	.bottom-content-image.wx {
		background: #00ce47;
	}
	
	.bottom-content-image.qq {
		background: #00b6f6;
	}
	
	.bottom-content-image.sina {
		background: #ff766a;
	}
	
	.bottom-content-image.copy {
		background: #07ccd0;
	}
	
	@font-face {
		font-family: 'iconfont';
		/* project id 1028200 */
		src: url('https://at.alicdn.com/t/font_1028200_47ewtwy4t04.ttf') format('truetype');
	}
	
	.icon {
		font-family: 'iconfont';
		font-size: 40upx;
		color: #fff;
	}
	
	.textFlow{
		animation:textfl 15s linear 0s infinite normal;
		animation-play-state:running;
		animation-fill-mode: backwards;
		position: relative;
	}
	@keyframes textfl{
		0%{
			bottom:0;
			
		}
		100%{
			bottom: 100%;
		}
		}
</style>
