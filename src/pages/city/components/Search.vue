<template>

	<div>
		<div class="search">
		 	<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
		</div>
		<div class="search-content"
			 v-show="keyword"	
			 ref="search">
			<ul>
				<li class="search-item border-bottom" 
				v-for="item of list"
				:key="item.id"
				@click="handleCityClick(item.name)">{{item.name}}</li>
				<li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {mapMutations} from 'vuex'
	import Bscroll from 'better-scroll'
	export default{
		name:'CitySearch',
		props:{
			cities:Object
		},
		data(){
			return{
				keyword:'',
				list:[],
				timer:null
			}
		},
		methods:{
			handleCityClick(city){
				// this.$store.dispatch('changeCity',city)
				// this.$store.commit('changeCity',city)
				this.changeCity(city)
				this.keyword=city
				this.$router.push('/')	
			},
			...mapMutations(['changeCity'])
			 
		},
		computed:{
			hasNoData(){
				return !this.list.length
			}
		},
		watch:{
			keyword(){
				if(this.timer){
					clearTimeout(this.timere)
				}
				if(!this.keyword){
					this.list=[]
					return 
				}
				this.timer=setTimeout(()=>{
					const result=[]
					for(let i in this.cities){
						this.cities[i].forEach((value)=>{
							if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
								result.push(value)
							}
						})
					}
					this.list=result
				},100)
			}
		},
		mounted(){
			this.scroll=new Bscroll(this.$refs.search,{click:true,tap:true,mouseWheel:true})
		}
	}
</script>


<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
.search
 	padding:0 .1rem
 	background: $bgColor
 	height:.72rem
 	.search-input
 		box-sizing:border-box
 		padding:0 .1rem
 		width:100%
 		height:.62rem
 		line-height:.62rem
 		text-align:center
 		border-radius: .06rem
 		color:#666
 		font-size:.24rem
.search-content
	z-index:1
	overflow:hidden
	position:absolute
	top:1.58rem
	left:0
	right:0
	bottom:0
	background: #eee
	.search-item
		line-height:.62rem
		padding-left:.2rem
		background: #fff
		color:#666
</style>