<template>
    <v-card flat tile class="text-black py-12 px-5" width="100%" style="background-color:#FFEEAD">
      <v-row>
        <v-col cols="12" sm="6" md="4" class="pa-16">
          <div class="text-center">
            <p class="font-weight-bold text-h6">VueCommerce</p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-card-text class="pt-0">
            <h3>About</h3>
          </v-card-text>
          <v-card-text class="text-gray">How it Work</v-card-text>
          <v-card-text class="text-gray">Our Programs</v-card-text>
          <v-card-text class="text-gray">Promotion</v-card-text>
          <v-card-text class="text-gray">Refer a Friend</v-card-text>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-card-text class="pt-0">
            <h3>Dellvery</h3>
          </v-card-text>
          <v-card-text> Cost on Delevery</v-card-text>
          <v-card-text class="mt-n4"> Payment Method</v-card-text>
          <v-card-text class="mt-n4"> Delevery Astus</v-card-text>
          <v-card-text class="mt-n4"> Returns</v-card-text>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card-text class="white--text pt-0">
            <h3>Contact</h3>
          </v-card-text>
          <v-card-text> Ray Rendon</v-card-text>
          <v-card-text class="mt-n4">
            <a href="mailto:rayrm2021@gmail.com?subject=Interesado%20en%20sus%20servicios">
              rayrm2021@gmail.com
            </a>
          </v-card-text>
          <v-card-text class="mt-n4"><a href="https://wa.me/+5358294125">+5358294125</a></v-card-text>
        </v-col>
      </v-row>
    </v-card>
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