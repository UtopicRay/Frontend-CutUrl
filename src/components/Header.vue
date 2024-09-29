<script setup lang="ts">
import {ref, watch} from "vue";

const drawer=ref<Boolean>(false);
const group=ref(null);
const items=ref([
  {
    title: 'Service',
    value: 'service',
  },
  {
    title: 'Pricing',
    value: 'pricing',
  },
  {
    title: 'Contact',
    value: 'Contact',
  },
])
watch(group,()=>drawer.value=false);
</script>

<template>
    <v-toolbar-title>CutUrl</v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-if="$vuetify.display.mdAndUp" v-for="item in items">
      <v-btn>{{ item.value }}</v-btn>
    </template>
    <div v-else>
      <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    </div>
</template>

<style scoped>

</style>