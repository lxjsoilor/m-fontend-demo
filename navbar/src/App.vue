<template>
  <div id="navbar-app">
    <div id="nav">
      <el-container>
        <el-header class="m-header">我是header项目</el-header>
        <el-aside class="m-aside" width="200px">
          <div>
            <router-link to="/app1">App1</router-link>
          </div>
          <div>
            <router-link to="/app2">App2</router-link>
          </div>
        </el-aside>
        <!-- <el-main class="m-container-main">
          <div>fdfd</div>
        </el-main> -->
      </el-container>
    </div>
    <router-view />
  </div>
</template>

<style>
#navbar-app {
}
#nav {
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.m-container-main {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding-left: 200px;
  padding-top: 60px;
  box-sizing: border-box;
  overflow-y: scroll;
}
.m-header {
  background-color: #262f40;
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
}
.m-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
  background-color: #354155;
  color: #ffffff !important;
  z-index: 100000;
}
</style>
