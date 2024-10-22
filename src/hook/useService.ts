import {toRef} from "vue";
import {Url_api} from "@/types";

export function useService() {

    const results=toRef<Url_api>('');
    const loading=toRef<Boolean>(false);
    const error=toRef<String>('');

    async function shortUrl(url:string) {
       try {
           loading.value = true;
           await fetch('http://localhost:8000/api/url',{
               method:'POST',
               headers:{
                   "Content-Type":"application/json",
               },
               body:JSON.stringify({original_url:url})
           }).then(response=>response.json())
               .then(data=>results.value=data);
       }catch(e){
           error.value=e.message;
       }finally {
           setInterval(()=>loading.value = false,3000);
       }
   }

    return {results,loading,error,shortUrl}
}