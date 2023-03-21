<template>
    <div>
        <el-card style="font-size: 12px;">
            <template #header>
                <el-form-item label="商品类型">
                    <el-radio-group v-model="radio1">
                        <el-radio label="常规商品" />
                        <el-radio label="拼团商品" />
                        <el-radio label="票务商品" />
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="模式选择">
                    <el-radio-group v-model="radio2">
                        <el-radio label="线上核销" />
                        <el-radio label="线下物流" />
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="推荐位商品">
                    <el-radio-group v-model="radio3">
                        <el-radio label="展现" />
                        <el-radio label="不展现" />
                    </el-radio-group>
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <el-form-item label="现价：">
                            <el-input-number v-model="num" :min="0" controls-position="right" size="large" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="现价：">
                            <el-input-number v-model="num1" :min="0" controls-position="right" size="large" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="返佣：">
                            <el-input-number v-model="num2" :min="0" controls-position="right" size="large" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="此三项用于列表展示">

                        </el-form-item>

                    </el-col>
                </el-row>

            </template>
            <!-- <el-tabs  class="demo-tabs" ></el-tabs> -->
            <el-tabs type="border-card" class="demo-tabs">
                <el-tab-pane label="基础设置">
                    <div style="font-size: 12px;margin-left: 20px;">
                        <jichu></jichu>

                    </div>
                </el-tab-pane>
                <el-tab-pane label="价格库存">
                    <jige></jige>
                </el-tab-pane>
                <el-tab-pane label="核销设置">
                    <el-form-item label="限时抢购：">
                        <el-switch v-model="value2" size="large"
                            style="margin-right: 30px; --el-switch-on-color: rgb(45, 140, 240);" />
                        <div class="block">
                            <el-date-picker v-model="datevaluestart" type="date" placeholder="开始时间：" format="YYYY/MM/DD"
                                value-format="YYYY-MM-DD" :disabled="value2" /> --
                            <el-date-picker :disabled="value2" v-model="datevalueend" type="date" placeholder="结束时间："
                                format="YYYY/MM/DD" value-format="YYYY-MM-DD" />
                        </div>
                    </el-form-item>
                    <el-form-item label="核销保护期:">

                        <el-input style="width: 100px;" v-model="value"></el-input>

                    </el-form-item>
                    <span style="font-size: 12px;"> 默认0，单位小时（如果设置，则订单确认后该时长内不能核销使用）</span>
                    <el-button type="primary" size="small">加载公众号/秀米内容</el-button>
                </el-tab-pane>
                <el-tab-pane label="商品详情">
                    <div style="text-align: center;">
                        <div style="position: absolute;top: 20px;right: 20px;">
                        建议使用秀米编辑器排版，【生成贴纸】后，将内容复制进来，或者选择
                        <el-button type="primary" size="small">加载公众号/秀米内容</el-button>
                    </div>
                        <el-button type="primary" size="large" style="margin-top: 20px;" >保存</el-button>
                    </div>
                   
                    <div style="margin-top: 50px;">
                        <bianji></bianji>

                    </div>
                </el-tab-pane>
                <el-tab-pane label="预定须知">
                    <bianji></bianji>
                </el-tab-pane>
                <el-tab-pane label="转发素材">
                    <el-card class="box-card" shadow="hover">
                        <el-form-item label="文字素材">
                            <el-input v-model="value1" type="textarea" placeholder="请输入分享文案"/>
                        </el-form-item>
                    <el-form-item label="封面图">
                        <span style="display: flex; align-items: center;"><el-upload action="#" list-type="picture-card"
                                :auto-upload="false">
                         
                            </el-upload>

                          
                            <el-button type="primary">添加一张</el-button>

                        </span>



                    </el-form-item>
                    <div>大小不超过2M,尺寸建议750x750</div>
                    </el-card>
                </el-tab-pane>
                <el-tab-pane label="积分规则">Task</el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>
<script lang="ts" setup>
import bianji from './bianji-03.vue'
import jichu from './jichu-01.vue'
import jige from './jiage-02.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const radio1 = ref('常规商品')
const radio2 = ref('线上核销')
const radio3 = ref('不展现')
const num1 = ref(1)
const num2 = ref(1)
const num = ref(1)
const value2 = ref('')
const value1 = ref('')
const dialogVisible = ref('')
const dialogImageUrl = ref('')
const datevaluestart = ref('')
const datevalueend = ref('')
const value = ref('0')

console.log(route.params);
</script>
<style  scoped>
.demo-tabs>.el-tabs__content {
    border: 1px dashed var(--el-border-color);
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>