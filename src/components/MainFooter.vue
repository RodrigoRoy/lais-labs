<template>
  <!-- Pie de página -->
  <v-footer >
    <v-row align="start" justify="center" class="text-caption text--disabled font-weight-light">

        <!-- Año | Correo del LAIS -->
        <v-col cols="12" sm="3" order="2" order-sm="1" class="text-left d-none d-sm-block">
          <p>
            {{ new Date().getFullYear() }} — LAIS
          <br />
            <v-icon small class="mr-1">fa-thin fa-envelope</v-icon> <a href="mailto:lais@mora.edu.mx">lais@mora.edu.mx</a>
          </p>
        </v-col>

        <!-- Licencia Creative Commons (tamaño pequeño) -->
        <v-col cols="12" sm="6" order="1" order-sm="2" class="text-center">
            <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
              <img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" />
            </a>
              Esta obra está bajo una <a class="text-accent" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Licencia Creative Commons Atribución-CompartirIgual 4.0 Internacional</a>.
        </v-col>

        <!-- Información open source -->
        <v-col cols="12" sm="3" order="3" class="text-right d-none d-sm-block">
          <p>
            Creado con Node <v-icon small>fa-brands fa-node-js</v-icon> + Vue <v-icon small>fa-brands fa-vuejs</v-icon>
          <br />
            Código fuente en <a href="https://github.com/RodrigoRoy/lais-labs/" class="text-accent">GitHub</a> <v-icon small>fa-brands fa-github</v-icon>
          </p>
        </v-col>
    </v-row>
  </v-footer>
</template>

