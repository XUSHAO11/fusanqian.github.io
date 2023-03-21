<template>
  <div style="z-index: 99;">


    <el-col>
      <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff" @open="handleOpen" @close="handleClose">
        <div style="text-align: center; padding  : 20px;">
          <el-avatar :size="50" :src="'http://static.iub88.com/68900cn/mall20201268/1646492815585eaY5n5m.jpg'" />
          <!-- http://static.iub88.com/68900cn/mall20201268/1646492815585eaY5n5m.jpg -->
          <div class="mb-2" style="font-size: 16px;color: #ffffff;">赋三千旅游达人</div>
        </div>
        <router-link to="/menu/generalSetting">
          <el-menu-item index="1">
            <el-icon><icon-menu /></el-icon>
            <span>首页</span>
          </el-menu-item>
        </router-link>
        
       <ul>
          <template v-for="item in menulist">
            <template v-for="value in routes">
              <li v-if="value.name == item.name">
                <el-sub-menu :index="item.id + ''">
                  <template #title>
                    <el-icon>
                      <Stamp />
                    </el-icon>
                    <span>{{ item.title }}</span>
                  </template>
                  <template v-for="i in item.children" :key="i.id">
                    <template v-for="j in value.children" :key="value.id">
              <li v-if="j.name == i.name">
                <router-link :to="{ name: j.name }">
                  <el-menu-item :index="i.id + ''">{{ i.title }}</el-menu-item>
                </router-link>
              </li>
            </template>
          </template>
          </el-sub-menu>
          </li>
          </template>
          </template>
        </ul>
      </el-menu>
    </el-col>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
// import Axios from 'axios';
import { useRouter } from 'vue-router'
import { useMenuStore } from '../stores/counter';
import {
  Postcard,
  Menu as IconMenu,
  Location,
  Comment,
  Stamp,
} from '@element-plus/icons-vue'
const routes = useRouter().options.routes;

var menuStore = useMenuStore();
var menulist = menuStore.menulist;
onMounted(() => {
    console.log('00000000000000000',menulist);
    menuStore.loadMenu();
});
</script>

<style scoped>


.el-col{
  min-height: 100vh;
  height: 100%;
  width: 200px;
  padding:0 20px 0 20px;
  background-color: rgba(84,92,100);
}
</style>