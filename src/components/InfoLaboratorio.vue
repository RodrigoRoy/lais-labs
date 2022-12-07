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
    <v-carousel hide-delimiters show-arrows="hover" cycle height="400">      
      <!-- IMÁGENES DEL LABORATORIO -->
      <!-- PENDIENTE LEER LA IMAGEN DE FORMA LOCAL EN LUGAR DE GITHUB -->
      <v-carousel-item
      v-for="(item,i) in laboratorioSelected.images.src"
      :key="i"
      :src="`https://github.com/RodrigoRoy/lais-labs/blob/master/src/assets/Laboratorios/${laboratorioSelected.images.path}/${item}?raw=true`"
      ></v-carousel-item>
    </v-carousel>
    
    <!-- REFERENCIA AL VIDEO -->
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xheOSRBpfPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <!-- ACCIONES DEL COMPONENTE -->
    <v-card-actions>
      <!-- REDES SOCIALES -->
      <template
        v-for="(social, index) in laboratorioSelected.socialMedia"
        :key="'social_' + index"
      >
        <v-btn :href="social.url" target="_blank" icon size="x-large" variant="plain" color="black">
          <v-icon> {{ social.icon }} </v-icon>
        </v-btn>
      </template>

      <!-- SITIO WEB DEL LABORATORIO -->
      <template v-if="laboratorioSelected.website">
        <v-btn :href="laboratorioSelected.website" target="_blank" icon size="x-large" variant="plain" color="black">
          <v-icon> mdi-web </v-icon>
        </v-btn>
      </template>

      <!-- CONTACTO - EMAIL -->
      <template v-if="laboratorioSelected.contact">
        <v-btn
          :href="'mailto:' + laboratorioSelected.contact.mail"
          target="_blank"
          icon size="x-large" 
          variant="plain" 
          color="black"
        >
          <v-icon> mdi-email-open-outline </v-icon>
        </v-btn>
      </template>
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