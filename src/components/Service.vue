<script setup>
import URL from "@/assets/img/img-1.jpeg"
</script>

<template>
<v-row>
  <v-col>
    <v-form>
      <v-text-field placeholder="Introduce your URL" required></v-text-field>
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