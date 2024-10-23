import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
//Vuetify//
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import {createVuetify} from 'vuetify'
import {createPinia} from "pinia";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})
const pinia=createPinia()
createApp(App).use(vuetify).use(pinia).mount('#app')
