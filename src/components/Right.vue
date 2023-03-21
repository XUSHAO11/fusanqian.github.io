<template>
    <div style="margin-left: 10px;">
        <el-card class="box-card" shadow="hover">
            <template #header style="height: 69px;">
                <div class="card-header">
                    <span>版本信息</span>

                </div>

            </template>
            <div>
                © 全民分销系统-小程序版 <br>

                <span> 已购用户，享受免费升级</span>
            </div>
        </el-card>

        <el-card class="box-card" shadow="hover" style="margin-top: 20px;">
            <template #header>
                <div class="card-header">
                    <span>公告</span>

                </div>

            </template>


            <el-table :data="tableData">
                     <el-table-column prop="date" label="Address" >
                     </el-table-column>
               
                <el-table-column prop="name" label="Name"  />
                <el-table-column prop="address" label="Date" />
            </el-table>

        </el-card>

    </div>
</template>

<script setup>
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189',
        
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189',
        
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189',
        
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189',
        
    },
   
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189',
        
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189',
        
    },
   
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189',
        
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189',
        
    },
   
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189',
        
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189',
        
    },
   
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189',
        
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189',
        
    },
   
   
]
</script>

<style lang="scss" scoped></style>