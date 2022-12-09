<template>
  <v-app :theme="theme">
    <!-- Barra superior -->
    <!-- Incluye el título e icono para cambiar tema de color -->
    <v-app-bar>
      <v-spacer></v-spacer>
      <p class="navbar-title">Laboratorios Audiovisuales de Investigación en México</p>
      <v-spacer></v-spacer>
      <v-btn :prepend-icon=" theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night' " @click="switchTheme" >Tema</v-btn >
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
          <v-col xs="12" class="my-8">
            <p class="text-center">
              Departamentos, centros, grupos y laboratorios de México cuyo eje de trabajo es la investigación sobre lo audiovisual y con herramientas audiovisuales, ya sean de carácter universitarios, comunitarios, de investigación o independientes.
            </p>
          </v-col>
        </v-row>

        <v-row align="start">
          <!-- Lista de laboratorios -->
          <v-col sm="2">
            <v-sheet rounded="xl" class="fill-height" >
              <v-list>
                <!-- <v-list-subheader>LABORATORIOS</v-list-subheader> -->
                <v-list-item v-for="(lab, index) in laboratorios" :key="index" :value="lab" active-color="primary" rounded="shaped" v-on:click="selectData(lab)">
                  <!-- <v-list-item-title v-text="lab.name"></v-list-item-title> -->
                  <p>{{lab.name}}</p>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <!-- Mapa -->
          <v-col sm="6">
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
          <v-col sm="4">
            <v-sheet rounded="xl" v-if="laboratorioSeleccionado !== null">

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
      laboratorios: [
        {
          name: "Laboratorio Nacional de Materiales Orales",
          description:
            "El Laboratorio Nacional de Materiales Orales es un espacio de trabajo interinstitucional para el estudio multidisciplinario de los discursos orales y las manifestaciones asociadas a ellos (gestos, sonoridad, memoria, corporalidad, ritualidad, expresiones musicales, etc.). Con esto se pretende abordar desde distintas perspectivas un tipo de materiales orales, que son el objeto de estudio para entender dinámicas sociales, formas de comunicación, estructuras de pensamiento, conformación de saberes locales, prácticas tradicionales, manifestaciones artísticas, etc.",
          keywords: ['Digitalización', 'Difusión', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita', 'Resguardo'],
          socialMedia: [
            {
              url: "https://www.facebook.com/lanmo.mx",
              username: "lanmo.mx",
              type: "facebook",
              icon: "mdi-facebook",
            },
            {
              url: "https://www.instagram.com/lanmo.mx",
              username: "lanmo.mx",
              type: "instagram",
              icon: "mdi-instagram",
            },
            {
              url: "https://twitter.com/lanmo_mx",
              username: "lanmo_mx",
              type: "twitter",
              icon: "mdi-twitter",
            },
            {url: 'https://www.tiktok.com/@lanmo.mx', username: 'lanmo.mx', type: 'tiktok', icon: 'fas fa-plus'},
          ],
          contact: {
            mail: "andres.arroyo@lanmo.unam.mx",
            name: "",
            url: "https://goo.gl/maps/nqpnE573rSoEvZmi7",
          },
          website: "https://lanmo.unam.mx/",
          fullLocation: {
            name: "Escuela Nacional de Estudios Superiores Unidad Morelia, UNAM Campus Morelia",
            latLng: [19.64957329489176, -101.22234970227854],
          },
          images: {
            path: "LANMO",
            src: [
              "LANMO_V2 - Andres Arroyo Vallín.png",
              "Repositorio Color-17 - Andres Arroyo Vallín.jpg",
              "Repositorio Color-25 - Andres Arroyo Vallín.jpg",
              "Repositorio Color-30 - Andres Arroyo Vallín.jpg",
            ],
          },
          verified: true,
        },
        // {
        //   // No participó en el Encuentro de Laboratorios 2022
        //   name: "El Archivo de la Palabra: Taller de Historia Oral",
        //   description:
        //     "Constituido por un grupo de profesores de la Facultad de Ciencias Antropológicas de la Universidad Autónoma de Yucatán en torno a la práctica de la historia oral, imparte cursos de historia oral a nivel licenciatura y doctorado, y se encuentra recopilando los testimonios orales de los normalista de la península. Nuestro interés como grupo de trabajo está en consolidar nuestros planteamientos teóricos-metodológicos de la historial para que a través del trabajo interdisciplinario pueda construirse nuevas perspectivas para la investigación social e histórica.",
        //   keywords: ['Docencia', 'Investigación'],
        //   socialMedia: [],
        //   contact: {
        //     mail: "lorgio.coba@correo.uady.mx",
        //     name: "Lorgio Gilberto Cobá Noh",
        //   },
        //   website: "",
        //   fullLocation: {
        //     name: "Universidad Autónoma de Yucatán, Facultad de Ciencias Antropológicas",
        //     latLng: [21.025869788653967, -89.55807547800507],
        //     url: "https://goo.gl/maps/mPWi2s4E8hiY6UgW9",
        //   },
        //   images: {
        //     path: "",
        //     src: [],
        //   },
        //   verified: false,
        // },
        {
          name: "Laboratorio de Medios",
          description:
            "El Laboratorio de Medios, es un espacio que nació dentro de la Licenciatura en Estudios Multiculturales,  de la Universidad de La Ciénega del Estado de Michoacán de Ocampo (UCEMICH), la cual comprende tres ejes formativos: Investigación, gestión cultural y producción de medios. Su finalidad es que estudiantes, profesores, investigadores, cuenten con las herramientas y tecnologías para que desarrollen sus actividades escolares, académicas y de investigación.  Impulsamos la producción audiovisual estudiantil: cortometrajes, reportajes, programas de televisión y podcats.",
          keywords: ['Docencia', 'Investigación', 'Producción AV'],
          socialMedia: [
            {
              url: "https://www.facebook.com/lab.med.9469",
              username: "lab.med.9469",
              type: "facebook",
              icon: "mdi-facebook",
            },
          ],
          contact: {
            mail: "rzepeda@ucemich.edu.mx",
            name: "Roberto Zepeda Anaya",
          },
          website: "",
          fullLocation: {
            name: "Universidad de La Ciénega del Estado de Michoacán de Ocampo (UCEMICH)",
            latLng: [20.014459386238457, -102.74361466542592],
            url: "https://goo.gl/maps/YWiGEn4jSSL13XARA",
          },
          images: {
            path: "",
            src: [],
          },
          verified: false,
        },
        {
          name: 'Laboratorio de Investigación Audiovisual, Secundaria Mixta 59',
          description:
            "Un proyecto de investigación audiovisual  con alumnos de educación básica,  historia oral y documental.",
          keywords: ['Docencia', 'Investigación'],
          socialMedia: [
            {
              url: "https://www.youtube.com/@liainvestigacionaudiovisua632",
              username: "liainvestigacionaudiovisua632",
              type: "youtube",
              icon: "mdi-youtube",
            },
          ],
          contact: {
            mail: "kultudoc@gmail.com",
            name: "Fernando López Martínez",
          },
          website: "",
          fullLocation: {
            name: "Secundaria Mixta 59, Tlaquepaque, Jalisco",
            latLng: [20.615029095430028, -103.31401318508095],
            url: "https://goo.gl/maps/1jUyzgx3FpjKXz3P9",
          },
          images: {
            path: "",
            src: [],
          },
          verified: true,
        },
        {
          name: "Laboratorio de Investigación-Creación Audiovisual (Lab i-CreA)",
          description:
            'El Lab i-CreA nace en 2019 el marco del proyecto de investigación "Comunidades Emergentes de Conocimiento y Procesos de Investigación-Creación Audiovisual" ganador de la convocatoria Ciencia Básica Fondo SEP-CONACYT , dentro del cual se plantea que el conocimiento se genera y circula en formatos que van más allá del textual y se propone la creación de sistemas de información en formatos visuales, sonoros, cartográficos, entre otros. Es producto también de más de 10 años de trabajo de investigación en los cruces entre artes y ciencias sociales. Desde perspectivas teóricas relacionadas con la interdisciplina, los sistemas complejos, las metodologías participativas, los estudios visuales, asumimos que la investigación/creación tiene lugar cuando implica reflexividad creativa constante. ',
          keywords: ['Difusión', 'Investigación', 'Producción AV'],
          socialMedia: [],
          contact: {
            mail: "adrihana@gmail.com",
            name: "Adriana Marcela Moreno Acosta",
          },
          website: "",
          fullLocation: {
            name: "Facultad de Ciencias Sociales, Universidad Autónoma de Coahuila. Saltillo, Coahuila",
            latLng: [25.421544273802244, -101.00076170221335],
            url: "https://goo.gl/maps/TdjHccpPfhPhW6Va8",
          },
          images: {
            path: "Lab i-CreA",
            src: ["Logo Lab i-CreA - Adriana Moreno.png"],
          },
          verified: true,
        },
        {
          name: "Laboratorio Iberoamericano de Documental",
          description:
            "El Laboratorio Iberoamericano de Documental es una plataforma de pensamiento y producción de arte documental que, desde el Departamento de Comunicación de la Universidad Iberoamericana, propone abordar la realidad adoptando una postura crítica y creativa. Nuestra misión es fomentar la transformación social y el impacto positivo en la consecución de un entorno más justo mediante la producción de contenido de vanguardia y socialmente relevante. Tenemos la visión de crear alternativas de comunicación en el panorama latinoamericano como un vehículo de fortalecimiento comunitario e identitario.",
          keywords: ['Docencia', 'Investigación', 'Producción AV'],
          socialMedia: [],
          contact: {
            mail: "pablo.martinez@ibero.mx",
            name: "Pablo Martínez-Zárate",
          },
          website: "https://iberodocslab.org",
          fullLocation: {
            name: "Universidad Iberoamericana Ciudad de México",
            latLng: [19.37057418636741, -99.26415707493447],
            url: "https://goo.gl/maps/Suy9d8CkXJ3Pefm7A",
          },
          images: {
            path: "",
            src: [],
          },
          verified: false,
        },
        {
          name: 'Laboratorio de lo Invisible',
          description: 'El Laboratorio de lo Invisible es una iniciativa de experimentación y creación audiovisual para personas con y sin discapacidad, cuenta con 5 años de vida pública. Nace a partir de la colaboración entre Cine para Imaginar (el único colectivo en México que realiza traducción audiovisual y accesibilidad de cine para personas con discapacidad) y personas interesadas en la búsqueda de prácticas participativas entre personas con ceguera o baja visión, y sin ceguera. En la actualidad personas de la Comunidad Sorda de México dedicadas al cine, desarrollan piezas en lengua de señas mexicana, visual vernacular, teatro de sombras con gestualidad, y mediación cultural en Lengua de Señas Mexicana junto al Encuentro de Estudios en Comunidades Sordas ECOS. Es un laboratorio nómada, que ha contado con ediciones en México y en el extranjero. Basamos nuestras prácticas con la intuición y diálogos permanentes con la comunalidad, y experiencias e investigación sentidas, como es La Expansión Social propuesta por el fotógrafo ciego Lorenzo Morales.',
          keywords: ['Digitalización', 'Difusión', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita', 'Resguardo'],
          socialMedia: [
            {
              url: "https://www.facebook.com/laboratoriodeloinvisible",
              username: "laboratoriodeloinvisible",
              type: "facebook",
              icon: "mdi-facebook",
            },
            {
              url: "https://www.instagram.com/laboratoriodeloinvisible/",
              username: "laboratoriodeloinvisible",
              type: "instagram",
              icon: "mdi-instagram",
            },
            {
              url: "https://www.youtube.com/@laboratorioinvisible6490",
              username: "laboratorioinvisible6490",
              type: "youtube",
              icon: "mdi-youtube",
            },
            {
              url: "https://vimeo.com/laboinvisible",
              username: "laboinvisible",
              type: "vimeo",
              icon: "mdi-vimeo",
            },
          ],
          contact: {
            mail: "laboratoriodeloinvisible@gmail.com",
            name: "Moisés García Rojas",
          },
          website: 'http://www.laboratoriodeloinvisible.com',
          fullLocation: {
            // Presencial virtual, con múltiples sedes. Solo se incluyó la primera indicada
            name: "CINEMA | Escuela de Cinematografía y Medios Audiovisuales",
            latLng: [19.008178409943753, -98.21217772606161],
            url: "https://goo.gl/maps/kzSqNgcDSsjBHqibA",
          },
          images: {
            path: "Invisible",
            src: [
              "28N, Comunidades Sordas Floreciendo, Cortomtraje - Moises Garcia.jpg",
              "Historias de la Comunidad Sorda Largometraje - Moises Garcia.jpg",
              "Laboratorio de lo Invisible Costa Oaxaca - Moises Garcia.jpg",
              "Pintado con Luz Xalapa - Moises Garcia.jpg",
              "Visual Vernacular Puebla - Moises Garcia.jpg",
            ],
          },
          verified: true,
        },
        {
          name: "Laboratorio Interdisciplinario de Investigación Audiovisual",
          description:
            "LABIIA es un espacio de creación colectiva en el que se desarrollan actividades de formación, investigación y divulgación de saberes a través de proyectos audiovisuales que planteen otras formas de narrar historias relacionadas al Patrimonio Audiovisual. Partimos de un conocimiento interdisciplinario que establece un diálogo entre varias disciplinas, metodologías, saberes, lenguajes, artes, tecnologías y procesos creativos.",
          keywords: ['Difusión', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita'],
          socialMedia: [
            {
              url: "https://www.facebook.com/labiiamx",
              username: "labiiamx",
              type: "facebook",
              icon: "mdi-facebook",
            },
          ],
          contact: {
            mail: "labiiamx@gmail.com",
            name: "David Flores Magón Guzmán",
          },
          website: "https://labiia.webnode.mx/",
          fullLocation: {
            name: "Mezquitán 330, Guadalajara, México",
            latLng: [20.6814644557943, -103.35297560364222],
            url: "https://goo.gl/maps/1EEVeWQh1bMYNtKd7",
          },
          images: {
            path: "",
            src: [],
          },
          verified: false,
        },
        {
          name: "Laboratorio de Medios Audiovisuales",
          description:
            "Espacio de investigación, docencia y producción audiovisual",
          keywords: ['Digitalización', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita'],
          socialMedia: [
            {
              url: "https://www.facebook.com/LAMACHYCSUACM",
              username: "LAMACHYCSUACM",
              type: "facebook",
              icon: "mdi-facebook",
            },
            {
              url: "https://twitter.com/LamaChycsUACM",
              username: "LamaChycsUACM",
              type: "twitter",
              icon: "mdi-twitter",
            },
          ],
          website: "",
          contact: {
            mail: "rodrigo.martinez@uacm.edu.mx",
            name: "",
          },
          fullLocation: {
            name: "Calle San Lorenzo 290. Col. Del Valle, Del. Benito Juárez",
            latLng: [19.374591361838846, -99.171600800434],
            url: "https://goo.gl/maps/poDp21YeYtendUgQ8",
          },
          images: {
            path: "LAMA",
            src: ["Logo LaMA PNG - Laboratorio Medios Audiovisuales.png"],
          },
          verified: true,
        },
        {
          name: "Acervo Audiovisual InterNeta. Memoria de las y los invisibles",
          description:
            "El Acervo Audiovisual InterNeta tiene el objetivo de acopiar, preservar,  conservar, catalogar documentos audiovisuales para su acceso público proactivo y reactivo (consulta y reutilización de los documentos audiovisuales que lo componen). Ya que dichos documentos contienen valor histórico y cultural producido como herencia audiovisual de quienes “no han sido vistos” hasta ahora por las instituciones culturales y académicas de nuestro país. Esta herencia audiovisual es asimismo un patrimonio cultural de barrios urbanos, barrios originarios y comunidades indígenas migrantes.",
          keywords: ['Producción AV', 'Producción escrita', 'Resguardo'],
          socialMedia: [
            {
              url: "https://www.facebook.com/culturasmetropolitanas",
              username: "culturasmetropolitanas",
              type: "facebook",
              icon: "mdi-facebook",
            },
          ],
          contact: {
            mail: "pgs_uamx@hotmail.com",
            name: "Pablo Gaytán Santiago",
          },
          website: "",
          fullLocation: {
            name: "Ciudad de México",
            latLng: [19.4326111814556, -99.13320220104225],
            url: "https://goo.gl/maps/a6EYYQjJYxAhzjA2A",
          },
          images: {
            path: "",
            src: [],
          },
          verified: false,
        },
        {
          name: "Tlacuilo Producción Comunitaria",
          description:
            "Es un colectivo interdisciplinario interesado en el arte, el patrimonio, la comunicación y la historia de las comunidades y pueblos originarios del país. A través del uso de los medios audiovisuales, el colectivo pretende contribuir a la recuperación de la memoria y la formación de un archivo que resguarde la historia individual y colectiva.",
          keywords: ['Difusión', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita'],
          socialMedia: [
            {
              url: "https://www.facebook.com/profile.php?id=100077468262989",
              username: "",
              type: "facebook",
              icon: "mdi-facebook",
            },
          ],
          contact: {
            mail: "carmen.diaz@uacm.edu.mx",
            name: "María del Carmen Díaz Vázquez",
          },
          website: "",
          fullLocation: {
            name: "Cubículo 213 , Plantel Centro Histórico UACM",
            latLng: [19.423988868706267, -99.13832000228066],
            url: "https://goo.gl/maps/Md76WXvod9gK6R5v7",
          },
          images: {
            path: "Lab i-CreA",
            src: [
              "DSC_0377 - María del Carmen Díaz Vázquez.JPG",
              "DSC_0491 - María del Carmen Díaz Vázquez.JPG",
              "DSC_0517 - María del Carmen Díaz Vázquez.JPG",
              "DSC_0596 (1) - María del Carmen Díaz Vázquez.JPG",
              "Logo-Tlacuilo Blanco - María del Carmen Díaz Vázquez.png",
            ],
          },
          verified: true,
        },
        {
          name: "Faz a Faz",
          description:
            "Proyecto dedicado a la promoción del cine y el audiovisual a través de la exhibición, realización y preservación. Al reconocer el potencial del cine y el audiovisual como generadores de experiencias, procuramos el desarrollo de procesos formativos desde dinámicas colaborativas y esquemas comunitarios en cada uno de los proyectos que desarrollamos. En la práctica analizamos y exploramos el potencial del audiovisual como recurso y herramienta de organización y reflexión colectiva, al igual que las dinámicas de realización y exhibición cinematográfica como procesos catalizadores de encuentros, capaces de generar espacios en los que es posible observar, dialogar y negociar la vida social. Apostamos por las metodologías participativas y colaborativas, e ideamos formas de aplicar esquemas de producción comunitaria; todo esto desde el diálogo y el intercambio con los agentes locales que se suman a cada uno de los proyectos, en aras de devenir colaboradores. Nuestro objetivo es propiciar encuentros, diálogos y reflexiones colectivas detonadas por las imágenes compartidas, ya sea aquellas que se aprecian y analizan, o las que son creadas en conjunto.",
          keywords: ['Digitalización', 'Difusión', 'Docencia', 'Investigación', 'Producción AV'],
          socialMedia: [
            {
              url: "https://www.facebook.com/PerfilFFaz",
              username: "PerfilFFaz",
              type: "facebook",
              icon: "mdi-facebook",
            },
            {
              url: "https://vimeo.com/fazafaz",
              username: "fazafaz",
              type: "vimeo",
              icon: "mdi-vimeo",
            },
          ],
          contact: {
            mail: "faf.inbox@gmail.com",
            name: "Diana Isabel Armenta Ramírez",
          },
          website: "",
          fullLocation: {
            name: "Tabasco",
            latLng: [17.989455917953457, -92.94750948232529],
            url: "https://goo.gl/maps/2dJ7KGn9t4nKAyFH9"
          },
          images: {
            path: "",
            src: [],
          },
          verified: false,
        },
        {
          name: "Laboratorio Audiovisual de Investigación Social (LAIS)",
          description:
            "El Laboratorio Audiovisual de Investigación Social (LAIS) es un espacio colectivo e interdisciplinario dedicado a la investigación social con imágenes. Creado en 2002 con un equipo multidisciplinario, el LAIS realiza estudios que incorporan imágenes y material audiovisual como fuentes primarias de investigación, sean estas recopiladas en diversidad de acervos y colecciones, o bien generadas desde la misma investigación; forma recursos humanos en esta línea de manera permanente; e impulsa la documentación y divulgación de investigaciones sociales y acervos documentales.",
          keywords: ['Digitalización', 'Difusión', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita', 'Resguardo'],
          socialMedia: [
            {
              url: "https://www.facebook.com/LAIS.InstitutoMora",
              username: "LAIS.InstitutoMora",
              type: "facebook",
              icon: "mdi-facebook",
            },
            {
              url: "https://www.instagram.com/lais.im",
              username: "lais.im",
              type: "instagram",
              icon: "mdi-instagram",
            },
            {
              url: "https://www.youtube.com/laismora",
              username: "laismora",
              type: "youtube",
              icon: "mdi-youtube",
            },
          ],
          contact: {
            mail: "lais@mora.edu.mx",
            name: "",
          },
          website: "http://lais.mora.edu.mx/",
          fullLocation: {
            name: "Instituto Mora",
            latLng: [19.376215866305298, -99.18507349164311],
            url: "https://goo.gl/maps/RVPgGkMp4QNyT6a37",
          },
          images: {
            path: "",
            src: [],
          },
          verified: false,
        },
        {
          name: "Laboratorio de Antropología Visual",
          description:
            "El Laboratorio de Antropología Visual es un espacio dedicado a la investigación y a la docencia en donde alumnos y profesores desarrollan proyectos antropológicos que requieren de la utilización de la fotografía y el video.",
          keywords: ['Difusión', 'Docencia', 'Investigación', 'Producción AV'],
          socialMedia: [
            {
              url: "https://www.facebook.com/labantrovisual",
              username: "labantrovisual",
              type: "facebook",
              icon: "mdi-facebook",
            },
          ],
          contact: {
            mail: "labantrovisual@gmail.com",
            name: "Karla Ballesteros Gómez",
          },
          website: "https://divcsh.izt.uam.mx/depto_antropologia/",
          fullLocation: {
            name: "Universidad Autónoma Metropolitana Unidad Iztapalapa",
            latLng: [19.36600425171695, -99.07274990644807],
            url: "https://goo.gl/maps/FkgoqWQLtJ9ESR44A",
          },
          images: {
            path: "UAM-I",
            src: ["Logo del LAV - LAV UAM-I.png"],
          },
          verified: true,
        },
        {
          name: "Laboratorio Audiovisual del Centro de Investigaciones y Estudios Superiores en Antropología Social",
          description:
            // Pendiente
            "Laboratorio Audiovisual del Centro de Investigaciones y Estudios Superiores en Antropología Social (Laboratorio Audiovisual del CIESAS)",
          keywords: ['Difusión', 'Docencia', 'Investigación', 'Producción AV', 'Producción escrita', 'Resguardo'],
          socialMedia: [
            {
              url: "https://www.youtube.com/CIESASAudiovisual",
              username: "CIESASAudiovisual",
              type: "youtube",
              icon: "mdi-youtube",
            },
          ],
          contact: {
            mail: "msa@ciesas.edu.mx",
            name: "Mauricio Sánchez Álvarez",
          },
          website: "https://lab.ciesas.edu.mx/audiovisual/",
          fullLocation: {
            name: "Centro de Investigaciones y Estudios Superiores en Antropología Social (CIESAS)",
            latLng: [19.289301832744933, -99.16887930029213],
            url: "https://goo.gl/maps/DfJPXjL2A6oqyEMx5",
          },
          images: {
            path: "",
            src: [],
          },
          verified: false,
        },
        {
          name: "Laboratorio de Antropología Visual de El Colegio de San Luis (LAVSAN)",
          description:
            "El LAVSAN es un espacio para realizar prácticas e investigación de carácter audiovisual promoviendo el diálogo entre arte y antropología con el fin de construir conocimiento social. Nuestros objetivos son 1) desarrollar una línea de investigación en antropología visual; 2) fortalecer la investigación y la docencia apoyando a investigadores y a estudiantes con acervo filmográfico y fotográfico, equipo, capacitación audiovisual y vinculación; y 3) contribuir al intercambio, difusión y divulgación de la producción audiovisual etnográfica y antropológica.",
          keywords: ['Docencia', 'Investigación', 'Producción AV'],
          socialMedia: [],
          contact: {
            mail: "lavsan.colsan@gmail.com",
            name: "",
          },
          website: "www.lavsan.colsan.edu.mx",
          fullLocation: {
            name: "Parque Macul 155, Colinas del Parque, 78260 San Luis, S.L.P.",
            latLng: [22.12836307981747, -101.01548413244936],
            url: "https://goo.gl/maps/7hck7h9qG19gtiki7",
          },
          images: {
            path: "LAVSAN",
            src: ["Logo LAVSAN - Frances Paola Garnica Quiñones.png"],
          },
          verified: true,
        },
      ],
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
};
</script>

<style scoped>
.navbar-title {
  font-size: 1.25rem;
}
</style>