import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import './assets/styles.css'

const vuetify = createVuetify({
    components,
    directives,
    options: {
        customProperties: true,
    },
    icons: {
        defaultSet: 'mdi',
    },
    theme: {
        defaultTheme: 'pastelValentine',
        themes: {
            pastelValentine: {
                dark: false,
                colors: {
                    background: '#FFF6F9',
                    surface: '#FFFFFF',

                    primary: '#F4A5AE',
                    secondary: '#A3C9F9',
                    accent: '#FFD6E8',
                    error: '#FFB3C6',
                    info: '#9DD9D2',
                    success: '#B7E4C7',
                    warning: '#FFE599',

                    "on-primary": '#4A4A4A',
                    "on-background": '#5C5C5C',
                    "on-surface": '#444444',
                },
                variables: {
                    borderRadius: '12px',
                    mediumEmphasisOpacity: 0.72,
                    lowEmphasisOpacity: 0.38,
                    overlayOpacity: 0.08,
                },
            },
        },
    },
});

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(createPinia())
app.mount('#app')
