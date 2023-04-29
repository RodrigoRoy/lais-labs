<template>
  <!-- Información de un laboratorio -->
  <v-card color="primary" height="500">
    <!-- <p class="text--disabled font-weight-thin text-caption text-uppercase">Presentación en el Encuentro</p> -->
    <!-- No se usan v-card-title/subtitle para evitar wrap a una línea, impidiendo leer el nombre y ubicación del laboratorio -->
    <v-card-text class="pb-0">
      <!-- VIDEO -->
      <iframe v-if="laboratorio.video" width="100%" height="460" class="mt-0" :src="laboratorio.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

  data: () => ({
    // Ruta del directorio /public
    publicPath: process.env.BASE_URL,
  }),
};
</script>

<style scoped>
iframe[src*=youtube]
{
  max-width:100%;
  max-height:100%;
}
</style>