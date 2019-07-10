<template>
  <div class="home" style="height:100%">
    <el-container class="content">
      <el-header></el-header>
      <el-container>
        <el-aside width="200px"
          ><el-row style="height:100%;background:#545c64">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>LayOut布局</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title"
                      >分组一</template
                    >
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title"
                      >选项4</template
                    >
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row></el-aside
        >
        <el-main><router-view :dataMethod="dataMethod"></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      name: "张三",
      dataMethod: 1
    };
  },
  mounted() {
    console.log(this.$httpUrl.httpurl);
    this.$httpUrl.gethttp("111", "http://www.nai").then(function(data) {
      console.log(data);
    });
  },
  methods: {
    handleClose() {},
    handleOpen() {}
  }
};
</script>
<style scoped>
/* .home {
  height: 100%;
} */
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 80px;
  background: #545c64;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  line-height: 200px;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.content {
  height: 100%;
}
</style>

