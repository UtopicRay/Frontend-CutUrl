<script setup lang="ts">

const props=defineProps({title:String,description:String,icon:String});
</script>

<template>
<v-card class="mx-auto" height="180" max-width="300" style="background-color: var(--background-color)">
  <v-card-title>
    <div class="d-flex flex-column justify-center align-center">
      <v-icon :icon="icon" size="x-large" class="bg-amber-accent-4 pa-7 rounded-circle"/>
      {{props.title}}
    </div>
  </v-card-title>
  <v-card-text>
    {{props.description}}
  </v-card-text>
  </v-card>
</template>

<style scoped>

</style>