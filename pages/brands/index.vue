<template>
  <v-container class="body-bg">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12" lg="5">
        <v-card dark class="pa-4 card-overlap">
          <h1 class="text-h4 mb-2">
            <!-- <span class="light-green--text">ideas</span>
            <span class="">that</span><br /> -->
            Why choose<span
              class="font-weight-bold"
              style="letter-spacing: 0.2rem"
            >
              JETPAX</span
            >?
          </h1>
          <h2 class="subtitle-1 mb-4">
            Grow your brand with dedicated marketing campaigns run by our
            influencer network. We approach every task intending to formulate
            and build strategies and campaigns tailor-made for our partners,
            aiming to push every possible limit of experience in this
            digital-first world with our vast creative and influencer network.
            As a digital marketing agency, we plan creative and budget-friendly
            influencer campaign that reaches the right audience.
          </h2>
          <v-row no-gutters justify="center">
            <v-btn to="#services" class="ma-1 btn-agency"
              ><strong>view services</strong></v-btn
            >
            <v-btn to="order" class="ma-1 btn-creator" dark>
              <strong>View influencers</strong>
            </v-btn>
          </v-row>
        </v-card></v-col
      >
      <v-col cols="12" lg="5">
        <v-img :src="require('@/assets/img/brand-benefit.png')" contain></v-img>
      </v-col>
    </v-row>

    <LazyBrandsCards id="services" />
    <!-- <LazyBrandsForm /> -->
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Business Services',
      // meta: [
      //   // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     content: 'My custom description'
      //   }
      // ]
    }
  },
}
</script>
<style>
.body-bg {
  background-image: url('@/assets/img/bg.png');
  background-repeat: repeat-y;
}
.card-overlap {
  border-radius: 1rem !important;
  background-color: rgba(54, 34, 68, 0.7) !important;
  backdrop-filter: blur(10px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(10px) saturate(180%) !important;
}
</style>
