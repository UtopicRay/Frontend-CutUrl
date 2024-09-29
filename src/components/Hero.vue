<script setup>
import URL from "@/assets/img/img-1.jpeg"
</script>

<template>
    <v-row class="m-auto d-flex justify-center">
      <v-col>
        <h1>
          Get shorten links and generate your QR
        </h1>
        <v-btn color="black" class="mt-4">
          short yours links
        </v-btn>
      </v-col>
      <v-col>
        <v-img :src="URL" width="400" height="400"/>
      </v-col>
    </v-row>
</template>
