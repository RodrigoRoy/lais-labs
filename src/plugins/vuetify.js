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
            // TO DO: Better color palette
            light: {
                primary: '#009688',
                secondary: '#00897B',
                accent: '#4DD0E1',
            },
            dark: {
                primary: '#673AB7',
                secondary: '#512DA8',
                accent: '2196F3',
            }
        },
    },
});
