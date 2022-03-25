import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'
import router from './router/index.js'
import axios from './axios/index.js'
import store from './store/index.js'

import IconTemplate from './modules/iconTemplate.js'
import Message from './modules/message.js'

// コンポーネントの読み込み
import CustomButton from './components/CustomButton.vue'
import MenuOderList from './components/MenuOderList.vue'
import Header from './components/Header.vue'
import FoodInformation from './components/FoodInformation.vue'
import Footer from './components/Footer.vue'

// コンポーネントの取込
Vue.component('CustomButton', CustomButton)
Vue.component('MenuOderList', MenuOderList)
Vue.component('Header', Header)
Vue.component('FoodInformation', FoodInformation)
Vue.component('Footer', Footer)


Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.prototype.$axios = axios
Vue.prototype.$message = Message
Vue.prototype.$iconTemplate = IconTemplate

router.afterEach(async (to, from) => await axios.post('/api/transition', { toName: to.name, fromName: from.name }))

new Vue({
  router,
  store,
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi'
    }
  }),
  render: h => h(App)
}).$mount('#app')
