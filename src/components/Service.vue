<script lang="ts" setup>
import URL from "@/assets/img/url-2.png";
import {useService} from "@/hook/useService";
import {toRef, watch} from "vue";
import Loader from "@/components/Loader.vue";
import {urlStore} from "@/store";
import Form from "@/components/Form.vue";
const url=toRef<String>('');
const {results,error,loading,generateQR,isActive}=useService()
const {urlList}=urlStore();
if (error){
  console.log(error)
}
watch(urlList,()=>{
  console.log(urlList)
})
</script>

<template>
  <v-container id="qr">
      <h2 class="text-center font-weight-black text-h4 my-4" > Get and share your QR</h2>
    <v-row>
      <v-col class="d-flex justify-center text-center text-md-left flex-column">
        <p class="my-4">
          Boost your brand’s visibility and engagement with
          <br>our customizable QR code generator.
          <br>Quick, easy, and effective!
        </p>
        <Form width="75" :target="url" :handle-click="generateQR"></Form>
      </v-col>
      <v-col>
        <v-img :src="URL" height="400" width="400" v-if="!isActive&&!loading"/>
        <div class="w-100 mx-auto d-flex justify-center align-center" v-if="loading">
          <Loader/>
        </div>
        <v-img :src="results.image"  width="300" height="300" class="w-100" v-if="results.image&&loading==false" />
      </v-col>
    </v-row>
    <v-toolbar v-if="results&&!loading" color="transparent">
      <v-toolbar-title v-if="!results.success" class="text-red text-center" >{{results.message}}</v-toolbar-title>
    </v-toolbar>
  </v-container>
</template>

<style scoped>

</style>