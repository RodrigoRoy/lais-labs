/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#673AB7',
          secondary: '#512DA8',
          accent: '2196F3',
        },
      },
      dark: {
        colors: {
          primary: '#009688',
          secondary: '#00897B',
          accent: '#4DD0E1',
          // error: '#FFF300',
          // info: '#FFF300',
          // success: '#FFF300',
          // warning: '#FFF300',
          // base: "#FFF300",
          // lighten5: "#FFF300",
          // lighten4: "#FFF300",
          // lighten3: "#FFF300",
          // lighten2: "#FFF300",
          // lighten1: "#FFF300",
          // darken1: "#FFF300",
          // darken2: "#FFF300",
          // darken3: "#FFF300",
          // darken4: "#FFF300",
        }
      }
    },
  },
})
