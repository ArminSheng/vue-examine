<template>
  <el-card>
    <div slot="header">
      已有时长
    </div>
    <div>
      <h2>{{ time }} 小时</h2>
    </div>
  </el-card>
</template>

<script>
  export default {
    computed: {
      time () {
        return this.$store.state.totalTime
      }
    }
  }
</script>