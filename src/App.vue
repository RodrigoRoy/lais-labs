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

    <!-- Contenedor principal -->
    <!-- Generar 3 columnas principales: -->
    <!-- * Mapa con marcadores -->
    <!-- * Información del laboratorio seleccionado -->
    <v-main>
      <v-container>

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
            <v-sheet rounded="xl">
              <l-map
                ref="leafletMap"
                style="height: 700px"
                :zoom="lmap.zoom"
                :center="lmap.center"
                :options="lmap.options"
              >
                <l-tile-layer
                  :url="lmap.url"
                  :attribution="lmap.attribution"
                ></l-tile-layer>
                <template v-for="(item, index) in laboratorios" :key="index">
                  <l-marker
                    v-if="item === laboratorioSeleccionado"
                    :lat-lng="item.fullLocation.latLng"
                    v-on:click="selectData(item)"
                  >
                    <l-icon :icon-anchor="[16, 37]" class-name="someExtraClass">
                      <img
                        src="http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|F50000&chf=a,s,ee00FFFF"
                      />
                    </l-icon>
                  </l-marker>
                  <l-marker
                    v-else
                    :lat-lng="item.fullLocation.latLng"
                    v-on:click="selectData(item)"
                  >
                    <l-icon :icon-anchor="[16, 37]" class-name="someExtraClass">
                      <img
                        src="http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00A3F5&chf=a,s,ee00FFFF"
                      />
                    </l-icon>
                  </l-marker>
                </template>
                <!-- <l-marker :lat-lng="lmap.markerLatLng"></l-marker> -->
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
import Footer from "@/components/Footer.vue";
// Vue Leaflet:
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import InfoLaboratorio from "./components/InfoLaboratorio.vue";
import { laboratorios } from "./data/labs.mjs"

export default {
  name: "Labs",
  components: {
    Footer,
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    InfoLaboratorio,
  },
  data() {
    return {
      // Tema claro/oscuro
      theme: "light",
      drawer: false,
      // Configuración del mapa <l-map>
      lmap: {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 4,
        center: [23.634501, -102.552784],
        markerLatLng: [23.634501, -102.552784],
        options: {
          zoomControl: true,
          attributionControl: true,
          zoomSnap: true,
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
      this.theme = this.theme === "light" ? "dark" : "light";
    },
    /**
     * Selecciona la información de un laboratorio
     */
    selectData: function (selectedData) {
      this.laboratorioSeleccionado = selectedData;
    },
  },
  mounted: function() {
    this.laboratorios = laboratorios
    // console.log('mobile?:', this.$vuetify.display.mobile);
  },
};
</script>

<style scoped>
</style>