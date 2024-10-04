<script setup lang="ts">
import {ref} from "vue";
import {Utilities} from "@/types";
import Card from "@/components/Card.vue";

const items=ref<Array<Utilities>>([{
  title:"Easy",
  description:"CutUrl is easy and fast, enter the long link to get your shortened link",
  image:"mdi mdi-thumb-up",
},{
  title:"Shortened",
  description:"Use any link, no matter what size",
  image:"mdi mdi-link-variant",
},{
  title:"Enhanced User Experience",
  description:"every link and QR code is optimized for reliability and compatibility across all devices",
  image:"mdi mdi-qrcode-scan",
},
])
</script>

<template>
  <v-container>
    <v-toolbar color="transparent">
      <v-toolbar-title class="text-center font-weight-black text-h4"> Utilities</v-toolbar-title>
    </v-toolbar>
    <v-row class="d-flex justify-center align-center mx-auto w-100">
      <v-col v-for="item in items" :key="item.title" cols="12" md="4">
        <Card :title="item.title" :description="item.description" :icon="item.image"></Card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>