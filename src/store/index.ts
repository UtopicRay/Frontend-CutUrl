import {defineStore} from "pinia";
import {toRef} from "vue";
import {Url_api} from "@/types";


export const urlStore=defineStore('urlStore',()=>{
 const urlList=toRef<Array>([]);
 function addUrl(url:Url_api){
     try {
         urlList.value.push("http://"+url.data.shortedUrl);
     }catch (error){
         console.log(error.message);
     }
 }
 return {urlList,addUrl}
})