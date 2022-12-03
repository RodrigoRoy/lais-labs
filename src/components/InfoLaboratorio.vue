<template>
  <v-card width="420">
    <!-- TÍTULO -->
    <template v-slot:title> {{ laboratorioSelected.name }} </template>

    <!-- SUBTÍTULO -->
    <template v-slot:subtitle> {{ laboratorioSelected.subtitle }} </template>

    <!-- DESCRIPCIÓN -->
    <template v-slot:text> {{ laboratorioSelected.description }} </template>

    <!-- PALABRAS CLAVE O KEYWORDS -->
    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip
          v-for="(keyword, index) in laboratorioSelected.keywords"
          :key="'keyword_' + index"
          >{{ keyword }}</v-chip
        >
      </v-chip-group>
    </div>

    <!-- ACCIONES DEL COMPONENTE -->
    <v-card-actions>
      <!-- REDES SOCIALES -->
      <template
        v-for="(social, index) in laboratorioSelected.socialMedia"
        :key="'social_' + index"
      >
        <v-btn :href="social.url" target="_blank">
          <v-icon x-large> {{ social.icon }} </v-icon>
        </v-btn>
      </template>

      <!-- SITIO WEB DEL LABORATORIO -->
      <template v-if="laboratorioSelected.website">
        <v-btn :href="laboratorioSelected.website" target="_blank">
          <v-icon x-large> mdi-web </v-icon>
        </v-btn>
      </template>

      <!-- CONTACTO - EMAIL -->
      <template v-if="laboratorioSelected.contact">
        <v-btn
          :href="'mailto:' + laboratorioSelected.contact.mail"
          target="_blank"
        >
          <v-icon x-large> mdi-email-open-outline </v-icon>
        </v-btn>
      </template>
    </v-card-actions>
  </v-card>

  <!-- CAROUSEL -->
  <v-layout justify-center>
    <v-carousel>

      <!-- REFERENCIA AL VIDEO -->
      <v-carousel-item>
        <iframe class="pt-16" width="375" height="315" src="https://www.youtube.com/embed/xheOSRBpfPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </v-carousel-item>

      <!-- IMÁGENES DEL LABORATORIO -->
      <!-- PENDIENTE LEER LA IMAGEN DE FORMA LOCAL EN LUGAR DE GITHUB -->
      <v-carousel-item
      v-for="(item,i) in laboratorioSelected.images.src"
      :key="i"
      :src="`https://github.com/RodrigoRoy/lais-labs/blob/master/src/assets/Laboratorios/${laboratorioSelected.images.path}/${item}?raw=true`"
    ></v-carousel-item>
    </v-carousel>
  </v-layout>
</template>

<script>
export default {
  name: "InfoLaboratorio",
  props: {
    laboratorioSelected: { type: Object }, // OBJETO CON LA INFORMACIÓN DEL LABORATORIO
  },
};
</script>