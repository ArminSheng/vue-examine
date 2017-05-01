<template>
  <div>
    <el-card>
      <h1>任务追踪</h1>
        <router-link to="/time-entries">
          <el-button type="primary" @click="doSwitchTab()">创建一个任务</el-button>
        </router-link>
        <div style="margin: 10px;">
          <mt-cell title="cell" is-link value="tile" to="/time-entries"></mt-cell>
        </div>
        <label for="file" class="mint-button mint-button--default mint-button--normal">
          上传
          <input type="file" id="file" style="display: none;" @change="onFile">
        </label>
    </el-card>
    <img :src="previewImg" class="preview-img" ref="preview">
    <router-view></router-view>
  </div>
</template>

<script>
  import {Cell} from 'mint-ui'
  export default {
    name: 'home',
    components: {
      Cell
    },
    data () {
      return {
        photoToCut: null,
        preview: null
      }
    },
    computed: {
      photoOptions () {
        return {
          photoToCut: this.photoToCut,
          ratio: 1,
          handler: this.send
        }
      },
      previewImg () {
        return this.$store.state.previewImg
      }
    },
    methods: {
      doSwitchTab () {
        this.$root.$data.activeIndex = '2'
      },
      onFile (e) {
        let file = e.target.files[0]
        this.photoToCut = window.URL.createObjectURL(file)
        this.$store.dispatch('addImgCrop', this.photoOptions)

        this.$router.push({
          path: '/cutPhoto'
        })
      },
      send: function (file) {
        // window.open(file)
        // this.preview = file
        window.alert(document.querySelector('.preview-img'))
        let img = document.querySelector('.preview-img')
        img.src = file
      }
    }
  }
</script>

<style>
  .preview-img {
    width: 100%;
  }
</style>
