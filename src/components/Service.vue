<script lang="ts" setup>
import URL from "@/assets/img/url-2.png";
import {useService} from "@/hook/useService";
import {toRef} from "vue";
import Loader from "@/components/Loader.vue";
const url=toRef<String>('');
const {image,error,loading,generateQR,isActive}=useService()

if (error){
  console.log(error)
}
</script>

<template>
  <v-container id="qr">
    <v-toolbar color="transparent" density="comfortable">
      <v-toolbar-title class="text-center font-weight-black text-h4" > Get and share your QR</v-toolbar-title>
    </v-toolbar>
    <v-row>
      <v-col class="d-flex justify-center text-center text-md-left flex-column">
        <p class="my-4">
          Boost your brand’s visibility and engagement with
          <br>our customizable QR code generator.
          <br>Quick, easy, and effective!
        </p>
        <v-form class="d-flex flex-column justify-start align-center align-md-start mx-auto w-100">
          <v-text-field class="w-75" placeholder="Introduce your URL" required v-model="url"></v-text-field>
          <v-btn @click="generateQR(url)" max-width="200">Get your url</v-btn>
        </v-form>
      </v-col>
      <v-col>
        <v-img :src="URL" height="400" width="400" v-if="!isActive"/>
        <div class="w-100 mx-auto d-flex justify-center align-center" v-if="loading">
          <Loader/>
        </div>
        <v-img :src="image"  width="300" height="300" class="w-100" v-if="image" />
      </v-col>
    </v-row>
    <v-toolbar v-if="image&&!loading" color="transparent">
      <v-toolbar-title v-if="!image.success" class="text-red text-center" >{{image.message}}</v-toolbar-title>
    </v-toolbar>
  </v-container>
</template>

<style scoped>

</style>