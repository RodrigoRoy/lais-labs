<template>
  <v-footer>
    <!-- Pie de página -->
    <!-- Debe contener la siguiente información (en 3 columnas): -->
    <!-- Datos del LAIS, Licencia Creative Commons y open source, Datos de contacto -->
    <v-row align="center" justify="center" class="text-caption text-medium-emphasis">

        <!-- Datos del LAIS -->
        <!-- TODO: Logo del LAIS, nombre, link a página web -->
        <v-col class="text-left">
          <p>
            {{ new Date().getFullYear() }} — Laboratorio Audiovisual de Investigación Social (LAIS)
          </p>
          <p>
            lais@mora.edu.mx
          </p>
        </v-col>

        <!-- Licencia Creative Commons y open source -->
        <!-- TODO: Incluir licencia "Attribution-ShareAlike 4.0 International" (https://creativecommons.org/) -->
        <!-- TODO: icono Github + "Código fuente" (Incluir link a GitHub del código fuente) -->
        <v-col class="text-center">
            <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
              <img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
            </a>
            <br />
            <p>
              Esta obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Licencia Creative Commons Atribución-CompartirIgual 4.0 Internacional</a>.
            </p>
        </v-col>

        <!-- Información de contacto -->
        <!-- TODO: icono email + Correo del LAIS (lais@mora.edu.mx) -->
        <v-col class="text-right">
          <p>
            Creado con <v-icon icon="mdi:mdi-nodejs" /> <v-icon icon="mdi:mdi-vuetify" /> <v-icon icon="mdi:mdi-heart" /> 
          </p>
          <p>
              Código fuente <v-icon icon="fas fa-brands fa-github"/>
            </p>
        </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
  //
</script>
