<script setup>
import Hero from "@/components/Hero.vue";
import MainLayout from "@/layout/MainLayout.vue";
import Service from "@/components/Service.vue";
import Pricing from "@/components/Pricing.vue";
import Utilities from "@/components/Utilities.vue";

</script>

<template>
  <MainLayout>
    <Hero></Hero>
    <Utilities/>
    <Service></Service>
    <Pricing></Pricing>
  </MainLayout>
</template>
