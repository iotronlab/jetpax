<template>
  <v-container fluid class="pa-0">
    <v-img src="/land.png" max-height="650" contain>
      <v-row no-gutters class="fill-height text-center">
        <v-col cols="12">
          <h1 class="text-button">Digital Marketing Agency connecting</h1>
        </v-col>
        <v-col cols="12" align-self="end">
          <h1 class="text-h2">
            <span class="neon-agency">Brands</span> -&-
            <span class="neon-creator">Influencers</span>
          </h1>

          <v-row no-gutters class="mt-12 mb-6">
            <v-col cols="12" lg="6">
              <v-btn class="ma-2 btn-agency" large to="companies" dark rounded>
                <v-icon large class="mr-2 neon-agency">
                  mdi-arrow-left-circle-outline
                </v-icon>
                for companies</v-btn
              ></v-col
            >
            <v-col cols="12" lg="6">
              <v-btn
                class="ma-2 btn-creator"
                large
                to="creators"
                alt="creators"
                dark
                rounded
              >
                for creators
                <v-icon large class="ml-2 neon-creator">
                  mdi-arrow-right-circle-outline
                </v-icon>
              </v-btn></v-col
            ></v-row
          ></v-col
        >
      </v-row></v-img
    >
    <v-row no-gutters justify="center" class="mb-6">
      <v-col cols="10" class="mt-6 text-center">
        <h4 class="text-button" style="line-height: 150%">
          With a hunger and thirst for innovation, our agency paves the way
          <span class="agency--text"> brands</span> and
          <span class="creator--text">influencers</span> connect with their
          <span class="agency--text"> audiences</span> in the digital space. We
          are a holistic
          <span class="agency--text">digital marketing agency </span> covering
          all your marketing and promotional needs. We at JETPAX aim to be the
          biggest and best
          <span class="creator--text">community of influencers</span>.
        </h4>
        <v-btn class="mt-4 btn-creator" to="creative-network" large dark
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

.btn-creator {
  transition: all 0.5s 0.1s ease-in-out;
  background-size: auto 200%;
  box-shadow: 0 0 10px #9333ea;
  background-image: linear-gradient(
    to bottom,
    #c084fc 0%,
    #9333ea 51%,
    #c084fc 100%
  );
}

.btn-creator:hover {
  background-position: center bottom; /* change the direction of the change here */
  box-shadow: 0 0 15px #9333ea;
}

.btn-agency {
  transition: all 0.5s ease-in-out 0.1s;
  background-size: auto 200%;
  box-shadow: 0 0 10px #6366f1;
  background-image: linear-gradient(
    to bottom,
    #6366f1 0%,
    #4f46e5 51%,
    #6366f1 100%
  );
}

.btn-agency:hover {
  background-position: center bottom; /* change the direction of the change here */
  box-shadow: 0 0 15px #6366f1;
}

.neon-creator {
  color: #fff;
  -webkit-animation: neon-creator 1.5s ease-in-out infinite alternate;
  -moz-animation: neon-creator 1.5s ease-in-out infinite alternate;
  animation: neon-creator 1.5s ease-in-out infinite alternate;
}

.neon-agency {
  color: #fff;
  -webkit-animation: neon-agency 1.5s ease-in-out infinite alternate;
  -moz-animation: neon-agency 1.5s ease-in-out infinite alternate;
  animation: neon-agency 1.5s ease-in-out infinite alternate;
}

@keyframes neon-creator {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #9333ea, 0 0 20px #9333ea,
      0 0 25px #d946ef;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 7px #fff, 0 0 20px #d946ef, 0 0 25px #d946ef,
      0 0 30px #d946ef;
  }
}

@keyframes neon-agency {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #6366f1, 0 0 20px #6366f1,
      0 0 25px #60a5fa;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 7px #fff, 0 0 20px #60a5fa, 0 0 25px #60a5fa,
      0 0 30px #60a5fa;
  }
}
</style>
