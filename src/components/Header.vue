<script setup lang="ts">
import {ref, watch} from "vue";

const drawer=ref<Boolean>(false);
const group=ref(null);
const items=ref([
  {
    title: 'Service',
    value: '#service',
  },
  {
    title: 'QR service',
    value: '#qr',
  },
  {
    title: 'Contact',
    value: '#contact',
  },
])
watch(group,()=>drawer.value=false);
</script>

<template>
    <v-toolbar-title>CutUrl</v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-if="$vuetify.display.mdAndUp" v-for="item in items">
      <v-btn :href='item.value'>
        {{ item.title }}
      </v-btn>
    </template>
    <div v-else>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
        </template>

        <v-list style="background-color: var(--background-color)">
          <v-list-item
              v-for="(item, i) in items" :key="i"
              :href="item.value"
              :title="item.title"
          >
           </v-list-item>
        </v-list>
      </v-menu>
    </div>
</template>

<style scoped>

</style>