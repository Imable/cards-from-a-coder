// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueResizeText from 'vue-resize-text'
import store from './services/vuex'

export default function (Vue, { appOptions }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    Vue.use(VueResizeText)
    appOptions.store = store
}
