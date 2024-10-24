<script setup lang="ts">
import URL from "@/assets/img/url-1.png";
import {useService} from "@/hook/useService.ts";
import Loader from "@/components/Loader.vue";
import Form from "@/components/Form.vue";
const {loading,error,results,shortUrl}=useService();
if (error){
  console.log(error);
}
</script>

<template>
  <v-container class="h-lg-screen" >
    <v-row class="m-auto d-flex justify-center">
      <v-col class="d-flex justify-center  align-center">
        <div class="d-flex flex-column justify-start">
          <h1>
            Get shorten links and
            <br>generate your QR
          </h1>
          <p>ShortURL is a free tool to shorten URLs and generate short links
            URL shortener allows to create a shortened link making it easy to share</p>
          <v-btn color="black" width="200" class="mt-4" >
            short yours links
          </v-btn>
        </div>
      </v-col>
      <v-col>
        <v-img :src="URL" width="400" height="400"/>
      </v-col>
    </v-row>
    <v-row class="mt-3">
      <Form width="100" variant="outlined" :handle-click="shortUrl"></Form>
      <div class="w-100 mx-auto d-flex justify-center align-center" v-if="loading">
        <Loader/>
      </div>
      <v-toolbar v-if="results&&!loading" color="transparent">
       <v-toolbar-title v-if="!results.success" class="text-red text-center" >{{results.message}}</v-toolbar-title>
        <v-toolbar-title v-else class="text-center"><a :href="`http://${results.data.shortedUrl}`" target="_blank">{{results.data.shortedUrl}}</a></v-toolbar-title>
      </v-toolbar>
    </v-row>
  </v-container>
</template>
