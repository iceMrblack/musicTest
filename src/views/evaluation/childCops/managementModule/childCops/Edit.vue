<template>
    <div class="edit-content">
        <div class="edit-content-title">
            <div class="edit-content-head">
                <el-row class="edit-content-head-row">
                    <el-col :span="1">
                        <i class="el-icon-tickets"></i>
                    </el-col>
                    <el-col :span="22">
                        <span class="edit-content-head-title">区块1——题注</span>
                    </el-col>
                </el-row>
            </div>
            <div class="edit-content-block">
                <el-row class="edit-content-block-row">
                    <el-col :span="2" class="edit-content-block-title">
                        <span>标题：</span>
                    </el-col>
                    <el-col :span="22">
                        <el-input class="edit-content-block-title-input" v-model="input" placeholder="请输入标题"></el-input>
                    </el-col>
                </el-row>
            </div>
            <div class="edit-content-block">
                <el-row class="edit-content-block-row">
                    <el-col :span="2" class="edit-content-block-title">
                        <span>注解：</span>
                    </el-col>
                    <el-col :span="22">
                        <el-input
                                class="edit-content-block-title-textarea"
                                type="textarea"
                                :rows="4"
                                placeholder="请输入注解"
                                v-model="textarea">
                        </el-input>
                    </el-col>
                </el-row>
            </div>
            <div class="edit-content-block">
                <el-row class="edit-content-block-row">
                    <el-col :span="2" class="save-title-content-col">
                        <el-button type="primary" id="save-title-content-button">保存</el-button>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="edit-content-body">
            <div class="edit-content-head">
                <el-row class="edit-content-head-row">
                    <el-col :span="1">
                        <i class="el-icon-tickets"></i>
                    </el-col>
                    <el-col :span="22">
                        <span class="edit-content-head-title">区块2——内容</span>
                    </el-col>
                </el-row>
            </div>
            <div class="edit-content-block">
                <el-row class="edit-content-block-row">
                    <el-col :span="2" class="edit-content-block-title">
                        <span>注解：</span>
                    </el-col>
                    <el-col :span="22">
                        <el-input
                                class="edit-content-block-title-textarea"
                                type="textarea"
                                :rows="4"
                                placeholder="童谣《小白兔白又白》；小白兔，白又白/俩只耳朵竖起来/..."
                                v-model="textarea">
                        </el-input>
                    </el-col>
                </el-row>
            </div>
            <div class="edit-content-block">
                <el-row class="edit-content-block-row">
                    <el-col :span="2" class="edit-content-block-title">
                        <span>图片：</span>
                    </el-col>
                    <el-col :span="22" class="edit-content-block-image">
                        <el-upload
                                action="#"
                                list-type="picture-card"
                                :auto-upload="false">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="file" slot-scope="{file}">
                                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                                <span class="el-upload-list__item-actions">
                                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                     <i class="el-icon-zoom-in"></i>
                                     </span>
                                     <span v-if="!disabled" class="el-upload-list__item-delete"
                                           @click="handleDownload(file)">
                                        <i class="el-icon-download"></i>
                                     </span>
                                    <span v-if="!disabled" class="el-upload-list__item-delete"
                                          @click="handleRemove(file)">
                                      <i class="el-icon-delete"></i>
                                    </span>
                                </span>
                            </div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-col>
                </el-row>
            </div>
            <div class="edit-content-block">
                <el-row class="edit-content-block-row">
                    <el-col :span="2" class="edit-content-block-title">
                        <span>注解：</span>
                    </el-col>
                    <el-col :span="22">
                        <el-upload
                                class="upload-demo"
                                drag
                                action="https://jsonplaceholder.typicode.com/posts/"
                                multiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        </el-upload>
                    </el-col>
                </el-row>
            </div>
            <div class="edit-content-block">
                <el-row class="edit-content-block-row">
                    <el-col :span="2" class="save-title-content-col">
                        <el-button type="primary" id="save-body-content-button">保存</el-button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Edit",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false
            };
        },
        methods: {
            handleRemove(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log(file);
            }
        },
    }
</script>

<style scoped>

    /**
      整体部分
    */

    .edit-content {
        padding-top: 20px;
        padding-left: 30px;
    }

    /**
      title 部分
    */

    .edit-content-block {
        padding-top: 20px;
    }

    .edit-content-head-title {
        width: 90px;
        height: 24px;
        font-size: 14px;
        font-weight: 600;
        color: #333333;
    }

    .edit-content-block-title {
        display: flex;
        align-items: center;
        width: 42px;
        height: 40px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);

    }

    .edit-content-block-title-input {
        width: 625px;
    }

    .edit-content-block-title-textarea {
        width: 625px;
    }

    .save-title-content-col {
        padding-left: 600px;
    }

    /**
      body 部分
     */
    .edit-content-body {
        margin-top: 30px;
    }

    #save-body-content-button {
        margin-bottom: 39px;
    }

</style>