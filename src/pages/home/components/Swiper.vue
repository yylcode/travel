<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
	    <!-- slides -->
		    <swiper-slide v-for="item of swiperList"
		    				:key="item.id" >
		    	<img class="swiper-img" 
				    	:src="item.imgUrl"
				    	:alt="item.title">
		    </swiper-slide>
		  
		   
		    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
	
</template>

<script>
	export default{
		name:'HomeSwiper',
		data(){
			return {
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true,
					autoplay:true,
					speed:2000

				},
				swiperList:[{
					id:'0001',
					title:'轮播图_1',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg'
				},{
					id:'0002',
					title:'轮播图_2',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1808/8a/1957a0fb58ad0402.jpg_750x200_e72b8c0f.jpg'
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active
		background:#fff !important
.wrapper
	overflow:hidden
	width:100%
	height:0
	padding-bottom:26.67%
	background:#ccc
	// 高度等于窗口宽度的31.25%
	.swiper-img
		width:100%
</style>