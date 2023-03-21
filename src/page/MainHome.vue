<template>
    <el-row>
        <el-col :span="16"><el-card shadow="hover">
                <template #header>
                    <div class="card-header">
                        <span>首页</span>
                        <span>
                            <el-button size="small">绑定小程序</el-button>
                            <el-button type="primary" size="small">访问手机端商城</el-button>
                        </span>

                    </div>
                </template>

                <el-row class="dni">
                    <el-col :span="6">
                        <div style="background-color:rgba(39, 169, 227);border-radius: 3px;">
                            <p>746</p>
                            <div class="nio">订单总量</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div style="background-color:rgba(40, 183, 121);border-radius: 3px;">
                            <p> 0</p>
                            <div class="nio">今日订单</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div style="background-color:rgba(155, 185, 72);border-radius: 3px;">
                            <p>2130</p>
                            <div class="nio">用户总量</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div style="background-color:rgba(231, 25, 27);border-radius: 3px;">
                            <p> 0</p>
                            <div class="nio">会员总量</div>
                        </div>
                    </el-col>
                </el-row>



            </el-card>
            <echart></echart>
        
        </el-col>
        <el-col :span="8">
            <right></right>
        </el-col>
    </el-row>
</template>
<script setup>
import echart from '@/echart/LineEchart.vue'
import right from '@/components/Right.vue';
</script>
<style>
.el-card__body{
    padding:10px !important;
}
.dni>div {
    text-align: right;
    flex: 1;
    height: 77px;
    border-radius: 3px;
    font-size: 34px;
    color: #ffffff;
    font-weight: 400px;
   
    padding: 8px;
   
}

.nio {
    font-size: 16px;
    color: #fff;
    text-align: right;
    /* padding-right: 10px; */
}

.el-card__header {
    padding: 5px !important;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

</style>
  