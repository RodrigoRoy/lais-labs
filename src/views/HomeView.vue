<template>
  <v-container fluid id="mainContainer">
    <v-parallax height="600" :src="require('../assets/background.jpg')" id="parallaxBackground">
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center my-8">
          <p class="text-uppercase text-center text-xs-h6 text-md-h5">Laboratorios Audiovisuales de Investigación en México</p>
          <p class="text-center text-h6 font-weight-light">
            El Laboratorio Audiovisual de Investigación Social (LAIS-Instituto Mora) convocó a espacios colectivos cuyo eje de trabajo es la investigación sobre lo audiovisual y con herramientas audiovisuales al Encuentro de Laboratorios Audiovisuales de Investigación en México, celebrado virtualmente los días 14 y 15 de noviembre de 2022. El objetivo fue conversar sobre las trayectorias, infraestructura, actividades, metodologías, problemáticas, retos y experiencias de cada espacio. A la convocatoria acudieron 16 espacios colectivos. Esta página ofrece un mapeo de tales espacios que incluye la ponencia en video, presentada durante el Encuentro, así como una breve presentación de cada espacio, vínculos a sus páginas web y redes sociales de ser el caso. Faltan varios espacios, por lo que esperamos que en el futuro este mapa se amplie. 
          </p>
        </v-col>
      </v-row>
    </v-parallax>

      <v-row align="start" justify="start">
        <v-col cols="6" sm="4" md="3" v-for="file in logos.files" :key="file.name">
          <router-link :to="{ name: 'info', query: { id: `${file.id}`}}">
            <v-img :src="file.altImg && $vuetify.theme.dark ? require(`../assets/${logos.path}/${file.altImg}`) : require(`../assets/${logos.path}/${file.img}`)" class="my-3" contain height="200" />
          </router-link>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',

  data: () => ({
    logos: {
      path: 'logos',
      files: [
        {img: 'LANMO.png', name: 'Laboratorio Nacional de Materiales Orales (LANMO)', id: 1, altImg: 'LANMO2.png'},
        {img: 'UCEMICH2.png', name: 'Laboratorio de Medios UCEMICH', id: 2, altImg: 'UCEMICH.png'},
        {img: 'Secundaria59.jpg', name: 'Laboratorio de Investigación Audiovisual, Secundaria Mixta 59', id: 3},
        {img: 'Lab_i-CreA.png', name: 'Laboratorio de Investigación-Creación Audiovisual (Lab i-CreA)', id: 4},
        {img: 'Ibero.png', name: 'Laboratorio Iberoamericano de Documental', id: 5, altImg: 'Ibero2.png'},
        {img: 'Invisible.png', name: 'Laboratorio de lo Invisible', id: 6},
        {img: 'LAbIIA.jpg', name: 'Laboratorio Interdisciplinario de Investigación Audiovisual', id: 7},
        {img: 'LaMA.png', name: 'Laboratorio de Medios Audiovisuales (LaMA)', id: 8},
        {img: 'InterNeta.png', name: 'Acervo Audiovisual InterNeta. Memoria de las y los Invisibles', id: 9, altImg: 'InterNeta2.png'},
        {img: 'Tlacuilo2.png', name: 'Tlacuilo Producción Comunitaria', id: 10, altImg: 'Tlacuilo.png'},
        {img: 'FazAFaz.png', name: 'Faz a Faz A.C.', id: 11},
        {img: 'LAIS.png', name: 'Laboratorio Audiovisual de Investigación Social (LAIS)', id: 12, altImg: 'LAIS2.png'},
        {img: 'LAV_UAM-I.png', name: 'Laboratorio de Antropología Visual', id: 13, altImg: 'LAV_UAM-I2.png'},
        {img: 'CIESAS.jpg', name: 'Laboratorio Audiovisual del CIESAS', id: 14},
        {img: 'LAVSAN.png', name: 'Laboratorio de Antropología Visual de El Colegio de San Luis (LAVSAN)', id: 15, altImg: 'LAVSAN2.png'},
      ]
    }
  }),

  // Acciones antes de renderizar vista
  mounted: function() {
    // recuperar tema usado por última vez
    this.$vuetify.theme.dark = localStorage.getItem('darkTheme') === 'true'
  },
}
</script>

<style>
div#parallaxBackground.v-parallax > div.v-parallax__content{
  /* background: rgb(93,101,140); */
  background: linear-gradient(180deg, rgba(93,101,140,0.8) 0%, rgba(0,0,0,0.8) 100%) !important;
}
</style>