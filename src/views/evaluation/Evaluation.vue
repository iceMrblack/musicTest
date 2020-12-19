<template>
<el-row>
	<el-col :span="6" class="display-module">
		<Display></Display>
	</el-col>
	<el-col :span="14" class="manage-module">
		<Manage></Manage>
	</el-col>
</el-row>

</template>

<script>
import Display from "@/views/evaluation/childCops/displayModule/Display"
import Manage from "@/views/evaluation/childCops/managementModule/Manage"
export default {
  name: 'Evaluation',
  data () {
    return {

    }
  },
  components:{
  	Manage,
  	Display,
  }
}
</script>

<style lang="css" scoped>
.display-module{
	margin-left: 50px;
	margin-top: 58px;
}
.manage-module{
	margin-top: 24px;
}
</style>