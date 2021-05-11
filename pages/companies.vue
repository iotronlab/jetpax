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
    {{ form }}
    <v-text-field
      label="Name"
      v-model="form.name"
      placeholder="Enter your name"
    ></v-text-field>
    <v-text-field
      label="Email"
      v-model="form.email"
      placeholder="Enter your email"
    ></v-text-field>

    <v-text-field
      label="Business Name"
      v-model="form.business_name"
      placeholder="Enter your business name"
    ></v-text-field>
    <v-text-field
      label="Business Link"
      v-model="form.business_link"
      placeholder="Enter your business link"
    ></v-text-field>
    <v-text-field
      label="Contact"
      v-model="form.contact"
      placeholder="Enter your contact"
    ></v-text-field>
    <v-text-field
      label="Service"
      v-model="form.service"
      placeholder="Enter your service"
    ></v-text-field>
    <v-text-field
      label="Budget"
      v-model="form.budget"
      placeholder="Enter your budget"
    ></v-text-field>
    <v-textarea
      background-color="black"
      color="white"
      label="Details"
      v-model="form.details"
      placeholder="Enter your details"
    ></v-textarea>
    <v-btn block @click="submit"> Save </v-btn>
    <v-row no-gutters></v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: 'Anik',
        business_name: 'Iotron',
        email: 'anikadhikary94@gmail.com',
        business_link: 'Iotron.com',
        contact: '1234567890',
        service: 'Web Development',
        budget: '1000',
        details: 'Enter details',
      },
    }
  },
  methods: {
    async submit() {
      await this.$axios
        .$post('businessform', this.form)
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

