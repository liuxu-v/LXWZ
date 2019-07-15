<template>
	<view  class="animated bounceInDown">
		<button type="primary" @click="hq">获取我的位置</button>
		<view class="wz" :style="{display:n}">
			<text>{{tim |getTime}}</text>
			<text>{{loca}}</text>
			<text>{{sped}}</text>
		</view>
		
		<button type="warn" @click="watch">监听位置信息</button>
		<view class="watch_wz" :style="{display:m}">
		<text>{{watch_tim |getTime}}</text>
		<text >{{wat}}</text>		
		<text>{{watch_sped}}</text>
		</view>
		
		<button>导航</button>
		<view>
			<text style="color: #0099FF;">起始地</text><input type="text" :value="user_posa" /><button type="warn" @click="bla">获取当前位置</button>
			<text style="color: #0099FF;">目的地</text><input type="text" value=""  @blur="blb"/>
			<button type="primary" @click="change">开始导航</button>
		</view>
		
		
		
		
	</view>
</template>

<script>
	import '../../static/css/animate.css'
	export default{
		data:function(){
			return {
				loca:'',
				wat:"",
				tim:'',
				sped:'',
				watch_tim:"",
				watch_sped:'',
				n:"none",
				m:"none",
				lat:'',
				lon:"",
				start_lon:"",
				start_lat:"",
				end_lon:'',
				end_lat:"",
				user_posa:'',
				user_posb:""
				
			}
		},
		filters:{
  		getTime:function(ns){                                  
  			 var date = new Date(ns);
			var year = date.getFullYear();
			var  month = date.getMonth()+1;
			var  day = date.getDate();
			var hours= date.getHours()
			var minu = date.getMinutes()
			var sec = date.getSeconds()
			month = month < 10 ? "0"+month:month;             
			day = day < 10 ? "0"+day:day;
			hours = hours < 10 ? "0"+hours:hours;             
			minu = minu < 10 ? "0"+minu:minu;
			sec = sec < 10 ? "0"+sec:sec;
			date = year+'-'+month+'-'+day+' '+hours+':'+minu+':'+sec;
			console.log(date); 
			return date;

  		}
  	},
		methods:{
			hq:function(){
				this.n="block"
				var _this=this								
					plus.geolocation.getCurrentPosition(function(p){												
						_this.loca=p.addresses
						_this.tim=p.timestamp
						_this.sped=p.coords.speed
						_this.lon=p.longitude  //经度
						_this.lat=p.latitude  //韦度
						
						
					},function(er){
						uni.showToast({
							title:"获取信息失败",
							icon:"none"
						})
					})								
			},
			watch:function(){
				
				this.m="block"
				var _this=this
				plus.geolocation.watchPosition(function(p){												
					_this.wat=p.addresses
					_this.watch_tim=p.timestamp
					_this.watch_sped=p.coords.speed
				},function(er){
					uni.showToast({
						title:"监听信息失败",
						icon:"none"
					})
				},{
					maximumAge:8000
				})
				uni.showModal({
					title:"提示",
					content:"是否以短信形式发送",
					success(res) {
						if(res.confirm){
							var messages= plus.messaging.createMessage(plus.messaging.TYPE_SMS);
							messages.to=["13872130671"]
							messages.body=_this.wat
							messages.silent = true
							plus.messaging.sendMessage(messages,function(){
								uni.showToast({
									title:"发送成功"
								})
							},function(){
								uni.showToast({
									title:"发送失败"
								})
							})
						}
					}
				})
			},
			bla:function($event){
				
				plus.geolocation.getCurrentPosition((res)=>{
					$event.target.value=res.addresses
					this.user_posa=$event.target.value
				})
				
				 plus.maps.Map.geocode( this.user_posa, function(su){
									 this.start_lon=su.coord.longitude
									 this.start_lat=su.coord.latitude
				}, function(e){
									 console.log(e)
				} )
			},
			blb:function($event){
				this.user_posb=$event.target.value
				 plus.maps.Map.geocode( this.user_posb, function(su){
									 this.end_lon=su.coord.longitude
									 this.end_lat=su.coord.latitude
				}, function(e){
									 console.log(e)
				} )
			},
			change:function($event){
				var dst = new plus.maps.Point(this.end_lon,this.end_lat);  //目的地
				var src = new plus.maps.Point(this.start_lon,this.start_lat);  //起始地				
				plus.maps.openSysMap( dst, "铁山区",src)
			}
			
				
			
			
			
			
		}
	}
</script>

<style>
.wz text{
	display: inline-block;
}
.watch_wz text{
	display: inline-block;
}

</style>
