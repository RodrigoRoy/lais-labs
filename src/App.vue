<template>
  <v-app :theme="theme">
    
    <!-- Barra superior -->
    <!-- Incluye el título e icono para cambiar tema de color -->
    <v-app-bar title="Laboratorios Audiovisuales en México">
      <v-spacer></v-spacer>
      <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="switchTheme">Tema</v-btn>
    </v-app-bar>

    <!-- En caso de requerir un espacio auxiliar: -->
    <!-- <v-navigation-drawer></v-navigation-drawer> -->

    <!-- Contenedor principal -->
    <!-- Generar 3 columnas principales: -->
    <!-- * Lista de laboratorio -->
    <!-- * Mapa con marcadores -->
    <!-- * Información del laboratorio seleccionado -->
    <v-main class="bg-surface-variant">
      <v-container>
        <v-row>
          <!-- Lista de laboratorios -->
          <v-col sm="2">
            <v-sheet class="fill-height">
              <v-list>
                <v-list-item v-for="lab in laboratorios" :key="lab.name" :title="lab.name"></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <!-- Mapa -->
          <v-col sm="6">
            <v-sheet>
              <l-map ref="leafletMap" style="height: 300px" :zoom="lmap.zoom" :center="lmap.center" :options="lmap.options">
                <l-tile-layer :url="lmap.url" :attribution="lmap.attribution"></l-tile-layer>
                <l-marker :lat-lng="lmap.markerLatLng"></l-marker>
              </l-map>
            </v-sheet>
          </v-col>

          <!-- Información del laboratorio seleccionado -->
          <v-col sm="4">
            <v-sheet>
              Info
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
  import Footer from '@/components/Footer.vue'
  // Vue Leaflet:
  import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet"
  import "leaflet/dist/leaflet.css"

  export default {
    name: 'Labs',
    components: {
      Footer,
      LMap,
      LTileLayer,
      LMarker,
      LIcon,
    },
    data() {
      return {
        // Tema claro/oscuro
        theme: 'light',
        // Lista de (19) laboratorios
        laboratorios: [
          {
            name: 'Laboratorio Nacional de Materiales Orales',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'El Archivo de la Palabra: Taller de Historia oral',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Laboratorio de Medios',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Laboratorio de Investigación Audiovisual, Secundaria Mixta 59 "LAB 59"',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Laboratorio de Investigación-Creación Audiovisual - Lab-i-CreA',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Laboratorio Iberoamericano de Documental',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Laboratorio de lo Invisible',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Laboratorio Interdisciplinario de Investigación Audiovisual',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Laboratorio de Medios Audiovisuales (LaMA)',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Acervo Audiovisual InterNeta.Memoria de las y los invisibles',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Tlacuilo producción comunitaria',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Faz a Faz',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Laboratorio Audiovisual de Investigación Social (LAIS)',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Laboratorio de Antropología Visual',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Laboratorio Audiovisual del Centro de Investigaciones y Estudios Superiores en Antropología Social',
            description: '',
            social: [],
            website: '',
            location: {},
          },
          {
            name: 'Laboratorio de Antropología Visual de El Colegio de San Luis (LAVSAN)',
            description: '',
            social: [],
            website: '',
            location: {},
          },
        ],
        // Configuración del mapa <l-map>
        lmap: {
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          zoom: 15,
          center: [51.505, -0.159],
          markerLatLng: [51.504, -0.159],
          options: {
            zoomControl: true,
            attributionControl: true,
            zoomSnap: true,
            scrollWheelZoom: false,
          },
        },
      }
    },
    methods: {
      /**
       * Intercambiar tema claro a oscuro, y viceversa
       * <v-app> aplica el cambio de manera general
       */
      switchTheme: function(){
        this.theme = this.theme === 'light' ? 'dark' : 'light'
      },
    }
  }
  
</script>
