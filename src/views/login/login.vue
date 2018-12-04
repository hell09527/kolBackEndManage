<template>
<div class="centre">
  <h2>后台管理系统</h2>
<input  placeholder="请输入手机号" v-model="username" >
  <br>
 <input  placeholder="请输入密码" type="password" v-model="password" class="pass" >
  <br>
    <el-button type="primary"  class="ed"  @click="login()">登录</el-button>
</div>
</template>
<script>
 import {authenicator,getUser} from '../../axios/login/index'
    export default {
        data(){
            return {
              username: '',
              password: '',
            }
        },
        mounted(){
        },
      methods: {
        login(){
          if (this.username && this.password) {
              this.pubilc();
          } else {
            this.$message('请填写完整')
          }
        },
        pubilc(){
          let jse = new this.$jsEncrypt.JSEncrypt();
          jse.setPublicKey(`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtrLTcs4emWc/grh+Bbuv
dX2jxionGtSg6m4gy1ybTrHOHMmtuETgbtKhtyGkEcES8XOdlIBRQiu5qP7yAaaQ
JidYMspSe23A+oc66RJfKCE8Cg0DIrG8DOfY+YGp+fehr+TyoYsDjgNrca9Pi3n4
LZ4AZabyuT/2F0Cn5IHTWbI+1Bcoy4uRBUmmAmMSJC7+3UMLqb/RM1BTyRAEZv6P
AFyOOp8MR3+Zs3B+9gpi3z32bZpH9FpBX0Zb0sMnheF5KlLQ3Fp1pKOMmNXJCAsz
q4hmX6t1SuTbXGej9nLDwMRXETAkYmQAAROqkq5pPia9pGmRx+Q6J/cjhzsunV2a
qwIDAQAB
-----END PUBLIC KEY-----`);
          let decrypted =  jse.encrypt(this.password);
          // 设置需要加密的字符串
          authenicator({
            USERNAME:this.username,
            AUTHENTICATOR_TOKEN:decrypted
          }).then( (res)=>{
            if(res.code ===200){
              let data = res.data;
              console.log(data);
              this.$store.dispatch('LoginByToken', data.token).then(()=>{
                this.$router.push('/table');
              })
            }else {
                this.$message(res.message);
            }
          })
        },
      },
        components: {}
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

  input {

    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 1;
    outline: 0;
    padding: 0 15px;
  }

  .centre{
    margin-top: 220px;
    text-align: center;
    .ed{
      width: 240px;
    }
    .pass{
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
</style>
