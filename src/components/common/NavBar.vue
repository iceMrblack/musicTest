<template>
	<div id="navbar">
		<el-menu class="menu" mode="">
			<el-col :span="block.left" class="left">
		        <el-row>
		          <el-col :span="4" class="logo">
		            <img src="~@/assets/logo.png" class="img" alt="">
		          </el-col>
		          <el-col :span="12" class="left_text">
		          	&nbsp;MIOOU
		          </el-col>
		        </el-row>
			</el-col>
			<el-col :span="block.center">
				<div></div>
			</el-col>
			<el-col :span="block.right">
		        <el-row>
		          <el-col :span="10" class="head">
			        <div class="block">
			        	<el-avatar :size="35" :src="circleUrl"></el-avatar>
			        </div>
		          </el-col>
		          <el-col :span="14" class="right_text">
				    <el-dropdown>
				      <span class="el-dropdown-link">
				        {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
				      	<div v-for="item in userInfos">
					        <el-dropdown-item :icon="item.icon">{{item.name}}</el-dropdown-item>
				      	</div>
				      </el-dropdown-menu>
				    </el-dropdown>
		          </el-col>
		        </el-row>
			</el-col>
		</el-menu>
	</div>
</template>

<script>
export default {

  name: 'NavBar',

  data () {
    return {
      block: {
        left: 5,
        center: 17,
        right: 2
      },
      circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      username:"维克多",
      userInfos:
      [
	      {
	      	name:"首页",
	      	icon:"el-icon-plus",
	      },
	      {
	      	name:"设置",
	      	icon:"el-icon-plus",
	      },
	      {
	      	name:"退出",
	      	icon:"el-icon-plus",
	      }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
#navbar{
	width: 100%;
}
/*menu*/
.menu{
	display: flex;
	align-items: center;
	height: 64px;
	background: #FFFFFF;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.09);
}

/*左边*/
.left {  
	line-height: 20px;
}
.logo{
	display: flex;
	margin-left: 24px;
  	height: 23px;
  	width: 51px;
}
.img{
	width: 100%;
}
.left_text{
	margin-left: 22px;
	width: 50px;
	height: 18px;
	font-size: 14px;
	color: #3A140B;
	line-height: 18px;
	font-weight: bolder;
}
.right_text{
	font-size: 14px;
	font-weight: 400;
	color: rgba(0, 0, 0, 0.85);
	line-height: 35px;
}
</style>