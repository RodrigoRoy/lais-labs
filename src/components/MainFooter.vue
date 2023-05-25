<template>
  <!-- Pie de página -->
  <v-footer >
    <v-row align="start" justify="center" class="text-caption text--disabled font-weight-light mb-0">

        <!-- Año | Correo del LAIS -->
        <v-col cols="12" sm="2" order="2" order-sm="1" class="text-left d-none d-sm-block">
          <p>
            {{ new Date().getFullYear() }} — LAIS
          </p>
        </v-col>

        <!-- Licencia Creative Commons (tamaño pequeño) -->
        <v-col cols="12" sm="8" order="1" order-sm="2" class="text-center">
          <!-- <div>
            Si estás interesada/o en incorporar un laboratorio, contáctanos por <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfOb4SGeQPUwgBr4G1Y9ltM8UiEIJx08lxtyeTkdKkWnq_Cg/viewform?usp=sf_link" target="_blank" class="accent--text">formulario</a>.
          </div> -->

          <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
            <img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" />
          </a>
            Esta obra está bajo una <a class="accent--text" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Licencia Creative Commons Atribución-CompartirIgual 4.0 Internacional</a>.
        </v-col>

        <!-- Información open source -->
        <v-col cols="12" sm="2" order="3" class="text-right d-none d-sm-block">
          <p>
            <a href="https://github.com/RodrigoRoy/lais-labs/"><v-icon>fa-brands fa-github</v-icon></a>
          </p>
        </v-col>
    </v-row>
  </v-footer>
</template>

