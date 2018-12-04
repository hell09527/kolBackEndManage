<template>
  <div>
    <heder></heder>
    <broad></broad>
    <div class="content">
      <form enctype="multipart/form-data" class="formData" id="formData">

        <el-button slot="trigger" size="small" type="primary" class="fileButton">选取文件</el-button>

        <input type="file" @change="uploadFile" ref="upload" class="fileClass"/>

      </form>


      <div>
        <div class="crumbs">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
            <el-breadcrumb-item>图片上传</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="content-title">支持拖拽</div>
        <div class="plugins-tips">
        </div>
        <el-upload
          class="upload-demo"
          action="http://api.dev01.ushopal.com/api/backend/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-error="errorof"
          :on-success="successof"
          :file-list="fileList2"
          drag
          list-type="picture">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <div class="content-title">支持裁剪</div>
        <div class="plugins-tips">
        </div>
        <img class="pre-img" :src="src" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import heder from '@/components/heder'
  import broad from '@/components/broadside'
  import VueCoreImageUpload  from 'vue-core-image-upload';
  import {Supload} from '../axios/ajax/ajax'

  const TOKEN = sessionStorage.getItem('TOKEN');
  export default {
    data: function () {
      return {
        src: '',
        dialogImageUrl: '',
        dialogVisible: false,
        fileList2: [
        ],
      }
    },
    created(){
      'http://api.dev01.ushopal.com/api/backend/upload'
    },
    components: {
      heder,
      broad
    },
    methods: {
      handleRemove(file, fileList) {
          console.log(file)
      },
      handlePreview(file) {
        console.log(file);

    },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      successof(response, file, fileList){
        console.log(response, file, fileList)
      },
      errorof(err, file, fileList){
          console.log(err);
      },
      uploadExchangeRate (val) {
        Supload(val).then((res) => {
          if (res.code==200) {
            this.$store.state.picture=res.data
            this.$message({
              message: '上传成功',
              type: 'success'
            })

          } else {
            this.$message({
              message: res.message,
              type: 'error'
            })
          }
        }).catch((res) => {
          this.listLoading = false;
          this.$message({
            message: res.message,
            type: 'error'
          });
        });
      },
      uploadFile(e){
        let DOC = e.target.files[0],
          fileData = document.querySelector('#formData'),
          form = new FormData;

        let apikey = 'DEVTokenFORApiKey2017';
        let tempInput = document.createElement("input");
        tempInput.type = "file";
        tempInput.setAttribute('class', 'fileClass');
        tempInput.addEventListener('change', this.uploadFile);
        fileData.removeChild(fileData.lastChild);
        form.append("file",DOC);
        form.append("apikey",apikey);
        form.append("token",TOKEN);
        this.uploadExchangeRate(form);
        fileData.appendChild(tempInput);
      },
    }
  }
</script>
<style lang="scss" scoped>
  .content {
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 210px;
    right: 0;
    top: 70px;
    bottom: 0;
    width: auto;
    padding: 40px;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  .content-title {
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
  }
  .pre-img {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
  }
  .formData {
    position: relative;
    padding: 15px 0;
    overflow: hidden;
  .fileClass {
    position: relative;
    padding: 2px;
    z-index: 100;
    width: 66px;
    height: 28px;
    cursor: pointer;
    opacity: 0;
  }
  .fileButton {
    position: absolute;
    left: 0;
    z-index: 99;
    cursor: pointer;
  }
  .fileOul {
  li {
    margin: 5px 0;
    color: #48576a;
    display: block;
    overflow: hidden;
    padding-left: 4px;
    line-height: 1.8;
    text-overflow: ellipsis;
    white-space: nowrap;
  a {
    cursor: pointer;
    font-size: 14px;
    vertical-align: bottom;
    display: inline-block;
  }
  }
  }
  }
</style>
