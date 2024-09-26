import {onBeforeMount, ref} from "vue";

export function FechtData(url) {
    let post = ref([])
    const fecht=async () => {
        try {
            let response = await fetch(url)
            post.value = await response.json()
        } catch (error) {
            console.log(error)
        }

    }
    fecht()
    return {post}
}
