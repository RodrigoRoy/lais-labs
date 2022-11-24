<template>
  <v-footer>
    <!-- Pie de página -->
    <!-- Debe contener la siguiente información (en 3 columnas): -->
    <!-- Datos del LAIS, Licencia Creative Commons, Datos de contacto -->
    <v-row align="center" justify="center">

        <!-- Datos del LAIS -->
        <!-- TODO: Logo del LAIS, nombre, link a página web -->
        <v-col class="text-center">
            {{ new Date().getFullYear() }} — LAIS
        </v-col>

        <!-- Licencia Creative Commons -->
        <!-- TODO: Incluir licencia "Attribution-ShareAlike 4.0 International" (https://creativecommons.org/) -->
        <v-col class="text-center">
            Creative Commons Licence
        </v-col>

        <!-- Información de contacto -->
        <!-- TODO: icono email + Correo del LAIS (lais@mora.edu.mx) -->
        <v-col class="text-center">
            Contacto
        </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
  //
</script>
