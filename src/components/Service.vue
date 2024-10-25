<script lang="ts" setup>
import URL from "@/assets/img/url-2.png";
import {useService} from "@/hook/useService";
import {toRef} from "vue";
import Loader from "@/components/Loader.vue";
import {urlStore} from "@/store";
import Form from "@/components/Form.vue";

const {results,error,loading,generateQR,isActive}=useService()
const checkbox=toRef<Boolean>(false)
const select=toRef<String>('');
const {urlList}=urlStore();
if (error){
  console.log(error)
}
</script>

<template>
  <v-container id="qr">
      <h2 class="text-center font-weight-black text-h4 my-4" > Get and share your QR</h2>
    <v-row>
      <v-col class="d-flex justify-center text-center text-md-left flex-column" cols="12" md="6">
        <p class="my-4">
          Boost your brand’s visibility and engagement with
          <br>our customizable QR code generator.
          <br>Quick, easy, and effective!
        </p>
        <Form width="100" :handle-click="generateQR" title="Get your QR" :checkbox="checkbox">
          <div class="w-100 d-flex justify-center " v-if="checkbox">
            <v-autocomplete
                label="Autocomplete"
                v-model="select"
                :items="urlList"
            ></v-autocomplete>
            <v-btn class=" mt-2  mx-2" @click="generateQR(select)">Get your QR</v-btn>
          </div>
          <v-checkbox v-model="checkbox" label="Want use previous url?"></v-checkbox>
        </Form>
      </v-col>
      <v-col>
        <v-img :src="URL" class="mx-auto" height="400" width="400" v-if="!isActive&&!loading"/>
        <div class="w-100 mx-auto d-flex justify-center align-center" v-if="loading">
          <Loader/>
        </div>
        <v-img :src="results.image"  width="300" height="300" class="mx-auto" v-if="results.image&&loading==false" />
      </v-col>
    </v-row>
    <v-toolbar v-if="results&&!loading" color="transparent">
      <v-toolbar-title v-if="!results.success" class="text-red text-center" >{{results.message}}</v-toolbar-title>
    </v-toolbar>
  </v-container>
</template>

<style scoped>

</style>