<template>
  <v-app :theme="theme">
    <!-- Barra superior -->
    <!-- Incluye el título e icono para cambiar tema de color -->
    <v-app-bar color="primary">
      <!-- Icono de "hamburguesa" que solo aparece en pantalla pequeñas para desplegar lista lateral -->
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="d-flex d-md-none"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <p class="text-uppercase text-center text-xs-h6 text-md-h5">Laboratorios Audiovisuales de Investigación en México</p>
      <v-spacer></v-spacer>
      <v-btn icon @click="switchTheme"><v-icon :icon="theme === 'light' ? 'mdi:mdi-weather-sunny' : 'mdi:mdi-weather-night'" /></v-btn >
    </v-app-bar>

    <!-- Lista lateral de navegación con los nombres de los laboratorios. Se oculta en pantallas pequeñas y es permanente en pantallas de tamaño mediano en adelante -->
    <v-navigation-drawer v-model="drawer" :temporary="$vuetify.display.smAndDown" :permanent="$vuetify.display.mdAndUp" location="left" width="400" class="bg-secondary">
      <v-list density="compact" nav>
        <v-list-item v-for="(laboratorio, index) in laboratorios" :key="index" :active="laboratorio === laboratorioSeleccionado" active-color="primary" rounded="shaped" v-on:click="selectData(laboratorio)">
          <p> {{ laboratorio.name }} </p>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenedor principal con 2 columnas: -->
    <!-- * Mapa con marcadores -->
    <!-- * Información del laboratorio seleccionado -->
    <v-main>
      <v-container>
        <!-- Párrafo explicativo -->
        <v-row>
          <v-col cols="12" class="my-8">
            <p class="text-center text-h6">
              Departamentos, centros, grupos y laboratorios de México cuyo eje de trabajo es la investigación sobre lo audiovisual y con herramientas audiovisuales, ya sean de carácter universitarios, comunitarios, de investigación o independientes.
            </p>
          </v-col>
        </v-row>

        <v-row align="start">
          <!-- Mapa -->
          <v-col sm="4" md="6" cols="12">
            <v-sheet rounded="xl" style="height: 700px">
              <l-map
                ref="leafletMap"
                v-model:zoom="lmap.zoom"
                :center="lmap.center"
                :options="lmap.options"
              >
                <l-tile-layer
                  :url="lmap.url"
                  :attribution="lmap.attribution"
                ></l-tile-layer>
                <template v-for="(item, index) in laboratorios" :key="index">
                  <l-marker
                    :lat-lng="item.fullLocation.latLng"
                    :zIndexOffset="item.name === laboratorioSeleccionado.name ? 100 : 0" 
                    v-on:click="selectData(item)"
                  >
                    <l-icon :icon-anchor="[16, 37]" class-name="someExtraClass">
                      <img
                        :src="`http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${item.name === laboratorioSeleccionado.name ? 'F50000' : '00A3F5'}&chf=a,s,ee00FFFF`"
                      />
                    </l-icon>
                  </l-marker>
                </template>
              </l-map>
            </v-sheet>
          </v-col>

          <!-- Información del laboratorio seleccionado -->
          <v-col sm="8" md="6" cols="12">
            <v-sheet rounded="xl" elevation="12" v-if="laboratorioSeleccionado !== null">

              <!-- COMPONENTE PARA MOSTRAR LA INFORMACIÓN DEL LABORATORIO -->
              <info-laboratorio
                :laboratorioSelected="laboratorioSeleccionado"
              ></info-laboratorio>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import InfoLaboratorio from "./components/InfoLaboratorio.vue";
import Footer from "@/components/Footer.vue";
import { laboratorios } from "./data/labs.mjs"
// Vue Leaflet:
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Labs",
  components: {
    InfoLaboratorio,
    Footer,
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  data() {
    return {
      // Tema claro/oscuro
      theme: "light",
      drawer: true,
      zoom: 10,
      // Configuración del mapa <l-map>
      lmap: {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 5,
        center: [23.634501, -102.552784],
        options: {
          zoomControl: false,
          attributionControl: true,
          zoomSnap: false,
          scrollWheelZoom: false,
        },
      },
      laboratorioSeleccionado: null,
    };
  },
  methods: {
    /**
     * Intercambiar tema claro a oscuro, y viceversa
     * <v-app> aplica el cambio de manera general
     */
    switchTheme: function () {
      this.theme = this.theme === "light" ? "dark" : "light"
      localStorage.setItem('theme', this.theme)
    },
    switchDrawer: function(){
      this.drawer = !this.drawer
    },
    /**
     * Selecciona la información de un laboratorio
     */
    selectData: function (selectedData) {
      this.laboratorioSeleccionado = selectedData
    },
  },
  beforeMount(){
    this.laboratorios = laboratorios
  },
  mounted: function() {
    this.theme = localStorage.getItem('theme') || 'light'
    this.laboratorioSeleccionado = this.laboratorios[Math.floor(Math.random()*this.laboratorios.length)] // pre-selected random lab
  },
};
</script>

<style scoped>
</style>