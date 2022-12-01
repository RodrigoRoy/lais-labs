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
                <template v-for="lab in laboratorios" :key="lab.name">
                  <p v-if="lab===laboratorioSeleccionado" class="list-item selected-item" v-on:click="selectData(lab)">{{lab.name}}</p>
                  <p v-else class="list-item" v-on:click="selectData(lab)">{{lab.name}}</p>
                </template>
              </v-list>
            </v-sheet>
          </v-col>

          <!-- Mapa -->
          <v-col sm="6">
            <v-sheet>
              <l-map ref="leafletMap" style="height: 300px" :zoom="lmap.zoom" :center="lmap.center" :options="lmap.options">
                <l-tile-layer :url="lmap.url" :attribution="lmap.attribution"></l-tile-layer>
                <template v-for="(item, index) in laboratorios" :key="index">
                  <l-marker v-if="item===laboratorioSeleccionado" :lat-lng="item.location" v-on:click="selectData(item)">
                    <l-icon
                      :icon-anchor="[16, 37]"
                      class-name="someExtraClass">
                      <img src="http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|F50000&chf=a,s,ee00FFFF">
                    </l-icon>
                  </l-marker>
                  <l-marker v-else :lat-lng="item.location" v-on:click="selectData(item)">
                    <l-icon
                      :icon-anchor="[16, 37]"
                      class-name="someExtraClass">
                      <img src="http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00A3F5&chf=a,s,ee00FFFF">
                    </l-icon>
                  </l-marker>
                </template>
                <!-- <l-marker :lat-lng="lmap.markerLatLng"></l-marker> -->
              </l-map>
            </v-sheet>
          </v-col>

          <!-- Información del laboratorio seleccionado -->
          <v-col sm="4">
            <v-sheet v-if="laboratorioSeleccionado!==null">
              <v-card>
                <p class="title">{{laboratorioSeleccionado.name}}</p>
                <v-card-text>Descripción: {{laboratorioSeleccionado.description}}</v-card-text>
                <v-card-text>Sitio web: 
                  <a :href="laboratorioSeleccionado.website" target="_blank">
                    {{laboratorioSeleccionado.website}}
                  </a>
                </v-card-text>
                <v-card-text>Redes sociales:</v-card-text>
                <v-list>
                  <li class="list-item" v-for="(item, index) in laboratorioSeleccionado.social" :key="index">
                    <a :href="item" target="_blank">{{item}}</a>
                  </li>
                </v-list>
              </v-card>
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
  import { LMap, LTileLayer, LMarker, LIcon, LCircle } from "@vue-leaflet/vue-leaflet"
  import "leaflet/dist/leaflet.css"

  export default {
    name: 'Labs',
    components: {
      Footer,
      LMap,
      LTileLayer,
      LMarker,
      LIcon,
      LCircle
    },
    data() {
      return {
        // Tema claro/oscuro
        theme: 'light',
        // Lista de (19) laboratorios
        laboratorios: [
          {
            name: 'Laboratorio Nacional de Materiales Orales',
            description: 'El Laboratorio Nacional de Materiales Orales es un espacio de trabajo interinstitucional para el estudio multidisciplinario de los discursos orales y las manifestaciones asociadas a ellos (gestos, sonoridad, memoria, corporalidad, ritualidad, expresiones musicales, etc.). Con esto se pretende abordar desde distintas perspectivas un tipo de materiales orales, que son el objeto de estudio para entender dinámicas sociales, formas de comunicación, estructuras de pensamiento, conformación de saberes locales, prácticas tradicionales, manifestaciones artísticas, etc.',
            social: ['red1', 'red2', 'red3'],
            socialMedia: [
              {url: 'https://www.facebook.com/lanmo.mx', username: 'lanmo.mx', type: 'facebook', icon: 'mdi-facebook'},
              {url: 'https://www.instagram.com/lanmo.mx', username: 'lanmo.mx', type: 'instagram', icon: 'mdi-instagram'},
              {url: 'https://twitter.com/lanmo_mx', username: 'lanmo_mx', type: 'twitter', icon: 'mdi-twitter'},
              // {url: 'https://www.tiktok.com/@lanmo.mx', username: 'lanmo.mx', type: 'tiktok', icon: ''},
            ],
            contact: {
              mail: 'andres.arroyo@lanmo.unam.mx',
              name: '',
              url: 'https://goo.gl/maps/nqpnE573rSoEvZmi7',
            },
            website: 'https://lanmo.unam.mx/',
            location: [19.649719816958516, -101.22234969999998],
            fullLocation: {
              name: 'Escuela Nacional de Estudios Superiores Unidad Morelia, UNAM Campus Morelia',
              latLng: [19.64957329489176, -101.22234970227854],
            },
            images: {
              path: 'LANMO',
              src: [
                'LANMO_V2 - Andres Arroyo Vallín.png', 
                'Repositorio Color-17 - Andres Arroyo Vallín.jpg', 
                'Repositorio Color-25 - Andres Arroyo Vallín.jpg', 
                'Repositorio Color-30 - Andres Arroyo Vallín.jpg',
              ]
            },
            verified: true,
          },
          {
            name: 'El Archivo de la Palabra: Taller de Historia oral',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            social: ['red1', 'red2', 'red3'],
            website: 'website.com',
            location: [21.02593632709256, -89.55809730609775],
          },
          {
            name: 'Laboratorio de Medios',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            social: ['red1', 'red2', 'red3'],
            website: 'website.com',
            location: [20.014395931616146, -102.7436015],
          },
          {
            name: 'Laboratorio de Investigación Audiovisual, Secundaria Mixta 59 "LAB 59"',
            description: 'Un proyecto de investigación audiovisual  con alumnos de educación básica,  historia oral y documental.',
            social: ['red1', 'red2', 'red3'],
            socialMedia: [
              {url: 'https://www.youtube.com/@liainvestigacionaudiovisua632', username: 'liainvestigacionaudiovisua632', type: 'youtube', icon: 'mdi-youtube'},
            ],
            contact: {
              mail: 'kultudoc@gmail.com',
              name: '',
            },
            website: '',
            location: [20.615184757619822, -103.31399172513775],
            fullLocation: {
              name: 'Secundaria Mixta 59, Tlaquepaque, Jalisco',
              latLng: [20.615029095430028, -103.31401318508095],
              url: 'https://goo.gl/maps/1jUyzgx3FpjKXz3P9',
            },
            verified: true,
          },
          {
            name: 'Laboratorio de Investigación-Creación Audiovisual (Lab i-CreA)',
            description: 'El Lab i-CreA nace en 2019 el marco del proyecto de investigación "Comunidades Emergentes de Conocimiento y Procesos de Investigación-Creación Audiovisual" ganador de la convocatoria Ciencia Básica Fondo SEP-CONACYT , dentro del cual se plantea que el conocimiento se genera y circula en formatos que van más allá del textual y se propone la creación de sistemas de información en formatos visuales, sonoros, cartográficos, entre otros. Es producto también de más de 10 años de trabajo de investigación en los cruces entre artes y ciencias sociales. Desde perspectivas teóricas relacionadas con la interdisciplina, los sistemas complejos, las metodologías participativas, los estudios visuales, asumimos que la investigación/creación tiene lugar cuando implica reflexividad creativa constante. ',
            social: ['red1', 'red2', 'red3'],
            socialMedia: [],
            contact: {
              mail: 'adrihana@gmail.com',
              name: '',
            },
            website: 'website.com',
            location: [25.540922503749655, -103.44593723132313],
            fullLocation: {
              name: 'Facultad de Ciencias Sociales, Universidad Autónoma de Coahuila. Saltillo, Coahuila',
              latLng: [25.421544273802244, -101.00076170221335],
              url: 'https://goo.gl/maps/TdjHccpPfhPhW6Va8',
            },
            images: {
              path: 'Lab i-CreA',
              src: ['Logo Lab i-CreA - Adriana Moreno.png']
            },
            verified: true,
          },
          {
            name: 'Laboratorio Iberoamericano de Documental',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            social: ['red1', 'red2', 'red3'],
            website: 'website.com',
            location: [19.370506733713963, -99.26388957199511],
          },
          // {
          //   name: 'Laboratorio de lo Invisible',
          //   description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          //   social: ['red1', 'red2', 'red3'],
          //   website: 'website.com',
          //   location: [],
          // },
          {
            name: 'Laboratorio Interdisciplinario de Investigación Audiovisual',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            social: ['red1', 'red2', 'red3'],
            website: 'website.com',
            location: [20.68101900853452, -103.34605615487195],
          },
          {
            name: 'Laboratorio de Medios Audiovisuales',
            description: 'Espacio de investigación, docencia y producción audiovisual',
            social: ['red1', 'red2', 'red3'],
            socialMedia: [
              {url: 'https://www.facebook.com/LAMACHYCSUACM', username: 'LAMACHYCSUACM', type: 'facebook', icon: 'mdi-facebook'},
              {url: 'https://twitter.com/LamaChycsUACM', username: 'LamaChycsUACM', type: 'twitter', icon: 'mdi-twitter'},
            ],
            website: 'website.com',
            contact: {
              mail: 'rodrigo.martinez@uacm.edu.mx',
              name: '',
            },
            location: [19.383380472727215, -99.17375848190244],
            fullLocation: {
              name: 'Calle San Lorenzo 290. Col. Del Valle, Del. Benito Juárez',
              latLng: [19.374591361838846, -99.171600800434],
              url: 'https://goo.gl/maps/poDp21YeYtendUgQ8',
            },
            images: {
              path: 'LAMA',
              src: ['Logo LaMA PNG - Laboratorio Medios Audiovisuales.png']
            },
            verified: true,
          },
          {
            name: 'Acervo Audiovisual InterNeta.Memoria de las y los invisibles',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            social: ['red1', 'red2', 'red3'],
            website: 'website.com',
            location: [19.42847, -99.12766],
          },
          {
            name: 'Tlacuilo Producción Comunitaria',
            description: 'Es un colectivo interdisciplinario interesado en el arte, el patrimonio, la comunicación y la historia de las comunidades y pueblos originarios del país. A través del uso de los medios audiovisuales, el colectivo pretende contribuir a la recuperación de la memoria y la formación de un archivo que resguarde la historia individual y colectiva.',
            social: ['red1', 'red2', 'red3'],
            socialMedia: [
              {url: 'https://www.facebook.com/profile.php?id=100077468262989', username: '', type: 'facebook', icon: 'mdi-facebook'},
            ],
            contact: {
              mail: 'carmen.diaz@uacm.edu.mx',
              name: 'María del Carmen Díaz Vázquez',
            },
            website: 'website.com',
            location: [19.416556445868775, -99.15195692883556],
            fullLocation: {
              name: 'Cubículo 213 , Plantel Centro Histórico UACM',
              latLng: [19.423988868706267, -99.13832000228066],
              url: 'https://goo.gl/maps/Md76WXvod9gK6R5v7',
            },
            images: {
              path: 'Lab i-CreA',
              src: [
                'DSC_0377 - María del Carmen Díaz Vázquez.JPG',
                'DSC_0491 - María del Carmen Díaz Vázquez.JPG',
                'DSC_0517 - María del Carmen Díaz Vázquez.JPG',
                'DSC_0596 (1) - María del Carmen Díaz Vázquez.JPG',
                'Logo-Tlacuilo Blanco - María del Carmen Díaz Vázquez.png',
              ]
            },
            verified: true,
          },
          {
            name: 'Faz a Faz',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            social: ['red1', 'red2', 'red3'],
            website: 'website.com',
            location: [18.31394978267513, -92.62473986565865],
          },
          {
            name: 'Laboratorio Audiovisual de Investigación Social (LAIS)',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            social: ['red1', 'red2', 'red3'],
            website: 'website.com',
            location: [19.37805338689813, -99.18272794738233],
          },
          {
            name: 'Laboratorio de Antropología Visual UAM-I',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            social: ['red1', 'red2', 'red3'],
            socialMedia: [
              {url: 'https://www.facebook.com/labantrovisual', username: 'labantrovisual', type: 'facebook', icon: 'mdi-facebook'},
            ],
            contact: {
              mail: 'labantrovisual@gmail.com',
              name: '',
            },
            website: 'website.com',
            location: [19.36600425171695, -99.07274990644807],
            fullLocation: {
              name: 'Universidad Autónoma Metropolitana Unidad Iztapalapa',
              latLng: [19.36600425171695, -99.07274990644807],
              url: 'https://goo.gl/maps/FkgoqWQLtJ9ESR44A',
            },
            images: {
              path: 'Lab i-CreA',
              src: ['Logo del LAV - LAV UAM-I.png']
            },
            verified: true,
          },
          {
            name: 'Laboratorio Audiovisual del Centro de Investigaciones y Estudios Superiores en Antropología Social',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            social: ['red1', 'red2', 'red3'],
            website: 'website.com',
            location: [19.289408161458297, -99.16894367301333],
          },
          {
            name: 'Laboratorio de Antropología Visual de El Colegio de San Luis (LAVSAN)',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            social: ['red1', 'red2', 'red3'],
            website: 'website.com',
            location: [22.129423469806035, -101.0163491576711],
          },
        ],
        // Configuración del mapa <l-map>
        lmap: {
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
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
        laboratorioSeleccionado: null
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
      /**
       * Selecciona la información de un laboratorio
       */
      selectData: function(selectedData) {
        this.laboratorioSeleccionado = selectedData;
      }
    }
  }
  
</script>

<style scoped>
  .title {
    font-display: bold;
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem 2rem;
  }
  .list-item {
    font-display: bold;
    font-size: 1.2rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
  }
  .selected-item {
    background-color: #C1C1C1;
  }
</style>