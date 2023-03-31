<template>
  <!-- Información de un laboratorio -->
  <v-card color="primary" height="500">
    <!-- No se usan v-card-title/subtitle para evitar wrap a una línea, impidiendo leer el nombre y ubicación del laboratorio -->
    <v-card-text class="pb-0">
      <!-- CARRUSEL CON FOTOS -->
      <v-carousel hide-delimiters :show-arrows="laboratorio.images.src.length > 1" :show-arrows-on-hover="laboratorio.images.src.length > 1" cycle height="470" v-show="laboratorio.images.src.length > 0" class="my-2">
        <!-- ICONOS PERSONALIZADOS ANTERIOR/SIGUIENTE -->
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
        <v-carousel-item v-for="(item,i) in laboratorio.images.src" :key="i" :src="`${publicPath}Laboratorios/${laboratorio.images.path}/${item}`" contain></v-carousel-item>
      </v-carousel>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "LabPicture",
  
  props: {
    // Información completa del laboratorio (@see src/data/labs.mjs)
    laboratorio: { type: Object }, 
  },

  data: () => ({
    // Ruta del directorio /public
    publicPath: process.env.BASE_URL,
  }),
};
</script>