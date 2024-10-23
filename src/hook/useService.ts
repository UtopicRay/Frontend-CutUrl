import {ref, toRef} from "vue";
import {Url_api} from "@/types";
import {urlStore} from "@/store";

export function useService() {

    const results=toRef<Url_api>('');
    const loading=toRef<Boolean>(false);
    const error=toRef<String>('');
    const isActive=toRef<boolean>(false);
    const image=ref();
    const store=urlStore();

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
               .then(data=> {
                   results.value = data
                   store.addUrl(results);
               });
       }catch(e){
           error.value=e.message;
       }finally {
           setInterval(()=>loading.value = false,2000);
       }
   }

    async function generateQR(url:string) {
        try {
            isActive.value = true;
            loading.value = true;
            await fetch('http://localhost:8000/genQr',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({original_url:url})
            }).then(response=>response.blob())
                .then(data=> {
                    console.log(data)
                    image.value = URL.createObjectURL(data);
                });
        }catch(e){
            error.value=e.message;
        }finally {
            setInterval(()=>loading.value = false,2000);
        }
    }
    return {results,loading,error,shortUrl,generateQR,image,isActive};
}