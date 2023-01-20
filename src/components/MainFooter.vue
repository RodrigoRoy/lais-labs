<template>
  <v-footer app>
    <!-- Pie de página -->
    <!-- Debe contener la siguiente información (en 3 columnas): -->
    <!-- Datos del LAIS, Licencia Creative Commons y open source, Datos de contacto -->
    <v-row align="start" justify="center" class="text-caption text--disabled font-weight-light">

        <!-- Datos del LAIS -->
        <v-col class="text-left">
          <p>
            {{ new Date().getFullYear() }} — LAIS
          <br />
            <v-icon small>fa-thin fa-envelope</v-icon> lais@mora.edu.mx
          </p>
        </v-col>

        <!-- Licencia Creative Commons y open source -->
        <v-col class="text-center">
            <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
              <img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" />
            </a>
            <!-- <br /> -->
            <!-- <p> -->
              Esta obra está bajo una <a class="text-accent" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Licencia Creative Commons Atribución-CompartirIgual 4.0 Internacional</a>.
            <!-- </p> -->
        </v-col>

        <!-- Información de contacto -->
        <v-col class="text-right">
          <p>
            Creado con Node <v-icon small>fa-brands fa-node-js</v-icon> + Vue <v-icon small>fa-brands fa-vuejs</v-icon>
          <br />
            Código fuente en <a href="https://github.com/RodrigoRoy/lais-labs/" class="text-accent">GitHub</a> <v-icon small>fa-brands fa-github</v-icon>
          </p>
        </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
  //
</script>
