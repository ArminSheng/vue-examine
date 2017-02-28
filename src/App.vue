<template>
  <div id="wrapper">
      <!-- <nav class="navbar navbar-default">
            <div class="container">
              <a class="navbar-brand" href="#">
                <i class="glyphicon glyphicon-time"></i>
                计划板
              </a>
              <ul class="nav navbar-nav">
                <li><router-link to="/home">首页</router-link></li>
                <li><router-link to="/time-entries">计划列表</router-link></li>
              </ul>
            </div>
          </nav>
          <div class="container">
              <div class="col-sm-3">

              </div>
              <div class="col-sm-9">
                  <router-view></router-view>
              </div>
          </div> -->
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="container">
        <router-link to="/">
          <el-menu-item index="1">
            计划板 <i class="el-icon-time"></i>
          </el-menu-item>
        </router-link>
        <router-link to="/home"><el-menu-item index="2">首页</el-menu-item></router-link>
        <router-link to="/time-entries"><el-menu-item index="3">计划列表</el-menu-item></router-link>
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
        console.log(key, keyPath)
      }
    },
    components: { 'sidebar': Sidebar }
  }
</script>