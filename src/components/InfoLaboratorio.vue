<template>
  <v-card>
    <!-- TÍTULO -->
    <template v-slot:title> {{ laboratorioSelected.name }} </template>

    <!-- SUBTÍTULO -->
    <template v-slot:subtitle> {{ laboratorioSelected.subtitle }} </template>

    <!-- DESCRIPCIÓN -->
    <template v-slot:text> {{ laboratorioSelected.description }} </template>

    <!-- PALABRAS CLAVE O KEYWORDS -->
    <div class="px-4">
      <v-chip 
        v-for="(keyword, index) in laboratorioSelected.keywords" 
        :key="index" 
        variant="outlined" 
        color="primary" 
        class="ma-1"
        size="small"
      >
        {{ keyword }}
      </v-chip>
    </div>

    <!-- CARRUSEL CON FOTOS Y VIDEO -->
    <v-carousel hide-delimiters :show-arrows="laboratorioSelected.images.src.length > 1 ? 'hover' : false" cycle height="300" v-show="laboratorioSelected.images.src.length > 0" class="my-2">
      <!-- IMÁGENES DEL LABORATORIO -->
      <!-- PENDIENTE LEER LA IMAGEN DE FORMA LOCAL EN LUGAR DE GITHUB -->
      <v-carousel-item
      v-for="(item,i) in laboratorioSelected.images.src"
      :key="i"
      :src="`/Laboratorios/${laboratorioSelected.images.path}/${item}`"
      ></v-carousel-item>
    </v-carousel>
    
    <!-- REFERENCIA AL VIDEO -->
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xheOSRBpfPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <!-- ACCIONES DEL COMPONENTE -->
    <v-card-actions>
      <!-- REDES SOCIALES -->
      <v-btn v-for="(social, index) in laboratorioSelected.socialMedia" :key="index" :href="social.url" target="_blank" icon size="medium" variant="plain" color="primary">
        <v-icon :icon="`fas ${social.faIcon}`" />
      </v-btn>

      <!-- SITIO WEB DEL LABORATORIO -->
      <v-btn v-if="laboratorioSelected.website" :href="laboratorioSelected.website" target="_blank" icon size="medium" variant="plain" color="primary">
        <v-icon icon="fas fa-regular fa-globe" />
      </v-btn>

      <!-- CONTACTO - EMAIL -->
      <v-btn v-if="laboratorioSelected.contact" :href="'mailto:' + laboratorioSelected.contact.mail" target="_blank" icon size="medium" variant="plain" color="primary">
        <v-icon icon="fas fa-regular fa-envelope" />
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
};
</script>