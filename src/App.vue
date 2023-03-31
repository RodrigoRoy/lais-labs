<template>
  <v-theme-provider root>
    <v-app>
        <!-- Lista lateral de navegación con los nombres de los laboratorios. Se oculta en pantallas pequeñas y es permanente en pantallas de tamaño mediano en adelante -->
        <v-navigation-drawer app v-model="drawer" clipped width="400" color="secondary">
          
          <!-- Filtros para lista de laboratorios -->
          <v-container>
            <v-row>
              <v-col cols="12" class="mb-0 pb-0">
                <v-switch v-model="showFilters" color="accent" label="Filtrar laboratorios"></v-switch>
              </v-col>
              <v-col cols="12" class="my-0 py-0" v-show="showFilters">
                <v-select :items="keywords" label="Actividades" v-model="keywordSelect"></v-select>
                <v-select :items="locations" label="Ubicación" v-model="locationSelect"></v-select>
                <!-- <v-select :items="socialMedia" label="Red social" item-text="text" item-value="value" v-model="socialMediaSelect"></v-select> -->
                <v-btn icon @click="cleanFilters" v-show="keywordSelect != null || locationSelect != null"><v-icon>fa-backspace</v-icon></v-btn>
              </v-col>
            </v-row>
          </v-container>

          <v-list dense nav>
            <v-list-item-group v-model="listIndex" color="accent">
              <v-list-item v-for="(laboratorio, index) in laboratorios" :key="index" rounded="shaped" v-on:click="selectData(laboratorio)">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ laboratorio.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>

        <!-- Barra de navegación en la parte superior -->
        <v-app-bar clipped-left app elevate-on-scroll scroll-target="mainContainer" color="primary">
          <v-app-bar-nav-icon @click.stop="switchDrawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <v-toolbar-title class="text-uppercase text-center text-xs-h6 text-md-h5">Laboratorios Audiovisuales de Investigación en México</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="switchTheme"><v-icon>{{ $vuetify.theme.dark ? 'fa-solid fa-moon' : 'fa-solid fa-sun' }}</v-icon></v-btn >
        </v-app-bar>

        <v-main>
          <v-container id="mainContainer">
            <!-- Párrafo explicativo -->
            <!-- <v-row>
              <v-col cols="12" class="my-8">
                <p class="text-center text-h6">
                  El Laboratorio Audiovisual de Investigación Social (LAIS-Instituto Mora) convocó a espacios colectivos cuyo eje de trabajo es la investigación sobre lo audiovisual y con herramientas audiovisuales al Encuentro de Laboratorios Audiovisuales de Investigación en México, celebrado virtualmente los días 14 y 15 de noviembre de 2022. El objetivo fue conversar sobre las trayectorias, infraestructura, actividades, metodologías, problemáticas, retos y experiencias de cada espacio. A la convocatoria acudieron 16 espacios colectivos. Esta página ofrece un mapeo de tales espacios que incluye la ponencia en video, presentada durante el Encuentro, así como una breve presentación de cada espacio, vínculos a sus páginas web y redes sociales de ser el caso. Faltan varios espacios, por lo que esperamos que en el futuro este mapa se amplie. 
                </p>
              </v-col>
            </v-row> -->

            <v-row align="start">
              <v-col cols="12">
                <v-sheet rounded="xl" elevation="12" v-if="laboratorioSeleccionado !== null">

                  <!-- COMPONENTE PARA MOSTRAR LA INFORMACIÓN DEL LABORATORIO -->
                  <transition name="fade">
                    <lab-text :laboratorio="laboratorioSeleccionado"></lab-text>
                  </transition>
                </v-sheet>
              </v-col>

              <v-col cols="12" sm="4" md="6">
                <v-sheet rounded="xl" elevation="12" v-if="laboratorioSeleccionado !== null">

                  <!-- COMPONENTE PARA MOSTRAR LA INFORMACIÓN DEL LABORATORIO -->
                  <transition name="fade">
                    <lab-picture :laboratorio="laboratorioSeleccionado"></lab-picture>
                  </transition>
                </v-sheet>
              </v-col>

              <v-col cols="12" sm="4" md="6">
                <v-sheet rounded="xl" elevation="12" v-if="laboratorioSeleccionado !== null">

                  <!-- COMPONENTE PARA MOSTRAR LA INFORMACIÓN DEL LABORATORIO -->
                  <transition name="fade">
                    <lab-video :laboratorio="laboratorioSeleccionado"></lab-video>
                  </transition>
                </v-sheet>
              </v-col>

              <!-- Mapa -->
              <v-col cols="12">
                <v-sheet rounded="xl" style="height: 400px">
                  <l-map ref="leafletMap" :zoom="lmap.zoom" :center="lmap.center" :maxZoom="lmap.maxZoom" :minZoom="lmap.minZoom" :maxBounds="lmap.maxBounds" :options="lmap.options" @ready="restoreMapBounds" style="z-index:0;">
                    <l-tile-layer :url="lmap.url" :attribution="lmap.attribution" ></l-tile-layer>

                    <!-- Escala -->
                    <l-control-scale position="bottomleft" :imperial="false" :metric="true"></l-control-scale>
                    
                    <!-- Marcadores de laboratorios -->
                    <l-marker v-for="(laboratorio, index) in laboratorios" :key="index" :lat-lng="laboratorio.fullLocation.latLng" :zIndexOffset="laboratorio.name === laboratorioSeleccionado.name ? 100 : 0" v-on:click="selectData(laboratorio)" >
                      <l-icon :icon-url="`http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${laboratorio.name === laboratorioSeleccionado.name ? 'F50000' : '00A3F5'}&chf=a,s,ee00FFFF`">
                      </l-icon>
                      <l-tooltip :options="lmap.tooltipOptions">{{laboratorio.name}}</l-tooltip>
                    </l-marker>

                    <!-- Botones para controlar vista y zoom -->
                    <l-control position="topright">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="primary" icon tile outlined elevation="6" :disabled="false" @click.stop="switchDrawer" v-bind="attrs" v-on="on" class="mr-1" style="background-color: #f4f4f4;">
                            <v-icon>fa-solid fa-list</v-icon>
                          </v-btn>
                        </template>
                        <span><span v-if="drawer">Ocultar</span><span v-else>Mostrar</span> lista de laboratorios</span>
                      </v-tooltip>

                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="primary" icon tile outlined elevation="6" :disabled="false" @click="restoreMapBounds" v-bind="attrs" v-on="on" class="mr-1" style="background-color: #f4f4f4;">
                            <v-icon>fa-solid fa-maximize</v-icon>
                          </v-btn>
                        </template>
                        <span>Zoom a todos</span>
                      </v-tooltip>

                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="primary" icon tile outlined elevation="6" @click="selectPrevious" v-bind="attrs" v-on="on" class="mr-1" style="background-color: #f4f4f4;">
                            <v-icon>fa-solid fa-backward-step</v-icon>
                          </v-btn>
                        </template>
                        <span>Anterior laboratorio</span>
                      </v-tooltip>

                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="primary" icon tile outlined elevation="6" @click="selectNext" v-bind="attrs" v-on="on" class="mr-1" style="background-color: #f4f4f4;">
                            <v-icon>fa-solid fa-forward-step</v-icon>
                          </v-btn>
                        </template>
                        <span>Siguiente laboratorio</span>
                      </v-tooltip>
                    </l-control>
                  </l-map>
                </v-sheet>
              </v-col>

            </v-row>
          </v-container>

          <MainFooter />
        </v-main>
    </v-app>
  </v-theme-provider>  
</template>

<script>
import MainFooter from "@/components/MainFooter.vue"
import LabText from "@/components/LabText.vue"
import LabPicture from "@/components/LabPicture.vue"
import LabVideo from "@/components/LabVideo.vue"
import { laboratorios } from "./data/labs.mjs" // información completad de los laboratorios

import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LIcon, LControl, LTooltip, LControlScale } from 'vue2-leaflet'

// solución rápida cuando los iconos de marcadores en mapa no se muestran:
import { Icon } from 'leaflet'
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  name: 'App',

  components: {
    MainFooter,
    LabText,
    LabPicture,
    LabVideo,
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LControl,
    LTooltip,
    LControlScale
  },

  data: () => ({
    // controla la visibilidad de navigation-drawer
    drawer: true,

    // controla visibilidad de las opciones de filtrado para laboratorios
    showFilters: false,

    // auxiliar para mostrar/ocular paneles para filtrar (arreglo en caso de elegir multiples)
    filterPanel: 0, // [0, 1],

    // listas de parámetros para filtrar por: palabras clave, ubicación o redes sociales
    keywords: ['Digitalización', 'Difusión', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita', 'Resguardo'],
    locations: ['Coahuila', 'Ciudad de México', 'Jalisco', 'Michoacán', 'Puebla', 'San Luis Potosí', 'Tabasco'],
    socialMedia: [{text: 'Facebook', value: 'facebook'}, {text: 'Instagram', value: 'instagram'}, {text: 'Twitter', value: 'twitter'}, {text: 'TikTok', value: 'tiktok'}, {text: 'Sitio web', value: 'website'}],

    keywordSelect: null,
    locationSelect: null,
    socialMediaSelect: null,

    // lista por índices de los elementos seleccionados (directamente relacionado a componente v-chip)
    keywordsSelected: [],
    locationSelected: [],
    socialMediaSelected: [],

    // lista por palabras de los elementos seleccionados (@see watch properties)
    keywordsToFilter: [],
    locationsToFilter: [],
    socialMediaToFilter: [],

    // lista de laboratorios (@see beforeMount)
    laboratorios: [], // lista actual (variable)
    laboratoriosComplete: [], // lista original (no variable)

    // información completa de un laboratorio del listado (@see mounted)
    laboratorioSeleccionado: null,
    
    // Configuración del mapa
    lmap: {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 5, 
      center: [23.634501, -102.552784],
      maxBounds: L.latLngBounds(L.latLng(32.75, -117.773), L.latLng(14.35, -86.396)), // México
      maxZoom: 17,
      minZoom: 5,
      tooltipOptions: {
        offset: L.point(0, -42),
        direction: 'top',
      },
      options: {
        zoomControl: true,
        attributionControl: true,
        zoomSnap: 1,
        scrollWheelZoom: true,
      },
    },
  }),

  // Variables calculadas
  computed: {
    // lista de todas las coordenadas (latLng[]) de laboratorios
    labsLatLngBounds: function() {
      return this.laboratorios.map(lab => lab.fullLocation.latLng)
    }
  },

  // Variables a observar cambios
  watch: {
    /**
     * Reestablece la lista de laboratorios al ocultar filtros
     */
    showFilters: function(){
      if(!this.showFilters)
        this.cleanFilters()
    },
    /**
     * Actualiza la lista de marcadores en el mapa según el filtro de ubicación
     */
    locationSelect: function(){
      this.updateLabList()
    },
    /**
     * Actualiza la lista de marcadores en el mapa según el filtro de actividades
     */
    keywordSelect: function(){
      this.updateLabList()
    },
  },

  methods: {
    /**
     * Intercambiar tema claro a oscuro, y viceversa
     */
    switchTheme: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('darkTheme', this.$vuetify.theme.dark)
    },

    /**
     * Muestra/oculta menú lateral
     */
    switchDrawer: function(){
      this.drawer = !this.drawer
    },

    /**
     * Selecciona la información de un laboratorio
     * Aplica animación de pan y zoom en el mapa
     * @param {object} selectedData - La información completa del laboratorio
     */
    selectData: function (selectedData) {
      this.laboratorioSeleccionado = selectedData

      // Indice relativo a this.laboratorios, es necesario para resaltar en lista de laboratorios (@see v-navigation-drawer)
      this.listIndex = Array.prototype.indexOf.call(this.laboratorios, this.laboratorioSeleccionado)
      
      // Cierra drawer en caso de que la pantalla sea muy pequeña:
      if(this.$vuetify.breakpoint.smAndDown) this.drawer = false

      // Énfasis en el mapa al laboratorio seleccionado
      this.$refs.leafletMap.mapObject.flyTo(selectedData.fullLocation.latLng, 11, {animate: true, duration: 2})
    },

    /**
     * Selecciona la información del laboratorio anterior, usando como referencia
     * el actual laboratorio seleccionado de la lista
     */
    selectPrevious: function(){
      const labIndex = Array.prototype.indexOf.call(this.laboratorios, this.laboratorioSeleccionado)
      if(labIndex - 1 < 0) // si es el primero (índice 0), seleccionar último
        this.selectData(this.laboratorios[this.laboratorios.length - 1])
      else
        this.selectData(this.laboratorios[labIndex - 1])
    },

    /**
     * Selecciona la información del laboratorio siguiente, usando como referencia
     * el actual laboratorio seleccionado de la lista
     */
    selectNext: function(){
      const labIndex = Array.prototype.indexOf.call(this.laboratorios, this.laboratorioSeleccionado)
      this.selectData(this.laboratorios[(labIndex+1)%(this.laboratorios.length)]) // operador módulo es útil cuando es el último en la lista
    },

    /**
     * Efecto zoom-out (alejarse) en el mapa para observar todos los (marcadores de) laboratorios
     */
    restoreMapBounds: function(){
      // acceder directamente al API de Leaflet con this.$refs.<lmapref>.mapObject
      this.$refs.leafletMap.mapObject.flyToBounds(this.labsLatLngBounds, {animate: true, duration: 2})
    },

    /**
     * Actualiza la lista de laboratorios según los filtros indicados
     */
    updateLabList: function(){
      // Restaurar lista original
      this.laboratorios = this.laboratoriosComplete

      // Aplicar filtros
      if(this.keywordSelect)
        this.laboratorios = this.laboratorios.filter(laboratorio => laboratorio.keywords.includes(this.keywordSelect))
      if(this.locationSelect)
        this.laboratorios = this.laboratorios.filter(laboratorio => this.locationSelect === laboratorio.location)
      
      // Zoom en mapa a los marcadores de los mapas
      this.restoreMapBounds()
    },

    /**
     * Limpiar/borrar los filtros
     */
    cleanFilters: function(){
      this.locationSelect = null
      this.keywordSelect = null
    },
  },

  // Acciones previas al montar componente actual
  beforeMount(){
    // asignar los laboratorios importados desde archivo/módulo externo (@see import)
    this.laboratorios = laboratorios
    this.laboratoriosComplete = laboratorios
  },

  // Acciones antes de renderizar vista
  mounted: function() {
    // recuperar tema usado por última vez
    this.$vuetify.theme.dark = localStorage.getItem('darkTheme') === 'true'

    // seleccionar y mostrar un laboratorio al azar
    this.selectData(this.laboratorios[Math.floor(Math.random()*this.laboratorios.length)])
  },
}
</script>

<style scoped>
/* Animaciones a usar al mostrar/ocultar elementos con Vue */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>