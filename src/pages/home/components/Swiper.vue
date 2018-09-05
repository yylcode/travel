<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
	    <!-- slides -->
		    <swiper-slide v-for="item of list"
		    				:key="item.id" >
		    	<img class="swiper-img" 
				    	:src="item.imgUrl"
				    	 >
		    </swiper-slide>
		  
		   
		    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
	
</template>

<script>
	export default{
		name:'HomeSwiper',
		props:{
			list:Array
		},
		data(){
			return {
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true,
					autoplay:true,
					speed:2000

				}
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