<template>
    <div id="manage">
        <el-row class="content-row">
            <el-col :span="6" class="classfication-div">
                <Classfication></Classfication>
            </el-col>
            <el-col :span="14" class="edit-div">
                <Edit></Edit>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    import Classfication from "./childCops/Classfication";
    import Edit from "./childCops/Edit";

    export default {
        name: 'Manage',
        data() {
            return {}
        },
        components: {
            Classfication,
            Edit,
        }
    }
</script>

<style lang="css" scoped>

    #manage {
        width: 972px;
        height: 100%;
        background: #FFFFFF;
        border: 1px solid rgba(204, 204, 204, 0.5);
    }

    .content-row {
        height: 100%;
    }

    .classfication-div {
        width: 25%;
        height: 100%;
    }

    .edit-div {
        width: 75%;
        height: 100%;
        border: 1px solid rgba(204, 204, 204, 0.5);
    }
</style>