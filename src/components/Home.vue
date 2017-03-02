<template>
  <el-card>
    <h1>任务追踪</h1>
      <router-link to="/time-entries">
        <el-button type="primary" @click="doSwitchTab()">创建一个任务</el-button>
      </router-link>
  </el-card>
</template>

<script>
    export default {
      name: 'home',
      methods: {
        doSwitchTab () {
          this.$root.$data.activeIndex = '2'
        }
      }
    }
</script>
