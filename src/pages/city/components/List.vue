<template>
	<div class="list">
		<div class="area">
			<div class="title border-topbottom">您的位置</div>
			<div class="button-list">
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="button-list">
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
			</div>
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
			</div>
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
			</div>
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
				<div class="item">阿拉尔</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'CityList'
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

 	.list
 		overflow:hidden
 		positon:absolute
 		top:0
 		left:0
 		right:0
 		bottom:0
 		background: red
		.title
		 	line-height:.44rem
		 	background: #eee
		 	padding-left:.2rem
		 	color:#666
		 	font-size:.26rem
		 	border-bottom:1px solid #ccc
		.button-list
			padding:.1rem .3rem .1rem .3rem
			overflow:hidden
			.button-wrapper
				float:left
				width:33.3% 
				.button
					margin:.1rem
					padding:.1rem 0
					text-align:center
					border:0.02rem solid #ccc
					border-radius:.09rem
		.item-list
			.item
				line-height:.74rem
				padding-left:.2rem
				border-bottom:1px solid #ccc
</style>