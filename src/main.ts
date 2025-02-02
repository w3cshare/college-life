/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2024-05-31 18:01:20
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2024-06-01 01:09:52
 * @FilePath: /college-life/src/main.ts
 * @Description: 
 */
import { createSSRApp } from "vue";
import { createI18n } from 'vue-i18n'
import App from "./App.vue";
import messages from '@/locale/index'
import uViewPlus from '@/uni_modules/uview-plus'

const i18nConfig = {
  locale: uni.getLocale(),    
  messages
}

const i18n = createI18n(i18nConfig)

export function createApp() {
  const app = createSSRApp(App);
  app.use(i18n)

  app.use(uViewPlus)

  return {
    app,
  };
}
