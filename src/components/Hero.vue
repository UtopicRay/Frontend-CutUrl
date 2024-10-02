<script setup>
import URL from "@/assets/img/url-1.png"
</script>

<template>
  <v-container class="h-lg-screen">
    <v-row class="m-auto d-flex justify-center">
      <v-col class="d-flex justify-center  align-center">
        <div class="d-flex flex-column justify-start">
          <h1>
            Get shorten links and
            <br>generate your QR
          </h1>
          <v-btn color="black" width="200" class="mt-4">
            short yours links
          </v-btn>
        </div>
      </v-col>
      <v-col>
        <v-img :src="URL" width="400" height="400"/>
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-form class="d-flex  justify-center w-100 align-center position-relative">
        <v-text-field placeholder="Introduce your URL" required variant="outlined"></v-text-field>
        <v-btn @click="" class="position-absolute right-0 top-0 mt-2  mx-2">Get your url</v-btn>
      </v-form>
    </v-row>
  </v-container>
</template>
