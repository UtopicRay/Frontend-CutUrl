<script setup lang="ts">
import {ref, watch} from "vue";

const drawer=ref<Boolean>(false);
const group=ref(null);
const items=ref([
  {
    title: 'Foo',
    value: 'foo',
  },
  {
    title: 'Bar',
    value: 'bar',
  },
  {
    title: 'Fizz',
    value: 'fizz',
  },
  {
    title: 'Buzz',
    value: 'buzz',
  },
])
watch(group,()=>drawer.value=false);
</script>

<template>
  <v-app-bar
      color="primary"
      prominent
  >
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>My files</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-list v-for="item in items">
      <v-list-item>{{ item.value }}</v-list-item>
    </v-list>
    <template v-if="$vuetify.display.mdAndUp">
      <v-btn icon="mdi-magnify" variant="text"></v-btn>

      <v-btn icon="mdi-filter" variant="text"></v-btn>
    </template>

    <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
  </v-app-bar>

  <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      temporary
  >
    <v-list
        :items="items"
    ></v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>