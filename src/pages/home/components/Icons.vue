<template>
	<div class="icons">
		<swiper>
			<swiper-slide  v-for="(page,index) of pages" :key="index">
					<div
						class="icon"
						v-for="item of page"
						:key="item.id">
						<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl" >
						</div>
						<p class="icon-desc">{{item.desc}}</p>
					</div>
			</swiper-slide>
			  
		</swiper> 
	</div>
</template>
<script>
	export default{
		name:'HomeIcons',
		data(){
			return {
				// swiperOption:{
				// 	pagination:'.swiper-pagination',
				// },
				iconList:[
				{
					id:'0001',
					desc:'景点门票',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
				},{
					id:'0002',
					desc:'文化古迹',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png'
				},{
					id:'0003',
					desc:'演出',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png'
				},{
					id:'0004',
					desc:'一日游',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
				},{
					id:'0005',
					desc:'西安必游',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
				},{
					id:'0006',
					desc:'动植物园',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
				},{
					id:'0007',
					desc:'逛博物馆',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png'
				},{
					id:'0008',
					desc:'绝美古镇',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1808/8d/747c9a29b8dba402.png'
				},{
					id:'0009',
					desc:'亲子游',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png'
				},{
					id:'0010',
					desc:'全部玩乐',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png'
				}]
			}
		},
		computed:{
			pages(){
				const pages=[]
				this.iconList.forEach((item,index)=>{
					const page = Math.floor(index/8)
					if(!pages[page]){
						pages[page]=[]
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
		 
	.icons>>>.swiper-container
		height:0
		padding-bottom:50%
	.icons
		margin-top:.1rem
		.icon
			position: relative
			overflow:hidden
			float:left
			height:0
			width:25%
			padding-bottom:25%

			.icon-img
				position: absolute
				top:0
				left:0
				right:0
				bottom:.44rem
				box-sizing:border-box
				padding:.1rem
				.icon-img-content
					height:100%
					display:block
					margin:0 auto
			.icon-desc
				position: absolute
				left:0
				right:0
				bottom:0
				line-height:.44rem
				height:.44rem
				text-align:center
				color:$darkTextColor
				ellopsis()
					
</style>