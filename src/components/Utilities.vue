<script setup lang="ts">
import {ref} from "vue";
import {Utilities} from "@/types";
import Card from "@/components/Card.vue";

const items=ref<Array<Utilities>>([{
  title:"Introduzca su enlace",
  description:"copia y pega tu URL larga en el recuadro y haz clic en acortar",
  image:"",
},{
  title:"Enlace personalizado",
  description:"Haga que su enlace sea memorable, de marca y amigables con el SEO mediante alias personalizados.",
  image:"mdi mdi-link-variant",
},{
  title:"Comparta y genere su código QR",
  description:"utilice su QR generado en sus redes sociales, su sitio web o cualquier otro canal y realice un seguimiento de su rendimiento",
  image:"mdi mdi-qrcode-scan",
},
])
</script>

<template>
  <v-row class="d-flex justify-center align-center mx-auto w-100" style="background-color: var(--background-color-2)">
    <v-col v-for="item in items" :key="item.title" cols="12" md="4">
      <Card :title="item.title" :description="item.description" :icon="item.image"></Card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>