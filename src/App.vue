<script setup>

import Header from "@/components/Header.vue";
import Contact from "@/components/Contact.vue";
import Hero from "@/components/Hero.vue";
import Pricing from "@/components/Pricing.vue";
</script>

    <template>
      <v-layout class="rounded rounded-md">
        <Header/>
        <v-main class="d-flex align-center justify-center" >
         <Hero/>
          <Pricing></Pricing>
        </v-main>
      <Contact/>
      </v-layout>
    </template>
