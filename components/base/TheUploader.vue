<template>
  <div class="the-uploader">
    <el-upload
      ref="upload"
      action="/"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">{{ buttonTitle }}</el-button>
      <div class="el-upload__tip" slot="tip">{{ message }}</div>
    </el-upload>
  </div>
</template>

<script>
  export default {
    name: "TheUploader",
    props: {
      message: {
        type: String,
        default: 'Do not forget to attach the terms of reference, otherwise I will not be able to estimate the time and cost of the project'
      },
      buttonTitle: {
        type: String,
        default: 'Select file'
      }
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      }
    }
  }
</script>

<style scoped>

</style>
