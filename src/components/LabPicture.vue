<template>
  <!-- Información de un laboratorio -->
  <v-card color="primary" height="400" class="d-flex align-center justify-center">
    <p class="text--disabled font-weight-thin text-caption text-uppercase" id="background-text">Imágenes del laboratorio</p>
    <!-- No se usan v-card-title/subtitle para evitar wrap a una línea, impidiendo leer el nombre y ubicación del laboratorio -->
    <v-card-text class="pb-0">
      <!-- CARRUSEL CON FOTOS -->
      <v-carousel hide-delimiters :show-arrows="laboratorio.images.src.length > 1" :show-arrows-on-hover="laboratorio.images.src.length > 1" cycle height="350" v-show="laboratorio.images.src.length > 0" class="my-2">
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

<style>
/* Usar en conjunto con background-text (aparentemente no es necesario) */
#container {
  position: relative;
}

/* Esto evita tener espacio extra solo para incluir el títular */
#background-text {
  position: absolute;
  top: 5px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
}
</style>