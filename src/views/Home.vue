<template>
  <div class="home" style="height:100%">
    <div style="height:50px;background:#545c64"></div>
    <div
      style="height:100%;position:relative;top:-50px;padding-top:50px;box-sizing:border-box;overflow:hidden;width:100%"
    >
      <div style="width:200px;height:100%;float:left;">
        <el-row style="height:100%;background:#545c64">
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
                  <span>导航一</span>
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
        </el-row>
      </div>
      <div style="overflow:hidden;height:100%;position:relative">
        <router-view :dataMethod="dataMethod"></router-view>
      </div>
    </div>

    <!--     
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      v-if="this.$route.meta.status"
    />51452
    {{ dataMethod }}-{{ name }}{{ this.$route.meta.status }}51525{{
      this.$httpUrl
    }} -->
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
  methods:{
    handleClose(){

    },
    handleOpen(){}
  }
};
</script>
<style scoped>
.home {
  height: 100%;
}
</style>

