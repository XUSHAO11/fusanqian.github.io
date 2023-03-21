<template>
    <div>


        <el-card class="box-card">
            <div class="card-header">
                <div>
                    <span style="color: #999;font-size: 14px;">设置</span> <i
                        style="margin: 0 8px;color: #dddee1; font-size: 12px;">/</i>
                    <span style="font-weight: 700;color: #495060;"> 端口管理</span>
                </div>
                <span style="font-size:12px ;">
                    共(1/3)
                    <el-button type="primary" style="font-size:12px ;">+ 新建账号</el-button>
                </span>

            </div>
            <el-card class="box-card" style="margin-top: 30px;" shadow="hover">

                <template #header>
                    <span>查询</span>

                </template>
                <div>
                    <el-row :gutter="20">
                        <el-col :span="6"> <el-input style="width: ;" size="large" v-model="input" placeholder="手机号" />
                        </el-col>
                        <el-col :span="6"> <el-input size="large" v-model="input1" placeholder="姓名" />
                        </el-col>
                        <el-col :span="6">
                            <el-button size="large" type="primary" style="font-size:12px ;">查询</el-button>
                        </el-col>
                    </el-row>

                </div>


            </el-card>
            <el-card class="box-card" style="margin-top: 30px;" shadow="hover">
                <template #header><span style="font-weight: 700;color: #495060;">账号列表</span> </template>

                <div>

                    <el-table :data="numlist" type="index" border style="width: 100%">
                        <el-table-column prop="index" label="#" width="80" align="center" />
                        <el-table-column prop="u_name" label="姓名" width="80" align="center" />
                        <el-table-column prop="u_photo" label="头像" width="150" align="center">

                            <template v-for="size in numlist">

                                <img :src="size.u_photo" style="background-size: cover;width: 50px;height: 50px;" />

                            </template>
                        </el-table-column>
                        <el-table-column prop="u_phone" label="手机" width="180" align="center" />
                        <el-table-column prop="u_no" label="账号" width="100" align="center" />
                        <el-table-column prop="group_title" label="权限" width="100" align="center" />
                        <el-table-column prop="group_id" label="操作" align="center" />



                     
                    </el-table>

                    
                </div>
            </el-card>
        </el-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Axios from 'axios';
// system/portmanage
const input = ref('')
const input1 = ref('')

let numlist = ref([])
Axios.post('/system/portmanage').then((res) => {
    numlist.value = res.data.m.data
    numlist.value.forEach((item, index) => {
        item['index'] = index + 1
    })
})




// console.log(pageSize3);
</script>

<style  scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}
</style>