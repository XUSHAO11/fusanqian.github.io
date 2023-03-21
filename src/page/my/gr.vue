<template>
    <div>
        <el-card>

            <template #header>个人资料</template>
            <el-tabs type="border-card" class="demo-tabs">

                <el-tab-pane label="个人基本资料">

                    <div style="font-size: 12px;display: flex;">头像: <img
                            src="http://static.iub88.com/68900cn/mall20201268/1668238714564B3bDKmj.png" alt=""
                            style="width: 60px;"></div>
                    <div style="font-size: 12px;margin-top: 20px;">姓名: <span>管理员</span></div>
                    <div style="font-size: 12px;margin-top: 20px;">手机: <span>
                            13939270084</span></div>

                </el-tab-pane>
                <el-tab-pane label="修改个人资料">

                    <div style="font-size: 12px;display: flex;">头像:
                        <el-upload class="avatar-uploader"
                            action="http://static.iub88.com/68900cn/mall20201268/1668238714564B3bDKmj.png" :show-file-list="false"
                            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img style="width: 60px;height: 60px;" v-if="imageUrl" :src="imageUrl" class="avatar" />
                            <el-icon v-else class="avatar-uploader-icon">
                                <Plus />
                            </el-icon>
                        </el-upload>
                    </div>
                  
                    <div style="font-size: 12px;margin-top: 20px;">姓名: <el-input v-model="input1"></el-input></div>
                    <div style="font-size: 12px;margin-top: 20px;">手机: <span>
                        <el-input v-model="input2"></el-input></span></div>

                        <el-button type="primary" size="large">保存</el-button>
                </el-tab-pane>

            </el-tabs>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'
let input1 =ref('管理员')
let input2 =ref('13939270084')
const imageUrl = ref('http://static.iub88.com/68900cn/mall20201268/1668238714564B3bDKmj.png')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
</script>

<style>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 60px;
  height: 60px;
  text-align: center;
}
</style>