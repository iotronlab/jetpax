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
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Item"
        required
      ></v-select>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn class="mr-4" @click="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
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
