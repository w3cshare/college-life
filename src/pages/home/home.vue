<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2024-05-31 18:01:20
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2024-06-01 23:01:05
 * @FilePath: /college-life/src/pages/index/index.vue
 * @Description: 
-->
<template>
  <view class="content"> 首页 </view>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { nextTick } from "vue";

onLoad(() => {
  nextTick(() => {
    uni.showTabBar();
    uni.setNavigationBarTitle({
      title: "校园生活首页",
    });
    uni.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: "#000000",
    });
    uni.setTabBarStyle({
      color: "#ffffff",
      selectedColor: "#007aff",
      backgroundColor: "#000000",
      borderStyle: "black",
    });
  });
});
</script>

<style lang="scss"></style>
