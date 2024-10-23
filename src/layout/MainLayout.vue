<script setup>
import Contact from "@/components/Contact.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <v-app style="background-color: #FFEFBA" id="service">
    <v-app-bar style="background-color: var(--background-color)">
      <Header/>
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
     <Contact/>
  </v-app>
  
</template>

<style scoped>

</style>