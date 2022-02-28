import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.less'
import { globalRegister } from './global'
import router from './router'
import request from './service'
import store from './store'

request.request({
  url: '/home/multidata',
  method: 'get',
  showLoading: false
})

const app = createApp(App)

//方式一
// globalRegister(app)

//方式二
// app.use(globalRegister)

//方式三
app.use({
  install: globalRegister
})

app.use(router)
app.use(store)
app.mount('#app')
