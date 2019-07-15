<template>
	<view class="a">
		<view style="position: fixed;height:40px;width: 100%;background: white;">
			<view class="header" type="text"  confirm-type="serach">
				
				<input type="text" value="" placeholder="口是心非" @blur="huoqu" />			
				<button type="primary"  class="btn" @click="ss">搜索</button>
			</view>
		</view>
		<view style="height: 40px;"></view>
		<view class="btna" >
			<view class="btn_s">
				<view class="aa">
					<image :src="music_pic" mode="" :class="{imgro:ro}"></image>
				</view>

				<view class="bb">
					<view class="btn_sd">						
						<text style="white-space: nowrap;" :class="{textFlow:tf}">{{title}}-{{author}}</text>
						
					</view>
					
					<view class="btn_sb">

						<img src="../../static/music/kt.png" @click="back">
						<img :src="stopImage" alt="" @click="stop">
						<img src="../../static/music/kj.png" alt="" @click="next">
						<img :src="xhImage" alt="" @click="loops">

					</view>
				</view>

			</view>


		</view>
		<view style="height: 70px;"></view>
		
		<view class="content">
			<view v-for="(value,i) in mv" :key='i'>
				<view :class="[i==currentindex ? 'music_view':'']" @click="zz(i,$event)" >									
						<text style="display: inline-block;margin: 5px;">{{value.title}}-{{value.author}}</text>
					
					
				</view>

			</view>
		</view>
		
	</view>

</template>

<script>
	
	export default {
		

		data: function() {
			return {
				mv: [],
				srcc: '',
				aud: {},
				index: 0,
				clip: 0,
				clips: 0,
				author: '',
				music_pic: '',
				title: '',
				durations:'',
				currentTimes:'',				
				musics:[],
				serach:"success",
				ro:false,
				tf:false,
				stopImage:"../../static/music/next.png",
				xhImage:"../../static/music/xh.png",
				hq:"",
				currentindex:null
				
					
				
					
				



			}
		},
		onShow:function(){
			this.aud = uni.createInnerAudioContext()	
		},
		onReady: function() {			
			uni.request({
				url: 'https://api.apiopen.top/searchMusic?name=口是心非',
				success: (res) => {
					this.mv = res.data.result
					this.music_pic=this.mv[0].pic
					this.title=this.mv[0].title
					this.author=this.mv[0].author
					this.srcc=this.mv[0].url
					
					
				}
			})
			
		},
		onBackPress() {
			uni.switchTab({
				url:"wx"
			})
		},
		
		methods: {
			huoqu:function(event){
				this.hq=event.target.value
				
				
			},
			ss:function(){
				uni.request({
					url: 'https://api.apiopen.top/searchMusic?name='+this.hq,
					success: (res) => {
						this.mv = res.data.result
						this.music_pic=this.mv[0].pic
						this.title=this.mv[0].title
						this.author=this.mv[0].author
						this.srcc=this.mv[0].url						
						
					}
				});
			},
			zz: function(i, $event) {				
						this.aud.stop()											
						this.aud.src = this.mv[i].url
						this.author = this.mv[i].author
						this.title = this.mv[i].title
						this.music_pic = this.mv[i].pic
						this.index = i	
						this.stopImage="../../static/music/bf.png"
						this.aud.play()						
						this.ro=true
						this.tf=true
						this.aud.onEnded(()=>{
							this.ro=false
							this.tf=false
							this.stopImage="../../static/music/next.png"
						})
						this.aud.onPlay(()=>{
							this.currentindex=i
						})
																																																								
			},
			
			
			stop: function(e) {
				var m = ++this.clips
				if (m % 2 != 0) {
					this.aud.play()
					this.ro=true
					this.tf=true
					this.stopImage="../../static/music/bf.png"
					
				} else {					
					this.aud.pause()
					this.ro=false
					this.tf=false
					this.stopImage="../../static/music/next.png"
					
				}


			},
			next: function(e) {
				this.aud.stop() //关键，必须等当前音乐停止了才可以继续下一首
				var a = ++this.index
				console.log(a)
				if(a==this.mv.length){
					uni.showToast({
						title:"最后一首了",
						icon:"none"
					})
				}
				this.aud.src = this.mv[a].url
				this.author = this.mv[a].author
				this.title = this.mv[a].title
				this.music_pic = this.mv[a].pic
				this.aud.play()
				this.ro=true
				this.tf=true
				this.stopImage="../../static/music/bf.png"
				this.aud.onPlay(()=>{
					this.currentindex=a
				})
			},
			back: function() {
				this.aud.stop()
				var a = --this.index
				console.log(a)
				if(a==-1){
					uni.showToast({
						title:"这是第一首了",
						icon:"none",						
					})
				}
				this.aud.src = this.mv[a].url
				this.author = this.mv[a].author
				this.title = this.mv[a].title
				this.music_pic = this.mv[a].pic
				this.aud.play()
				this.ro=true
				this.tf=true
				this.stopImage="../../static/music/bf.png"
				this.aud.onPlay(()=>{
					this.currentindex=a
				})
			},
			loops: function() {
				var mm = ++this.clip								
				if(mm%2!=0){					
					
				this.aud.loop=false	
				this.xhImage="../../static/music/xh1.png"
				}else{				
				
				this.aud.loop=true
				this.xhImage="../../static/music/xh.png"
				
				}
			}
		}

	}
</script>

<style>
	.content{
		
		background-image:url(../../static/music/musicbg.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;	
		background-attachment: fixed;
		opacity: 0.8;
		color: #99FFFF;
	}
	.header{
		width: 100%;	
		display: flex;
		justify-content: space-between;
	}
	.header input{
		flex-grow: 1;
		height: 40px;
		border: 1px solid ;
		border-radius: 3px;
	}
	.header button{
		height: 40px;
		
	}
	.header button {
		width: 25%;
	}
	.music_view{
		background: blue;
	}

	.music_view text {
		width: 100%;
	}



	.btna {
		height: 70px;
		background:url(../../static/music/music.jpg);
		margin-top: 5px;
		position: fixed;
		top: 40px;
		width: 100%;
		z-index: 999;
	}

	.btna img {
		width: 32px;
		height: 32px;
	}

	.btn_s {
		display: flex;
		height: 70px;
	}

	.aa {
		height: 70px;
		line-height: 70px;
		width: 20%;
		text-align: center;
	}

	.aa image {
		width: 60px;
		height: 60px;
		border-radius:70px;
		vertical-align: middle;
	}

	.bb {
		width: 80%;
	}

	.btn_sd {
		width: 100%;
		height: 30px;

	}
	
	.btn_sb {
		text-align: right;
		width: 100%;
		height: 50px;
		line-height: 50px;
	}

	.btn_sb image {
		display: inline-block;
		padding-left: 5px;
		vertical-align: middle;
		height: 32px;
	}	
	.music_view view{
		width:100%
	}
	.btn{position: relative;}
	.btn:before{
    content: '';
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url(../../static/music/sss.png) no-repeat;	 
	position: absolute; //设置伪类元素与原元素水平对齐	
	top:10px;
	left:5px;
}

.imgro{
	animation:myro 15s linear 0s infinite normal;
	animation-play-state:running;
	transform: rotate(0deg);
}
@keyframes myro{
	0%{
		transform: rotate(0deg);
	}
	
	100%{
		transform:rotate(360deg);
	}
}

.textFlow{
	animation:textfl 15s linear 0s infinite normal;
	animation-play-state:running;
	animation-fill-mode: backwards;
	position: relative;
}
@keyframes textfl{
	0%{
		left:0;
		color:#0099FF	
	}
	100%{
		left: 100%;
	}
	
	
	
	
	
}
</style>
