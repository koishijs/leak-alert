<template>
  <div class="banner" v-show="showBanner">
    <a href="https://koishi.chat/manual/usage/platform.html#控制台登录" target="_blank">你的服务器已泄露，请更新密钥并安装 auth 插件</a>
    <span class="close-btn" @click="closeBanner">X</span>
  </div>
</template>

<style scoped>
.banner {
  background-color: red;
  color: white;
  padding: 10px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.close-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0 8px;
  font-weight: bold;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      showBanner: true,
    }
  },
  methods: {
    closeBanner() {
      this.showBanner = false
    }
  }
}
</script>
