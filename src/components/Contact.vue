<template>
  <v-footer border>
    <div>
      <h2 class="text-gray-300 ">Ray Rendon</h2>
      <div class="flex gap-2">
        <a href="https://www.linkedin.com/in/ray-rendon-mesa-1948b7260">
          <v-icon icon="mdi mdi-linkedin" class="text-white text-4xl hover:scale-125 transition-all duration-200 size-10"></v-icon>
        </a>
        <a href="https://github.com/UtopicRay">
          <v-icon icon="mdi mdi-github" class="text-white text-4xl hover:scale-125 transition-all duration-200 size-10"></v-icon>
        </a>
      </div>
    </div>
    <div>
      <div class="flex items-center">
        <a
            class="flex justify-center items-center text-white  hover:scale-110 transition-all duration-200  underline"
            href="mailto:rayrm2021@gmail.com?subject=Interesado%20en%20sus%20servicios"
        >
          rayrm2021@gmail.com
          <span>
              <v-icon icon="mdi mdi-email" class="text-gray-500 text-4xl mx-2"></v-icon>
            </span>
        </a>
      </div>
    </div>
  </v-footer>
</template>

<script setup>

</script>

<style scoped>

.social-link :deep(.v-icon){
  text-decoration: none;
  transition: .2s ease-in-out;
}

  &:hover{
    color: rgba(25, 118, 210, 1);
  }

</style>