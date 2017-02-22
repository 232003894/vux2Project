require('es6-promise').polyfill()
import 'assets/css.vue'
import {
  pages
}
from './pages.js'
// import * as _api from '../libs/api'
import * as _api from 'h5p.js'
if (!window.$api) {
  window.$api = _api
  $api.addPage(pages)
}
import common from './common'
if (!window.common) {
  window.common = common
}
import vueConfig from './vue.config'
import httpConfig from './http.config'

import ToastPlugin from '../plugin/toast'
import AlertPlugin from '../plugin/alert'
import ConfirmPlugin from '../plugin/confirm'
import LoadingPlugin from '../plugin/loading'
import LoginPlugin from '../plugin/login'
import PowerPlugin from '../plugin/power'

export default function (Vue) {
  vueConfig(Vue, window.$api)
  httpConfig(Vue, window.$api)
  // console.log('初始化')
  Vue.use(ToastPlugin, window.$api)
  Vue.use(AlertPlugin, window.$api)
  Vue.use(ConfirmPlugin, window.$api)
  Vue.use(LoadingPlugin, window.$api)
  Vue.use(LoginPlugin, window.$api)
  Vue.use(PowerPlugin, window.$api)

  // 注册安卓按键
  $api.mounted(() => {
    $api.androidKeys()
  })
}
