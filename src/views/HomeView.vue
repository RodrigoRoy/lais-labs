<template>
  <div id="mainContainer">
    <v-container fluid id="mainSubContainer">
      <v-row align="start" justify="center" class="mx-8 mb-6">
        <v-col cols="12">
          <h1 class="text-uppercase text-center text-xs-h6 text-md-h5 my-4 text-bold" color="accent">Mapeo de Laboratorios Audiovisuales de Investigación en México</h1>
        </v-col>

        <v-col cols="12" sm="6">
          <blockquote class="text-center font-weight-light text-body-2 text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h6 text-light">
            El Laboratorio Audiovisual de Investigación Social (LAIS-Instituto Mora) convocó a espacios colectivos cuyo eje de trabajo es la investigación sobre lo audiovisual y con herramientas audiovisuales al <strong class="text-bold">Encuentro de Laboratorios Audiovisuales de Investigación en México</strong> (14 y 15 de noviembre de 2022) para conversar sobre las trayectorias, infraestructura, actividades, metodologías, problemáticas, retos y experiencias de cada espacio.
          </blockquote>
        </v-col>

        <v-col cols="12" sm="6" class="mb-4">
          <blockquote class="text-center font-weight-light text-body-2 text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h6 text-light">
            A la convocatoria acudieron <strong class="text-bold">{{ this.laboratorios.length || '15' }} espacios colectivos</strong>. Esta página ofrece un mapeo de tales espacios que incluye la ponencia en video, presentada durante el Encuentro, así como una breve presentación de cada espacio, imágenes o fotografías, contacto, vínculos a sus páginas web y redes sociales de ser el caso. Faltan varios espacios, por lo que esperamos que en el futuro este mapa se amplie.
          </blockquote>
        </v-col>

        <v-col cols="6" sm="4" md="2" v-for="(file, index) in logos.files" :key="index">
          <router-link :to="{ name: 'info', query: { id: `${file.id}`}}">
            <div :class="{ 'animate__animated': true, 'animate__pulse': hover === index, 'animate__infinite': hover === index }" @mouseenter= "hover = index" @mouseleave="hover = false">
              <v-img :src="file.altImg && $vuetify.theme.dark ? require(`../assets/${logos.path}/${file.altImg}`) : require(`../assets/${logos.path}/${file.img}`)" class="ma-0 pa-0" contain height="200" />
            </div>
          </router-link>
        </v-col>
      </v-row>

      <MainFooter />
    </v-container>
  </div>
</template>

<script>
import MainFooter from "@/components/MainFooter.vue"
import { laboratorios } from "../data/labs.mjs" // información completad de los laboratorios
import 'animate.css'

export default {
  name: 'HomeView',

  components: {
    MainFooter,
  },

  data: () => ({
    logos: {
      path: 'logos',
      files: [
        {img: 'LANMO.png', name: 'Laboratorio Nacional de Materiales Orales (LANMO)', id: 1},
        {img: 'UCEMICH.png', name: 'Laboratorio de Medios UCEMICH', id: 2},
        {img: 'Secundaria59.png', name: 'Laboratorio de Investigación Audiovisual, Secundaria Mixta 59', id: 3},
        {img: 'Lab_i-CreA.png', name: 'Laboratorio de Investigación-Creación Audiovisual (Lab i-CreA)', id: 4},
        {img: 'Ibero.png', name: 'Laboratorio Iberoamericano de Documental', id: 5},
        {img: 'Invisible.png', name: 'Laboratorio de lo Invisible', id: 6},
        {img: 'LAbIIA.png', name: 'Laboratorio Interdisciplinario de Investigación Audiovisual', id: 7},
        {img: 'LaMA.png', name: 'Laboratorio de Medios Audiovisuales (LaMA)', id: 8},
        {img: 'InterNeta.png', name: 'Acervo Audiovisual InterNeta. Memoria de las y los Invisibles', id: 9},
        {img: 'Tlacuilo.png', name: 'Tlacuilo Producción Comunitaria', id: 10},
        {img: 'FazAFaz.png', name: 'Faz a Faz A.C.', id: 11},
        {img: 'LAIS.png', name: 'Laboratorio Audiovisual de Investigación Social (LAIS)', id: 12},
        {img: 'LAV_UAM-I.png', name: 'Laboratorio de Antropología Visual', id: 13},
        {img: 'CIESAS.png', name: 'Laboratorio Audiovisual del CIESAS', id: 14},
        {img: 'LAVSAN.png', name: 'Laboratorio de Antropología Visual de El Colegio de San Luis (LAVSAN)', id: 15},
      ]
    },
    hover: false,
  }),

  computed: {
    /**
     * Calcula la altura de un bloque según el tamaño del dispositivo
     * @returns int - Número entero en pixeles de la altura deseada (a menor tamaño, mayor altura)
     */
    parallaxHeight: function(){
      switch (this.$vuetify.breakpoint.name){
        case 'xs': return 1100
        case 'sm': return 600
        case 'md': return 600
        case 'lg': return 600
        case 'xl': return 400
      }
      return 600
    },
  },

  // Acciones previas al montar componente actual
  beforeMount(){
    // asignar los laboratorios importados desde archivo/módulo externo (@see import)
    this.laboratorios = laboratorios
  },

  // Acciones antes de renderizar vista
  mounted: function() {
    // recuperar tema usado por última vez
    // this.$vuetify.theme.dark = localStorage.getItem('darkTheme') === 'true' // dark por default
    // guardar el tema (en caso de no existir)
    // localStorage.setItem('darkTheme', this.$vuetify.theme.dark)

    // usar tema oscuro por default
    this.$vuetify.theme.dark = true
  },
}
</script>

<style scoped>
/* Registrar fuentes tipograficas */
@font-face {
  font-family: RobotoCondensed-Regular;
  src: url('../assets/fonts/RobotoCondensed-Regular.ttf');
}
@font-face {
  font-family: RobotoCondensed-Bold;
  src: url('../assets/fonts/RobotoCondensed-Bold.ttf');
}
@font-face {
  font-family: RobotoCondensed-Light;
  src: url('../assets/fonts/RobotoCondensed-Light.ttf');
}
/* Emplear las fuentes tipográficas como estilos */
.text-regular {
  font-family: RobotoCondensed-Regular !important;
}
.text-bold {
  font-family: RobotoCondensed-Bold !important;
}
.text-light {
  font-family: RobotoCondensed-Light !important;
}

/* Agrega una imagen como fondo de pantalla */
#mainContainer {
  background: url('../assets/background.jpg') no-repeat center center fixed !important;
  background-size: cover;
}

/* Agrega un degradado sobre la imagen de fondo de pantalla */
#mainSubContainer {
  background: rgb(93,101,140);
  background: linear-gradient(180deg, rgba(93,101,140,0.8) 0%, rgba(0,0,0,0.8) 100%) !important;
}
</style>