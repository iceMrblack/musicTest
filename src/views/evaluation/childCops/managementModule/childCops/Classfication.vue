<template>
    <div class="classfication">
        <el-tree
                class="tree-line"
                icon-class="el-icon-circle-plus-outline"
                :indent="0"
                :data="class_data"
                @node-click="handleNodeClick"
        >
            <span class="custom-tree-node" slot-scope="{node,data}">
                <span>
                    <i :class="data.icon"></i>{{ data.label }}
                </span>
            </span>
        </el-tree>
    </div>

</template>

<script>
    export default {
        name: 'Class',
        data() {
            return {
                class_data: [{
                    label: '测评模块',
                    children: [
                        {
                            label: '1.1读儿歌，打节拍',
                            icon: 'el-icon-success',
                        },
                        {
                            label: '1.1读儿歌，打节拍',
                            icon: 'el-icon-success',
                        },
                        {
                            label: '1.1读儿歌，打节拍',
                            icon: 'el-icon-success',
                        },
                        {
                            label: '1.1读儿歌，打节拍',
                            icon: 'el-icon-success',
                        },
                        {
                            label: '1.1读儿歌，打节拍',
                            icon: 'el-icon-success',
                        },{
                            label: '1.1读儿歌，打节拍',
                            icon: 'el-icon-success',
                        },
                        {
                            label: '1.1读儿歌，打节拍',
                            icon: 'el-icon-success',
                        },
                    ]
                }, {
                    label: '教学模块',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '教学模块',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            }
        }
    };
</script>

<style lang="css">

    .classfication {
        margin-top: 20px;
        font-size: 16px;
        margin-left: 16px;
        font-weight: 500;
        color: #333333;
    }

    .el-tree-node {
        position: relative;
        padding-left: 16px;
        margin-top: 12px;
        padding-top: 5px;
    }

    .el-tree-node__children {
        padding-left: 16px;
    }

    .el-tree-node__content{
        margin-left: -16px;
    }

    .el-tree-node :last-child:before {
        height: 38px;
    }

    .el-tree > .el-tree-node:before {
        border-left: none;
    }

    .el-tree > .el-tree-node:after {
        border-top: none;
    }

    .el-tree-node:before, .el-tree-node:after {
        content: "";
        left: -4px;
        position: absolute;
        right: auto;
        border-width: 1px;
    }

    .tree :first-child .el-tree-node:before {
        border-left: none;
    }

    .el-tree-node:before {
        border-left: 1px dashed #4386c6;
        bottom: 0px;
        height: 100%;
        top: -20px;
        width: 1px;
    }

    .el-tree-node:after {
        border-top: 1px dashed #4386c6;
        height: 20px;
        top: 17px;
        width: 24px;
    }
</style>