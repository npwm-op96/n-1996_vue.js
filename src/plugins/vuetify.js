// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  iconfont: 'mdi' || 'md' || 'mdi' || 'fa' || 'fa4'
})

const opts = {}

export default new Vuetify(opts)