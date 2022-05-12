/*
 * @Author: zhangchao
 * @Date: 2022-05-12 11:59:50
 * @LastEditors: zhangchao
 * @LastEditTime: 2022-05-12 12:41:59
 * @Description: file content
 */
import { VueConstructor } from 'vue'
// import * as ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/display.css'
import 'tdesign-vue/es/style/index.css'

import { Icon } from 'tdesign-icons-vue'
export default (app: VueConstructor) => {
  //   app.use(ElementUI)
  app.component('Icon', Icon)
}
