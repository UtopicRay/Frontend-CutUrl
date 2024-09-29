<script setup>
import Contact from "@/components/Contact.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <v-layout>
    <v-app-bar color="primary" prominent>
      <Header/>
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
    <!--<v-footer  style="background-color:#FFEEAD">
      <Contact/>
    </v-footer>-->
  </v-layout>
  
</template>

<style scoped>

</style>