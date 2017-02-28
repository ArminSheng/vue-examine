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
        <a class="list-group-item" v-for="(plan,index) in plans">
          <!-- <div class="row"> -->
            <!-- <div class="col-sm-2 user-details"> -->
          <el-row>
            <el-col :span="4">
                <img :src="plan.avatar" class="avatar img-circle img-responsive" />
                <p class="text-center">
                  <strong>
                    {{ plan.name }}
                  </strong>
                </p>
            </el-col>
            <!-- </div> -->

            <!-- <div class="col-sm-2 text-center time-block"> -->
            <el-col :span="6">
              <div class="text-center time-block">
                <h3 class="list-group-item-text total-time">
                  <i class="glyphicon glyphicon-time"></i>
                  {{ plan.totalTime }}
                </h3>
                <p class="label label-primary text-center">
                  <i class="glyphicon glyphicon-calendar"></i>
                  {{ plan.date }}
                </p>
              </div>
            </el-col>
            <!-- </div> -->

            <!-- <div class="col-sm-7 comment-section"> -->
            <el-col :span="12">
              <div class="comment-section">
                <p>{{ plan.comment }}</p>
              </div>
            </el-col>
            <!-- </div> -->

            <el-col :span="2">
            <!-- <div class="col-sm-1"> -->
              <!-- <button
                class="btn btn-xs btn-danger delete-button"
                @click="deletePlan(index)">
              </button> -->
              <i class="el-icon-circle-close delete-button" @click="deletePlan(index)"></i>
            </el-col>
            <!-- </div> -->

            </el-row>
          <!-- </div> -->
        </a>

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
          title: '删除',
          message: '确认删除？',
          type: 'warning'
        })
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
</style>