<template>
	<!-- gallary画廊 -->
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOptions">
			    <swiper-slide v-for="(item,index) of imgs" 
			    							:key="index">
			    	<img class="gallary-img" :src="item">
			    </swiper-slide>
			     
		    <div class="swiper-pagination"  slot="pagination"></div>
	  		</swiper>
		</div>
	</div>
</template>
<script>
	export default{
		name:'CommonGallary',
		props:{
			imgs:{
				type:Array,
				default(){
					return[
					]
				}
			}
		},
		data(){
			return{
				swiperOptions:{
					pagination:'.swiper-pagination',
					paginationType:'fraction',
					observer:true,
					observeParents:true
				}
			}
		},
		methods:{
			handleGallaryClick(){
				this.$emit('close')
			}
			
		}
	}
</script>
<style lang="stylus" scoped>
	.container>>>.swiper-container
		overflow:inherit
	.container
		display:flex  //弹性布局
		flex-direction:column // 容器内项目排列方向为列
		justify-content:center //项目在主轴上的对齐方式为居中对齐
		z-index:99
		position:fixed
		left:0
		right:0
		top:0
		bottom:0
		background: #000
		.wrapper
			height:0
			width:100%
			padding-bottom:100%
			.gallary-img
				width:100%
				height:width
			.swiper-pagination
				color:#fff
				bottom:-1rem
</style>