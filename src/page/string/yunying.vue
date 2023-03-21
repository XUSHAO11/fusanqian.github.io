<template>
    <div>

        <div>
            <span style="color: #999;font-size: 14px;">设置</span> <i
                style="margin: 0 8px;color: #dddee1; font-size: 12px;">/</i>
            <span style="font-weight: 700;color: #495060;"> 运营设置</span>
        </div>

        <el-form :model="form" label-width="120px"
            style="margin-top: 40px;margin-left: 40px; color: #495060;font-size: 12px !important;">

            <el-form-item label="多站点功能：">
                <el-switch size="large" v-model="value1" inline-prompt active-text="开启" inactive-text="关闭" />
                <span style="font-size: 12px;">开启后，客户可以根据地区筛选商品</span>
            </el-form-item>

            <el-form-item label="库存规则">
                <el-radio-group v-model="radio1">

                    <el-radio label="1" size="large">下单减库存</el-radio>
                    <el-radio label="2" size="large">支付减库存</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="销量规则">
                <el-radio-group v-model="radio2">
                    <el-radio label="1" size="large">下单加销量</el-radio>
                    <el-radio label="2" size="large">支付加销量</el-radio>

                </el-radio-group>
            </el-form-item>
            <el-form-item label="返佣模式">
                <el-radio-group v-model="radio3">
                    <el-radio label="1" size="large">订单完成后返佣</el-radio>
                    <el-radio label="2" size="large">订单确定后返佣</el-radio>


                </el-radio-group>
            </el-form-item>

      




            <el-form-item label="达人模式">
                <el-radio-group v-model="radio4">
                    <el-radio label="1" size="large">提交自动通过</el-radio>
                    <el-radio label="2" size="large">管理员审核通过</el-radio>

                </el-radio-group>
            </el-form-item>


            <el-form-item label="订单自动取消时间：" label-width="140px">
            <el-input-number  v-model="num" class="mx-4" :min="1" :max="10" controls-position="right"
                @change="handleChange" />
                
               <span style="font-size: 12px;">单位：分，多少分钟以后未支付，订单自动关闭</span> 
            </el-form-item>
            <el-form-item label="积分使用门槛：" label-width="130px">
            <el-input-number v-model="num" class="mx-4" :min="1" :max="10" controls-position="right"
                @change="handleChange" />
                
               <span style="font-size: 12px;">积分满多少以后，才能使用积分消费</span> 
            </el-form-item>
            <el-form-item label="佣金提现手续费：" label-width="130px">
            <el-input-number v-model="num" class="mx-4" :min="1" :max="10" controls-position="right"
                @change="handleChange" />
                
               <span style="font-size: 12px;">分销商提现会自动扣除手续费</span> 
            </el-form-item>
            
        </el-form>
    </div>
</template>


<script setup>
import { reactive, ref } from 'vue'

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}


const value1 = ref(true)
const radio1 = ref('2')
const radio2 = ref('2')
const radio3 = ref('1')
const radio4 = ref('2')


const num = ref(1)
// const handleChange = (value: number) => {
//   console.log(value)
// }
</script>
<style>
.mx-4{
    width: 78px;
}
</style>