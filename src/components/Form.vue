<script lang="ts" setup>
import {toRef} from "vue";

const props = defineProps({width:String, handleClick:Function,variant:String});
const url=toRef<String>('');
</script>

<template>
  <v-form :class="`d-flex  justify-center w-md-${props.width} w-100 align-center position-relative`" @submit.prevent>
    <v-text-field placeholder="Introduce your URL" required :variant="variant" v-model="url"></v-text-field>
    <v-btn class="position-absolute right-0 top-0 mt-2  mx-2" @click="props.handleClick(url)">Get your url</v-btn>
  </v-form>
</template>

<style scoped>

</style>