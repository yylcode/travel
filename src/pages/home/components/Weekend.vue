<template>
	<div>
		<div class="recommend-title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
				 <div class="item-img-wrapper">
				 	<img :src="item.imgUrl" alt="" class="item-img">
				 </div>
					
				 
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					 
				</div>
			</li>
			<li class="needmore"><p>加载更多……</p></li>
		</ul>
	</div>
	
</template>
<script>
	export default{
		name:'HomeRecommend',
		props:{
			list:Array
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
	.recommend-title
		line-height:.8rem
		background: #eee
		text-indent:.2rem
		 
	.item-img-wrapper
		overflow:hidden
		height:0
		padding-bottom:38.9%
		.item-img
			width:100%
	.item-info
		
		padding:.1rem
		
		.item-title
			line-height:.54rem
			font-size:.32rem
			ellipsis()
		.item-desc
			line-height:.4rem
			color:#ccc
			ellipsis()
		 	
	.needmore
		height:0;
		padding-bottom: 12%		
		text-align:center
		padding-top:6%			
		
</style>