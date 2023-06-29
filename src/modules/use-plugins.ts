/*
 * @Author: zhangchao
 * @Date: 2023-06-28 21:36:49
 * @LastEditors: zhangchao
 * @LastEditTime: 2023-06-29 17:37:03
 * @Description: file content
 */
import { VueConstructor } from 'vue'
import TDesign from 'tdesign-vue'

import 'tdesign-vue/es/style/index.css'

export default (app: VueConstructor) => {
  //   app.use(ElementUI)
  app.use(TDesign)
}
