<template>
  <v-container>
    <h1 class="text-h4">
      <!-- <span class="light-green--text">ideas</span>
            <span class="">that</span><br /> -->
      Why choose <span class="font-weight-bold"> JETPAX</span>?
    </h1>
    <h4 class="subtitle-1">
      Here, at JETPAX, we help you monetize your social media followers, by
      connecting you with various brands and their marketing campaigns. We also
      handle all your business needs, so that you are free to do what you do
      best, that is, create awesome content.
    </h4>
    <h1 class="text-h4">Contact <span class="font-weight-bold">US.</span></h1>
    <v-row no-gutters>
      <v-col cols="12" lg="7">
        <v-container class="pa-0">
          <v-col cols="12" lg="10" class="mx-auto">
            <v-text-field
              label="Name"
              v-model="form.name"
              placeholder="Enter your name"
              shaped
              filled
            ></v-text-field>
            <v-text-field
              label="Email"
              v-model="form.email"
              placeholder="Enter your email"
              filled
              shaped
            ></v-text-field>

            <v-text-field
              label="Profile Name"
              v-model="form.profile_name"
              placeholder="Enter your social media profile name"
              filled
              shaped
            ></v-text-field>
            <v-text-field
              label="Profile Link"
              v-model="form.profile_link"
              placeholder="Enter your social media profile link"
              filled
              shaped
            ></v-text-field>
            <v-text-field
              label="Contact"
              v-model="form.contact"
              placeholder="Enter your contact"
              filled
              shaped
            ></v-text-field>
            <v-text-field
              label="Location"
              v-model="form.location"
              placeholder="Enter your location"
              filled
              shaped
            ></v-text-field>
            <v-textarea
              label="Details"
              v-model="form.details"
              placeholder="Enter your details"
              filled
              shaped
            ></v-textarea></v-col
        ></v-container>
        <v-btn block @click="submit"> Save </v-btn>
        {{ errorMessage }}</v-col
      >
      <v-col cols="12" lg="5"><v-img src="/contact-us.png"></v-img></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        profile_name: null,
        email: null,
        profile_link: null,
        contact: null,
        location: null,
        details: null,
      },
      errorMessage: null,
    }
  },
  methods: {
    async submit() {
      await this.$axios
        .$post('creatorform', this.form)
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          console.log(err)
          this.errorMessage = err.response.data
        })
    },
  },
}
</script>

