// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import { createVuetify } from 'vuetify'
import { mdi } from 'vuetify/lib/iconsets/mdi'
import { aliases, fa } from 'vuetify/lib/iconsets/fa'




export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    }  
  },
  theme: {
    defaultTheme: 'light',
    background: 'white'
  }
})
