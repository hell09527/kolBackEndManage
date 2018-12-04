<template>
  <div
  >
    <header >
      <el-menu theme="dark" text-color="#fff" background-color="#324157" mode="horizontal">
        <el-menu-item class="header-navicon" index="1">
          <el-button type="text">
            <i class="md-icon">menu</i>
          </el-button>
        </el-menu-item>
        <span class="header-title"></span>
        <el-submenu class="header-menu" index="3">
          <template slot="title">Workspace</template>
          <el-menu-item index="4-1">item one</el-menu-item>
          <el-menu-item index="4-2">item two</el-menu-item>
          <el-menu-item index="4-3">item three</el-menu-item>
        </el-submenu>
      </el-menu>
    </header>
  </div>

</template>

<script>
    export default {
        name: 'xxx',
        data(){
            return {}
        },
        mounted(){
        },
        methods: {},
        components: {}
    }
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    color: #fff;
  }
  .el-menu--horizontal{
    position: relative;
    .header-menu{
      position: absolute;
      top: 0;
      right: 0;
    }

  }

</style>
