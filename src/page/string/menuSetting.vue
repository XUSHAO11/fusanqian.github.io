<template>
    <div>

        <el-card class="box-card">

            <template #header>

                <div class="card-header">
                    <div>
                        <span style="color: #999;font-size: 14px;">设置</span> <i
                            style="margin: 0 8px;color: #dddee1; font-size: 12px;">/</i>
                        <span style="font-weight: 700;color: #495060;"> 页面装修</span>
                    </div>
                </div>
            </template>
            <el-card class="box-card" style="background-color:  #d9ecff;">
                <div style="font-size: 12px;">
                    <span> 页面地址：用于菜单配置、导航配置</span><br>
                    <span>首页： #/pages/index/index</span><br>
                    <span> 分类： #/pages/glist/glist</span><br>
                    <span>达人中心：#/pages/daren/daren</span><br>
                    <span> 我的： #/pages/personal/personal</span><br>
                    <span>会员卡： #/pages/personal/vip</span><br>
                    <span>商家合作： #/pages/personal/join</span>
                </div>
            </el-card>
            <el-tabs type="border-card">
                <el-tab-pane label="User">



                    <el-row class="row-bg" style="display: flex;align-items: center;">
                        <el-col :span="3">
                            <span style="font-weight: 700;color: #495060;margin-right: 20px;display: flex;"> 首页弹屏:</span>

                        </el-col>
                        <el-col :span="2">
                            <el-switch v-model="value3" size="large" inline-prompt active-text="是" inactive-text="否" />

                        </el-col>
                        <el-col :span="6">
                            <el-input v-model="formInline.user" placeholder="请填写跳转地址" />

                        </el-col>
                        <el-col :span="6">
                            <el-upload action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                :auto-upload="false">
                                <el-input ></el-input>
                                <template #trigger>

                                    <el-button type="primary">select file</el-button>
                                </template>
                            </el-upload>


                        </el-col>
                        <el-col :span="6">
                            <el-button type="primary" @click="onSubmit">保存设置</el-button>


                        </el-col>
                    </el-row>



                </el-tab-pane>
                <el-tab-pane label="Config">Config</el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ref } from 'vue'




const input = ref('action')

const value3 = ref(true)
const formInline = reactive({
    user: '',
    region: '',
})

const onSubmit = () => {
    console.log('submit!')
}
</script>

<style lang="scss" scoped></style>