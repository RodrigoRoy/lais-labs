<template>
  <!-- Información de un laboratorio -->

  <v-card color="primary">
    <!-- No se usan v-card-title/subtitle para evitar wrap a una línea, impidiendo leer el nombre y ubicación del laboratorio -->

    <v-card-text class="pb-0">

      <!-- TÍTULO -->
      <p class="text-h6 text--primary">
        {{ laboratorio.name }} 
        <!-- <v-icon x-small v-if="laboratorio.verified" color="green" disabled>fa-check</v-icon> -->
      </p>
      
      <!-- SUBTÍTULO -->
      <p class="font-weight-medium">
        {{ laboratorio.fullLocation.name }}
      </p>

      <!-- DESCRIPCIÓN -->
      <p class="text--primary">
        {{ laboratorio.description }}
      </p>

      <!-- PALABRAS CLAVE O KEYWORDS -->
      <p class="pr-4">
        <v-chip v-for="(keyword, index) in laboratorio.keywords" :key="index" outlined color="accent" class="ma-1" size="small">
          {{ keyword }}
        </v-chip>
      </p>

    </v-card-text>

    <!-- ACCIONES DEL COMPONENTE -->
    <v-card-actions>

      <!-- REDES SOCIALES -->
      <v-tooltip top v-for="(social, index) in laboratorio.socialMedia" :key="index">
        <template v-slot:activator="{ on, attrs }">
          <v-btn :href="social.url" target="_blank" icon size="medium" variant="plain" color="accent" v-bind="attrs" v-on="on">
            <v-icon>{{social.faIcon}}</v-icon>
          </v-btn>
        </template>
        <span>{{ capitalize(social.type) }}</span>
      </v-tooltip>

      <!-- SITIO WEB -->
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-if="laboratorio.website" :href="laboratorio.website" target="_blank" icon size="medium" variant="plain" color="accent" v-bind="attrs" v-on="on">
            <v-icon>fa-globe</v-icon>
          </v-btn>
        </template>
        <span>Sitio web</span>
      </v-tooltip>

      <!-- EMAIL -->
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-if="laboratorio.contact.mail" :href="`mailto:${laboratorio.contact.mail}`" target="_blank" icon size="medium" variant="plain" color="accent" v-bind="attrs" v-on="on">
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
  name: "LabText",
  
  props: {
    // Información completa del laboratorio (@see src/data/labs.mjs)
    laboratorio: { type: Object }, 
  },

  methods: {
    /**
     * Pone en mayúscula la primer letra de un texto o palabra
     * @param {string} text - Texto o palabra a modificar
     * @return {string} Mismo texto o palabra con la primer letra en mayúscula
     */
    capitalize(text){
      return `${text[0].toUpperCase()}${text.substr(1)}`
    }
  },
};
</script>