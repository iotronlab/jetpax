<template>
  <v-container>
    <h1 class="text-h4">
      <!-- <span class="light-green--text">ideas</span>
            <span class="">that</span><br /> -->
      Why choose <span class="font-weight-bold"> JETPAX</span>?
    </h1>
    <h4 class="subtitle-1 mb-4">
      Grow your brand with dedicated marketing campaigns run by our influencer
      network. We approach every task intending to formulate and build
      strategies and campaigns tailor-made for our partners, aiming to push
      every possible limit of experience in this digital-first world with our
      vast creative and influencer network. As a digital marketing agency, we
      plan creative and budget-friendly influencer campaign that reaches the
      right audience.
    </h4>
    <h1 class="text-h4">
      <!-- <span class="light-green--text">ideas</span>
            <span class="">that</span><br /> -->
      Contact<span class="font-weight-bold">US.</span>
    </h1>
    {{ name }}<br />{{ email }}
    <v-text-field
      label="Name"
      v-model="name"
      placeholder="Enter your name"
    ></v-text-field>
    <v-text-field
      label="Email"
      v-model="email"
      placeholder="Enter your email"
    ></v-text-field>
    <v-row no-gutters></v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: 'Anik',
      business_name: 'Iotron',
      email: 'anikadhikary94@gmail.com',
    }
  },
}
</script>

