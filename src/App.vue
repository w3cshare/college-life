<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2024-05-31 18:01:20
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2024-05-31 21:10:21
 * @FilePath: /college-life/src/App.vue
 * @Description: 编写一个uni-app项目，在启动时延迟6秒后关闭启动页面。
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");

  // 设置一个定时器，延迟6秒后执行
  const timeout = setTimeout(() => {
    // 清除定时器
    clearTimeout(timeout);

    // 关闭启动页面
    plus.navigator.closeSplashscreen();
  }, 6000);
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
