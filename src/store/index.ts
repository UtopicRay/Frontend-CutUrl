import {defineStore} from "pinia";
import {toRef} from "vue";
import {Url_api} from "@/types";

export const urlStore=defineStore('urlStore',()=>{
 const urlList=toRef<Array<Url_api>>([]);
 function addUrl(url:Url_api){
     urlList.value.push(url);
 }
 return {urlList,addUrl}
})