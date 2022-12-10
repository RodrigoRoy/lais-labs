<template>
  <v-app :theme="theme">
    <!-- Barra superior -->
    <!-- Incluye el título e icono para cambiar tema de color -->
    <v-app-bar>
      <v-spacer></v-spacer>
      <p class="navbar-title">Laboratorios Audiovisuales de Investigación en México</p>
      <v-spacer></v-spacer>
      <v-btn icon @click="switchTheme"><v-icon :icon="theme === 'light' ? 'mdi:mdi-weather-sunny' : 'mdi:mdi-weather-night'" /></v-btn >
    </v-app-bar>

    <!-- En caso de requerir un espacio auxiliar: -->
    <!-- <v-navigation-drawer></v-navigation-drawer> -->

    <!-- Contenedor principal -->
    <!-- Generar 3 columnas principales: -->
    <!-- * Lista de laboratorio -->
    <!-- * Mapa con marcadores -->
    <!-- * Información del laboratorio seleccionado -->
    <v-main> <!-- class="bg-surface-variant" -->
      <v-container>
        <v-row>
          <v-col cols="12" class="my-8">
            <p class="text-center text-h6">
              Departamentos, centros, grupos y laboratorios de México cuyo eje de trabajo es la investigación sobre lo audiovisual y con herramientas audiovisuales, ya sean de carácter universitarios, comunitarios, de investigación o independientes.
            </p>
          </v-col>
        </v-row>

        <v-row align="start">
          <!-- Lista de laboratorios -->
          <v-col md="2" cols="12">
            <v-sheet rounded="xl" elevation="12"> <!-- class="fill-height" -->
              <v-list>
                <!-- <v-list-subheader>LABORATORIOS</v-list-subheader> -->
                <v-list-item v-for="(lab, index) in laboratorios" :key="index" :value="lab" :active="lab === laboratorioSeleccionado" active-color="primary" rounded="shaped" v-on:click="selectData(lab)">
                  <!-- <v-list-item-title v-text="lab.name"></v-list-item-title> -->
                  <p>{{lab.name}}</p>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <!-- Mapa -->
          <v-col md="6" cols="12">
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
          <v-col md="4" cols="12">
            <v-sheet rounded="xl" elevation="12" v-if="laboratorioSeleccionado !== null">

              <!-- COMPONENTE PARA MOSTRAR LA INFORMACIÓN DEL LABORATORIO -->
              <info-laboratorio
                :laboratorioSelected="laboratorioSeleccionado"
              ></info-laboratorio>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Footer />
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
      // Lista de (19) laboratorios
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
  },
};
</script>

<style scoped>
.navbar-title {
  font-size: 1.25rem;
}
</style>