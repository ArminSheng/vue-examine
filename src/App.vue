<template>
  <div id="wrapper">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="container">
          <el-menu-item index="0">
            计划板 <i class="el-icon-time"></i>
          </el-menu-item>
        <router-link to="/home">
          <el-menu-item index="1">首页</el-menu-item>
        </router-link>
        <router-link to="/time-entries">
          <el-menu-item index="2">计划列表</el-menu-item>
        </router-link>
      </div>
    </el-menu>

    <div class="container" style="margin-top: 2em;">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">
          <sidebar></sidebar>
        </div></el-col>
        <el-col :span="12">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'

  export default {
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        // console.log(key, keyPath)
      }
    },
    components: { 'sidebar': Sidebar }
  }
</script>