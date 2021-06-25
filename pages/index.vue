<template>
  <v-container fluid class="pa-0">
    <v-img src="/land.png" max-height="750" contain>
      <v-row no-gutters>
        <!-- <v-col cols="12" style="height: 160px">
          <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="star"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
          >
          </vue-particles>
        </v-col> -->
        <v-col class="text-center" cols="12">
          <h1 class="text-button mt-10">
            <!-- <span class="light-green--text">ideas</span>
            <span class="">that</span><br /> -->
            <span>Digital Marketing Agency connecting</span>
          </h1>
          <h1 class="text-h2">
            <!-- <span class="light-green--text">ideas</span>
            <span class="">that</span><br /> -->
            <span class="">Brands -&- Influencers </span>
          </h1>
          <!-- <h4 class="text-subtitle-2">
            A Progressive Web Agency that solves all your design and development
            needs.
          </h4> -->
          <v-row no-gutters class="mt-12 mb-6">
            <v-col cols="12" lg="6">
              <v-btn class="mx-2" text large to="companies">
                <v-icon x-large class="mr-2">
                  mdi-arrow-left-circle-outline
                </v-icon>
                for companies</v-btn
              ></v-col
            >
            <v-col cols="12" lg="6">
              <h1 class="text-h2 text-left">
                <!-- <span class="light-green--text">ideas</span>
            <span class="">that</span><br /> -->
                <span class="font-weight-bold"></span>
              </h1>
              <v-btn class="mx-2" text large to="creators">
                for creators
                <v-icon x-large class="ml-2">
                  mdi-arrow-right-circle-outline
                </v-icon>
              </v-btn></v-col
            ></v-row
          ></v-col
        >
      </v-row></v-img
    >
    <v-row no-gutters justify="center">
      <v-col cols="10" class="mt-6 text-center">
        <h4 class="text-overline" style="line-height: 150%">
          With a hunger and thirst for innovation, our agency paves the way
          <span class="brand--text"> brands</span> and
          <span class="creator--text">influencers</span> connect with their
          <span class="agency--text"> audiences</span> in the digital space. We
          are a holistic
          <span class="agency--text">digital marketing agency </span> covering
          all your marketing and promotional needs. We at JETPAX aim to be the
          biggest and best
          <span class="creator--text">community of influencers</span>.
        </h4>
        <v-btn class="mt-4" to="creative-network"
          >Visit influencer network</v-btn
        >
      </v-col></v-row
    >
  </v-container>
  <!-- <v-col cols="12" class="pa-2">
          <h1 class="text-h3 text-right lime--text font-weight-bold">
            Your Partner in Creating and Evolving YOUR BRAND.
          </h1>
          <h4 class="text-subtitle-2 text-right lime-lighten-1--text">
            Grow your brand with dedicated marketing campaigns run by our
            influencer network.
          </h4></v-col
        > -->
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
}
</script>
<style scoped>
.landing-image {
  background-image: url('/land.jpg');
  background-position: center;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
