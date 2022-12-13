<template>
  <v-card color="primary">
    <!-- No se usan v-card-title/subtitle para evitar wrap a una línea, impidiendo leer el nombre y ubicación del laboratorio -->

    <v-card-text>
      <!-- TÍTULO -->
      <p class="text-h6 pb-2">
        {{ laboratorioSelected.name }}
      </p>
      
      <!-- SUBTÍTULO -->
      <p class="text-medium-emphasis pb-4">
        {{ laboratorioSelected.fullLocation.name }}
      </p>

      <!-- DESCRIPCIÓN -->
      <p>
        {{ laboratorioSelected.description }}
      </p>

      <!-- PALABRAS CLAVE O KEYWORDS -->
      <p class="pr-4 pt-4">
        <v-chip v-for="(keyword, index) in laboratorioSelected.keywords" :key="index" variant="outlined" color="accent" class="ma-1" size="small" >
          {{ keyword }}
        </v-chip>
      </p>

      <!-- CARRUSEL CON FOTOS Y VIDEO -->
      <v-carousel hide-delimiters :show-arrows="laboratorioSelected.images.src.length > 1 ? 'hover' : false" cycle height="300" v-show="laboratorioSelected.images.src.length > 0" class="my-2">
        <!-- IMÁGENES DEL LABORATORIO -->
        <v-carousel-item v-for="(item,i) in laboratorioSelected.images.src" :key="i" :src="`/Laboratorios/${laboratorioSelected.images.path}/${item}`" ></v-carousel-item>
      </v-carousel>
      
      <!-- REFERENCIA AL VIDEO -->
      <iframe width="100%" height="300" class="mt-4" src="https://www.youtube.com/embed/xheOSRBpfPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </v-card-text>

    <!-- ACCIONES DEL COMPONENTE -->
    <v-card-actions>
      <!-- REDES SOCIALES -->
      <v-btn v-for="(social, index) in laboratorioSelected.socialMedia" :key="index" :href="social.url" target="_blank" icon size="medium" variant="plain" color="accent">
        <v-icon :icon="`fas ${social.faIcon}`" />
        <v-tooltip activator="parent" location="bottom">{{ capitalize(social.type) }}</v-tooltip>
      </v-btn>

      <!-- SITIO WEB DEL LABORATORIO -->
      <v-btn v-if="laboratorioSelected.website" :href="laboratorioSelected.website" target="_blank" icon size="medium" variant="plain" color="accent">
        <v-icon icon="fas fa-regular fa-globe" />
        <v-tooltip activator="parent" location="bottom">Sitio web</v-tooltip>
      </v-btn>

      <!-- CONTACTO - EMAIL -->
      <v-btn v-if="laboratorioSelected.contact.mail" :href="`mailto:${laboratorioSelected.contact.mail}`" target="_blank" icon size="medium" variant="plain" color="accent">
        <v-icon icon="fas fa-regular fa-envelope" />
        <v-tooltip activator="parent" location="bottom">Correo de contacto</v-tooltip>
      </v-btn>
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