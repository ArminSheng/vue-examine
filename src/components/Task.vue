<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <div>
          <el-date-picker
            type="date"
            v-model="date"
            placeholder="Date"
            format="yyyy-MM-dd"
          ></el-date-picker>
        </div>
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <el-input
          type="number"
          v-model="totalTime"
          placeholder="Hours"
        ></el-input>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <el-input
          v-model="comment"
          placeholder="Comment"
        ></el-input>
      </div>
    </div>
    <el-button type="primary" @click="save()">保存</el-button>
    <router-link to="/time-entries"><el-button type="danger">取消</el-button></router-link>
    <hr>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    data () {
      return {
        date: '',
        totalTime: '',
        comment: ''
      }
    },
    methods: {
      save () {
        const task = {
          name: 'Armin',
          avatar: 'https://avatars0.githubusercontent.com/u/10386102?v=3&s=460',
          date: this.date,
          totalTime: this.totalTime,
          comment: this.comment
        }

        this.$store.dispatch('save', task)
        this.$store.dispatch('addTotalTime', this.totalTime)
        this.$router.go(-1)
      }
    }
  }
</script>