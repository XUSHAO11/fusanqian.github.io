<template>
  <div class="common-layout">
    <el-container>
      <!-- 侧栏 -->
      <Sidebar></Sidebar>
      <el-container>
        <el-header style="position: absolute;top: 0;right: 0;width: 100%;padding: 0 ;">

          <!-- 顶栏 -->
          <el-row>
            <el-col :span="24">
              <div>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false">
                  <div class="flex-grow"></div>
                  <div>
                    <el-sub-menu>
                      <template #title>
                        <el-avatar :size="32"
                          :src="'http://static.iub88.com/68900cn/mall20201268/1646492815585eaY5n5m.jpg'"
                          style="margin-right: 5px;" />
                        管理员</template>
                      <router-link to="/menu/geren">
                        <el-menu-item index="1">个人资料</el-menu-item>
                      </router-link>
                      <el-menu-item index="2">修改密码</el-menu-item>
                      <el-menu-item index="3">退出系统</el-menu-item>


                    </el-sub-menu>
                  </div>
                </el-menu>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <div>
          <!-- 主题 -->
          <el-main style="margin-top: 60px">
            <el-card shadow="never">
              <router-view />
            </el-card>
          </el-main>
        </div>


      </el-container>
    </el-container>


  </div>
</template>
  
<script setup>
import Sidebar from './Sidebar.vue';


import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();
const router = useRouter();

onMounted(() => {
  if (route.fullPath == "/menu") {
    router.push({ name: 'generalSetting' });
  }
});
</script>
<style>
.hover:hover {
  margin-bottom: 2px;

  border-bottom: 2px solid #409eff;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.flex-grow {
  flex-grow: 1;
}

.el-menu {
  border-right: none;
}
</style>
  