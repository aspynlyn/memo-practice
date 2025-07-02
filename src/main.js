import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// index.js를 import함 폴더 아래의 index파일은 경로 생략 가능 함 근데 적어놔도 기억 못하겠지

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
