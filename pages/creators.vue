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
    <h1 class="text-h4">
      Contact <span class="font-weight-bold">US.</span>
    </h1>
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
      v-model="form.profile_name"
      placeholder="Enter your profile name"
    ></v-text-field>
    <v-text-field
      label="Business Link"
      v-model="form.profile_link"
      placeholder="Enter your profile link"
    ></v-text-field>
    <v-text-field
      label="Contact"
      v-model="form.contact"
      placeholder="Enter your contact"
    ></v-text-field>
    <v-text-field
      label="Location"
      v-model="form.location"
      placeholder="Enter your location"
    ></v-text-field>
    <v-textarea
      color="white"
      label="Details"
      v-model="form.details"
      placeholder="Enter your details"
    ></v-textarea>
    <v-btn block @click="submit"> Save </v-btn>
    {{ errorMessage }}
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: 'Rahul',
        profile_name: 'Iotron',
        email: 'abcd@mail.com',
        profile_link: 'Iotron.com',
        contact: '1234567890',
        location: 'Asia',
        details: 'Enter details',
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

