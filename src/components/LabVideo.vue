<template>
  <!-- Información de un laboratorio -->
  <v-card color="primary" height="400" class="d-flex align-center justify-center">
    <p class="text--disabled font-weight-thin text-caption text-uppercase" id="background-text">Video de presentación</p>
    <!-- No se usan v-card-title/subtitle para evitar wrap a una línea, impidiendo leer el nombre y ubicación del laboratorio -->
    <v-card-text class="pb-0">
      <!-- VIDEO -->
      <iframe v-show="laboratorio.video" width="100%" height="350" class="mt-0" :src="laboratorio.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: relative; z-index: 1;"></iframe>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "LabVideo",
  
  props: {
    // Información completa del laboratorio (@see src/data/labs.mjs)
    laboratorio: { type: Object }, 
  },
  
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