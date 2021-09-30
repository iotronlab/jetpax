<template>
  <v-container>
    <h1 class="text-h4" id="about">About Us</h1>
    <v-divider class="my-2"></v-divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue
      neque gravida in. Nunc sed blandit libero volutpat. Platea dictumst
      vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Nulla
      porttitor massa id neque aliquam vestibulum morbi blandit cursus. Eget
      magna fermentum iaculis eu. Iaculis at erat pellentesque adipiscing
      commodo elit at imperdiet dui. Morbi tempus iaculis urna id volutpat lacus
      laoreet non curabitur. In fermentum et sollicitudin ac orci phasellus.
      Neque viverra justo nec ultrices dui sapien. Mus mauris vitae ultricies
      leo integer. Lectus quam id leo in vitae turpis massa sed. In fermentum
      posuere urna nec. Sed felis eget velit aliquet sagittis id consectetur
      purus. Tempor orci dapibus ultrices in iaculis nunc sed augue.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue
      neque gravida in. Nunc sed blandit libero volutpat. Platea dictumst
      vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Nulla
      porttitor massa id neque aliquam vestibulum morbi blandit cursus. Eget
      magna fermentum iaculis eu. Iaculis at erat pellentesque adipiscing
      commodo elit at imperdiet dui. Morbi tempus iaculis urna id volutpat lacus
      laoreet non curabitur. In fermentum et sollicitudin ac orci phasellus.
      Neque viverra justo nec ultrices dui sapien. Mus mauris vitae ultricies
      leo integer. Lectus quam id leo in vitae turpis massa sed. In fermentum
      posuere urna nec. Sed felis eget velit aliquet sagittis id consectetur
      purus. Tempor orci dapibus ultrices in iaculis nunc sed augue.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue
      neque gravida in. Nunc sed blandit libero volutpat. Platea dictumst
      vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Nulla
      porttitor massa id neque aliquam vestibulum morbi blandit cursus. Eget
      magna fermentum iaculis eu. Iaculis at erat pellentesque adipiscing
      commodo elit at imperdiet dui. Morbi tempus iaculis urna id volutpat lacus
      laoreet non curabitur. In fermentum et sollicitudin ac orci phasellus.
      Neque viverra justo nec ultrices dui sapien. Mus mauris vitae ultricies
      leo integer. Lectus quam id leo in vitae turpis massa sed. In fermentum
      posuere urna nec. Sed felis eget velit aliquet sagittis id consectetur
      purus. Tempor orci dapibus ultrices in iaculis nunc sed augue.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue
      neque gravida in. Nunc sed blandit libero volutpat. Platea dictumst
      vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Nulla
      porttitor massa id neque aliquam vestibulum morbi blandit cursus. Eget
      magna fermentum iaculis eu. Iaculis at erat pellentesque adipiscing
      commodo elit at imperdiet dui. Morbi tempus iaculis urna id volutpat lacus
      laoreet non curabitur. In fermentum et sollicitudin ac orci phasellus.
      Neque viverra justo nec ultrices dui sapien. Mus mauris vitae ultricies
      leo integer. Lectus quam id leo in vitae turpis massa sed. In fermentum
      posuere urna nec. Sed felis eget velit aliquet sagittis id consectetur
      purus. Tempor orci dapibus ultrices in iaculis nunc sed augue.
    </p>

    <v-container class="my-6" id="contact"></v-container>
    <h1 class="text-h4">Contact Us</h1>
    <v-divider class="my-2"></v-divider>
    <form>
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|max:15"
      >
        <v-text-field
          v-model="name"
          :error-messages="errors"
          :counter="15"
          label="Name"
          required
          shaped
          filled
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
          shaped
          filled
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="businessName"
        rules="required"
      >
        <v-text-field
          label="Business Name"
          v-model="business_name"
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
          v-model="business_link"
          placeholder="Enter your business link"
          :error-messages="errors"
          filled
          shaped
        ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="Contact" rules="required">
        <v-text-field
          label="Contact"
          v-model="contact"
          placeholder="Enter your contact"
          :error-messages="errors"
          filled
          shaped
        ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="Service" rules="required">
        <v-text-field
          label="Service"
          v-model="service"
          placeholder="Enter your service"
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
          v-model="description"
          label="Description"
          :error-messages="errors"
          :counter="25"
          required
          shaped
          filled
        ></v-textarea>
      </validation-provider>

      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        :on-icon="checkedIcon"
        :off-icon="unCheckedIcon"
        required
        shaped
        filled
      ></v-checkbox>
      <recaptcha /><br />
      <v-btn class="mr-4" @click="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </v-container>
</template>

<script>
import { mdiCheckboxMarked, mdiCheckboxBlankOutline } from '@mdi/js'

export default {
  data() {
    return {
      checkedIcon: mdiCheckboxMarked,
      unCheckedIcon: mdiCheckboxBlankOutline,
    }
  },
  // methods: {
  //   aboutScroll() {
  //     const gsap = this.$gsap
  //     gsap.to(window, {
  //       duration: 1,
  //       scrollTo: { y: '#about', offsetY: 70 },
  //     })
  //   },
  //   contactScroll() {
  //     const gsap = this.$gsap
  //     gsap.to(window, {
  //       duration: 1,
  //       scrollTo: { y: '#contact', offsetY: 70 },
  //     })
  //   },
  // },
}
</script>
