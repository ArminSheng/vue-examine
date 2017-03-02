<template>
  <div>
    <router-link
      v-if="$route.path !== '/time-entries/create-task'"
      to="/time-entries/create-task">
      <el-button type="primary">创建</el-button>
    </router-link>

    <div v-if="$route.path === '/time-entries/create-task'">
      <h3>创建</h3>
    </div>

    <hr>

    <router-view></router-view>

    <div class="time-entries">
      <p v-if="!plans.length"><strong>还没有任何计划</strong></p>

      <div class="list-group">
        <!-- <a class="list-group-item" v-for="(plan,index) in plans"> -->
        <el-card v-for="(plan,index) in plans" class="box-item">
          <el-row>
            <el-col :span="4">
                <img :src="plan.avatar" class="avatar img-circle img-responsive" />
                <p class="text-center">
                  <strong>
                    {{ plan.name }}
                  </strong>
                </p>
            </el-col>

            <el-col :span="6">
              <div class="text-center time-block">
                <h3 class="list-group-item-text total-time">
                  <i class="glyphicon glyphicon-time"></i>
                  <span style="line-height: 28px;">{{ plan.totalTime }}</span>
                </h3>
                <el-tag type="primary" >
                  <i class="el-icon-date"></i>
                  {{ dateFilter(plan.date) }}
                </el-tag>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="comment-section">
                <p>{{ plan.comment }}</p>
              </div>
            </el-col>

            <el-col :span="2">
              </button>
              <i class="el-icon-circle-close delete-button" @click="deletePlan(index)"></i>
            </el-col>

            </el-row>
        <!-- </a> -->
        </el-card>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TimeEntry',
    computed: {
      plans () {
        // 从store中取出数据
        return this.$store.state.list
      }
    },
    methods: {
      deletePlan (idx) {
        // 稍后再来说这里的方法
        // 减去总时间
        this.$store.dispatch('decTotalTime', this.plans[idx].totalTime)
        // 删除该计划
        this.$store.dispatch('deletePlan', idx)
        // Notify
        this.$notify({
          title: '已删除',
          message: '删除任务',
          type: 'success'
        })
      },
      dateFilter (date) {
        if (date instanceof Date) {
          date = date.toLocaleDateString().replace(/\//g, '-')
        }
        return date
      }
    }
  }
</script>

<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
  .delete-button {
    font-size: 1.5em;
    color: red;
    cursor: pointer;
  }
  .box-item {
    margin-bottom: 1em;
  }
</style>