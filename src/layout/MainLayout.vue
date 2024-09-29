<script setup>
import Contact from "@/components/Contact.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <v-app>
    <v-app-bar style="background-color: var(--background-color)" prominent>
      <Header/>
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
    <v-footer >
      <Contact/>
    </v-footer>
  </v-app>
  
</template>

<style scoped>

</style>