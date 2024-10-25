import {toRef} from "vue";
import {Url_api} from "@/types";
import {urlStore} from "@/store";

export function useService() {

    const results=toRef<Url_api>('');
    const loading=toRef<Boolean>(false);
    const error=toRef<String>('');
    const isActive=toRef<boolean>(false);
    const {addUrl}=urlStore();

    async function shortUrl(url:string) {
       try {
           loading.value = true;
          const response= await fetch('http://localhost:8000/api/url',{
               method:'POST',
               headers:{
                   "Content-Type":"application/json",
               },
               body:JSON.stringify({original_url:url})
           })
           results.value=await response.json();
           addUrl(results.value);
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
            const response=await fetch('http://localhost:8000/genQr',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({original_url:url})
            })
            if (!response.ok) {
                error.value=('Network response was not ok');
            }

            const contentType = response.headers.get('Content-Type');

            if (contentType && contentType.includes('application/json')) {
                results.value = await response.json();
                isActive.value = false;
            } else {
                const blob = await response.blob();
                results.value ={
                    image:window.URL.createObjectURL(blob)
                } ;
            }
        }catch(e){
            error.value=e.message;
        }finally {
            setInterval(()=>loading.value = false,2000);
        }
    }
    return {results,loading,error,shortUrl,generateQR,isActive};
}