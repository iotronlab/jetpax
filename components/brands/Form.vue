<template>
  <v-container fluid>
    <h1 class="text-h4">
      <!-- <span class="light-green--text">ideas</span>
            <span class="">that</span><br /> -->
      Contact<span class="font-weight-bold">US.</span>
    </h1>
    <v-row no-gutters>
      <v-col cols="12" lg="7">
        <v-container>
          <v-col cols="12" lg="10">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:15"
            >
              <v-text-field
                label="Name"
                v-model="form.name"
                placeholder="Enter your name"
                :counter="15"
                :error-messages="errors"
                filled
                shaped
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                label="Email"
                v-model="form.email"
                placeholder="Enter your email"
                :error-messages="errors"
                filled
                shaped
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="businessName"
              rules="required"
            >
              <v-text-field
                label="Business Name"
                v-model="form.business_name"
                placeholder="Enter your business name"
                :error-messages="errors"
                filled
                shaped
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="businessLink"
              rules="required"
            >
              <v-text-field
                label="Business Link"
                v-model="form.business_link"
                placeholder="Enter your business link"
                :error-messages="errors"
                filled
                shaped
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="phoneNumber"
              rules="required"
            >
              <v-text-field
                label="Contact"
                v-model="form.contact"
                placeholder="Enter your contact"
                :error-messages="errors"
                filled
                shaped
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Service"
              rules="required"
            >
              <v-text-field
                label="Service"
                v-model="form.service"
                placeholder="Enter your service"
                :error-messages="errors"
                filled
                shaped
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Budget"
              rules="required"
            >
              <v-text-field
                label="Budget"
                v-model="form.budget"
                placeholder="Enter your budget"
                :error-messages="errors"
                filled
                shaped
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Details"
              rules="required|min:25"
            >
              <v-textarea
                label="Details"
                v-model="form.details"
                placeholder="Enter your details"
                :counter="25"
                :error-messages="errors"
                filled
                shaped
              ></v-textarea>
            </validation-provider>
            <recaptcha /><br />
            <v-btn block @click="submit"> Save </v-btn>
            <v-row no-gutters></v-row>
            {{ errorMessage }}</v-col
          ></v-container
        ></v-col
      >
      <v-col cols="12" lg="5"
        ><v-img src="/contact-us-brand.png" contain></v-img
      ></v-col> </v-row
  ></v-container>
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
      errorMessage: null,
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
          this.errorMessage = err.response.data
        })

      try {
        const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)

        // send token to server alongside your form data

        // at the end you need to reset recaptcha
        await this.$recaptcha.reset()
      } catch (error) {
        console.log('Login error:', error)
      }
    },
  },
}
</script>
