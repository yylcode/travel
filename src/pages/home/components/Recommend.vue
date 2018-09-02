<template>
	<div>
		<div class="recommend-title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				 
					<img :src="item.imgUrL" alt="" class="item-img">
				 
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
	
</template>
<script>
	export default{
		name:'HomeRecommend',
		data(){
			return{
				recommendList:[{
					id:'0001',
					imgUrL:'http://img1.qunarzz.com/sight/p0/201301/10/5ec7f8046fc2dc8793835fbb.jpg_200x200_9fc0a9a0.jpg',
					title:'高家大院',
					desc:'古朴大院，让你感受大宅门的气息'
				},{
					id:'0002',
					imgUrL:'http://img1.qunarzz.com/sight/p0/201301/10/5ec7f8046fc2dc8793835fbb.jpg_200x200_9fc0a9a0.jpg',
					title:'高家大院',
					desc:'古朴大院，让你感受大宅门的气息'
				},{
					id:'0003',
					imgUrL:'http://img1.qunarzz.com/sight/p0/201301/10/5ec7f8046fc2dc8793835fbb.jpg_200x200_9fc0a9a0.jpg',
					title:'高家大院',
					desc:'古朴大院，让你感受大宅门的气息'
				},{
					id:'0004',
					imgUrL:'http://img1.qunarzz.com/sight/p0/201301/10/5ec7f8046fc2dc8793835fbb.jpg_200x200_9fc0a9a0.jpg',
					title:'高家大院',
					desc:'古朴大院，让你感受大宅门的气息'
				}
				// ,{
				// 	id:'0005',
				// 	imgUrL:'http://img1.qunarzz.com/sight/p0/201301/10/5ec7f8046fc2dc8793835fbb.jpg_200x200_9fc0a9a0.jpg',
				// 	title:'高家大院',
				// 	desc:'古朴大院，让你感受大宅门的气息'
				// },{
				// 	id:'0006',
				// 	imgUrL:'http://img1.qunarzz.com/sight/p0/201301/10/5ec7f8046fc2dc8793835fbb.jpg_200x200_9fc0a9a0.jpg',
				// 	title:'高家大院',
				// 	desc:'古朴大院，让你感受大宅门的气息'
				// },{
				// 	id:'0007',
				// 	imgUrL:'http://img1.qunarzz.com/sight/p0/201301/10/5ec7f8046fc2dc8793835fbb.jpg_200x200_9fc0a9a0.jpg',
				// 	title:'高家大院',
				// 	desc:'古朴大院，让你感受大宅门的气息'
				// },{
				// 	id:'0008',
				// 	imgUrL:'http://img1.qunarzz.com/sight/p0/201301/10/5ec7f8046fc2dc8793835fbb.jpg_200x200_9fc0a9a0.jpg',
				// 	title:'高家大院',
				// 	desc:'古朴大院，让你感受大宅门的气息'
				// },{
				// 	id:'0009',
				// 	imgUrL:'http://img1.qunarzz.com/sight/p0/201301/10/5ec7f8046fc2dc8793835fbb.jpg_200x200_9fc0a9a0.jpg',
				// 	title:'高家大院',
				// 	desc:'古朴大院，让你感受大宅门的气息'
				// },{
				// 	id:'0010',
				// 	imgUrL:'http://img1.qunarzz.com/sight/p0/201301/10/5ec7f8046fc2dc8793835fbb.jpg_200x200_9fc0a9a0.jpg',
				// 	title:'高家大院',
				// 	desc:'古朴大院，让你感受大宅门的气息'
				// },{
				// 	id:'0011',
				// 	imgUrL:'http://img1.qunarzz.com/sight/p0/201301/10/5ec7f8046fc2dc8793835fbb.jpg_200x200_9fc0a9a0.jpg',
				// 	title:'高家大院',
				// 	desc:'古朴大院，让你感受大宅门的气息'
				// }
				]
			}
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
				
				
		
</style>