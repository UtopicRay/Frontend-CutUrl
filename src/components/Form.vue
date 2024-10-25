<script lang="ts" setup>
import {toRef} from "vue";

const props = defineProps({width:String, handleClick:Function,variant:String,title:String,checkbox:Boolean});
const url=toRef<String>('');
</script>

<template>
  <v-form :class="`d-flex flex-column justify-center w-md-${props.width} w-100 align-center`" @submit.prevent>
    <div class="position-relative w-100" v-if="!props.checkbox">
      <v-text-field placeholder="Introduce your URL" required :variant="variant" v-model="url"></v-text-field>
      <v-btn class="position-absolute  right-0 top-0 mt-2  mx-2" @click="props.handleClick(url)">{{props.title}}</v-btn>
    </div>
    <slot></slot>
    </v-form>
</template>

<style scoped>

</style>