<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2024-05-31 18:01:20
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2024-06-01 16:54:27
 * @FilePath: /college-life/src/pages/index/index.vue
 * @Description: 
-->
<template>
  <view class="content"> 首页 </view>
</template>

<script setup lang="ts">
// 设置一个定时器，延迟6秒后执行
const timeout = setTimeout(() => {
  // 清除定时器
  clearTimeout(timeout);

  uni.setNavigationBarTitle({
    title: "校园生活首页",
  });
  uni.setNavigationBarColor({
    frontColor: "#ffffff",
    backgroundColor: "#000000",
  });
  uni.setTabBarStyle({
    color: "#ffffff",
    selectedColor: "#007AFF",
    backgroundColor: "#000000",
    borderStyle: "black",
  });
  // uni.hideTabBar()
}, 6000);
</script>

<style lang="less"></style>
