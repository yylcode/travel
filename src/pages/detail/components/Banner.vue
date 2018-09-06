<template>
	<div class="banner">
		<img class="banner-img" src="//img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_600x330_cd78f1b7.jpg">
		<div class="banner-info">
			<div class="banner-title">长恨歌长恨歌长恨歌长恨歌</div>
			<div class="banner-number">
				<span class="iconfont banner-icon">
				   &#xe692;
			    </span>
			    39
		    </div>

		</div>
	</div>
</template>
<script>
	export default{
		name:'DetailBanner'
	}
</script>
<style lang='stylus' scoped>
	.banner
		position:relative
		overflow:hidden
		height:0
		padding-bottom:45%
		.banner-img
			width:100%
		.banner-info
			display:flex
			position:absolute
			left:0
			right:0
			bottom:0
			line-height:.5rem
			color:#fff
			background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
			.banner-title
				flex:1
				font-size:.25rem
				padding:0 .2rem
				letter-spacing:.03rem
			.banner-number
				height:.32rem
				margin-top:.14rem
				padding:0 .3rem 
				line-height:.32rem
				border-radius:.2rem
				background: rgba(0, 0, 0, .5)
				font-size:.24rem
				.banner-icon
					font-size:.24rem
</style>