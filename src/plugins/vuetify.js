import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa', // Font Awesome 5
    },
    theme: {
        themes: {
            // Based on Jordan Prindle Designs - Color Palettes by Mood
            // light: {
            //     primary: '#BCAFBD',
            //     secondary: '#EFE4E6',
            //     accent: '#AA706A',
            // },
            // dark: {
            //     primary: '#5B3547',
            //     secondary: '#8B677C',
            //     accent: '#EFEADD',
            // }
            light: {
                primary: '#FFEB3B',
                secondary: '#FFF176',
                accent: '#757575',
            },
            dark: {
                primary: '#3C4145',
                secondary: '#696D70',
                accent: '#F2E247',
            }
        },
    },
});
