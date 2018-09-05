<template>
	<div>
		<div class="recommend-title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
				 
					<img :src="item.imgUrl" alt="" class="item-img">
				 
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
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
		 
		margin-top:.2rem
	.item
		overflow:hidden
		display:flex
		height:1.9rem
		border-bottom:1px solid #eee	
		.item-img
			width:1.7rem
			height:1.6rem
			padding:.1rem
		.item-info
			flex:1
			padding:.1rem
			min-width:0
			.item-title
				line-height:.54rem
				font-size:.32rem
				ellipsis()
			.item-desc
				line-height:.4rem
				color:#ccc
				ellipsis()
			.item-button
				lineheight:.44rem
				
				background: #ff9300
				padding: 0  .2rem
				border-radius:.06rem
				margin-top:.16rem
				color:#fff
	.needmore
		height:0;
		padding-bottom: 12%		
		text-align:center
		padding-top:6%
				
		
</style>