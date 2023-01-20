<template>
  <v-card color="primary">
    <!-- No se usan v-card-title/subtitle para evitar wrap a una línea, impidiendo leer el nombre y ubicación del laboratorio -->

    <v-card-text class="pb-0">
      <!-- TÍTULO -->
      <p class="text-h6 text--primary">
        {{ laboratorioSelected.name }}
      </p>
      
      <!-- SUBTÍTULO -->
      <p class="font-weight-medium">
        {{ laboratorioSelected.fullLocation.name }}
      </p>

      <!-- DESCRIPCIÓN -->
      <p class="text--primary">
        {{ laboratorioSelected.description }}
      </p>

      <!-- PALABRAS CLAVE O KEYWORDS -->
      <p class="pr-4">
        <v-chip v-for="(keyword, index) in laboratorioSelected.keywords" :key="index" outlined color="accent" class="ma-1" size="small">
          {{ keyword }}
        </v-chip>
      </p>

      <!-- CARRUSEL CON FOTOS Y VIDEO -->
      <v-carousel hide-delimiters :show-arrows="laboratorioSelected.images.src.length > 1" :show-arrows-on-hover="laboratorioSelected.images.src.length > 1" cycle height="300" v-show="laboratorioSelected.images.src.length > 0" class="my-2">
        <!-- ICONOS PERSONALIZADOS -->
        <template v-slot:prev="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>fa-solid fa-chevron-left</v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>fa-solid fa-chevron-right</v-icon>
          </v-btn>
        </template>
        <!-- IMÁGENES DEL LABORATORIO -->
        <v-carousel-item v-for="(item,i) in laboratorioSelected.images.src" :key="i" :src="`/Laboratorios/${laboratorioSelected.images.path}/${item}`" contain></v-carousel-item>
      </v-carousel>
      
      <!-- REFERENCIA AL VIDEO -->
      <iframe v-if="laboratorioSelected.video" width="100%" height="300" class="mt-4" :src="laboratorioSelected.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </v-card-text>

    <!-- ACCIONES DEL COMPONENTE -->
    <v-card-actions>
      <!-- REDES SOCIALES -->
      <v-tooltip top v-for="(social, index) in laboratorioSelected.socialMedia" :key="index">
        <template v-slot:activator="{ on, attrs }">
          <v-btn :href="social.url" target="_blank" icon size="medium" variant="plain" color="accent" v-bind="attrs" v-on="on">
            <v-icon>{{social.faIcon}}</v-icon>
          </v-btn>
        </template>
        <span>{{ capitalize(social.type) }}</span>
      </v-tooltip>

      <!-- SITIO WEB DEL LABORATORIO -->
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-if="laboratorioSelected.website" :href="laboratorioSelected.website" target="_blank" icon size="medium" variant="plain" color="accent" v-bind="attrs" v-on="on">
            <v-icon>fa-light fa-globe</v-icon>
          </v-btn>
        </template>
        <span>Sitio web</span>
      </v-tooltip>

      <!-- CONTACTO - EMAIL -->
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-if="laboratorioSelected.contact.mail" :href="`mailto:${laboratorioSelected.contact.mail}`" target="_blank" icon size="medium" variant="plain" color="accent" v-bind="attrs" v-on="on">
            <v-icon>fa-regular fa-envelope</v-icon>
          </v-btn>
        </template>
        <span>Correo electrónico</span>
      </v-tooltip>
      
    </v-card-actions>
  </v-card>

</template>

<script>
export default {
  name: "InfoLaboratorio",
  props: {
    laboratorioSelected: { type: Object }, // OBJETO CON LA INFORMACIÓN DEL LABORATORIO
  },
  methods: {
    capitalize(text){
      return `${text[0].toUpperCase()}${text.substr(1)}`
    }
  },
};
</script>

<style scoped>

</style>