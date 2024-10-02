<script setup>
import URL from "@/assets/img/url-2.png"
</script>

<template>
<v-row>
  <v-col class="d-flex justify-center  align-center">
    <v-form class="d-flex flex-column justify-start">
      <v-text-field placeholder="Introduce your URL" required ></v-text-field>
      <v-btn @click="">Get your url</v-btn>
    </v-form>
  </v-col>
  <v-col>
    <v-img :src="URL" height="400" width="400"></v-img>
  </v-col>
</v-row>
</template>

<style scoped>

</style>