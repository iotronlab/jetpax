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
      Contact<span class="font-weight-bold">US.</span>
    </h1>
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
    <v-text-field
      label="Business Name"
      v-model="business_name"
      placeholder="Enter your business name"
    ></v-text-field>
    <v-text-field
      label="Business Link"
      v-model="business_link"
      placeholder="Enter your business link"
    ></v-text-field>
    <v-text-field
      label="Contact"
      v-model="contact"
      placeholder="Enter your contact"
    ></v-text-field>
    <v-text-field
      label="Service"
      v-model="service"
      placeholder="Enter your service"
    ></v-text-field>
    <v-text-field
      label="Budget"
      v-model="budget"
      placeholder="Enter your budget"
    ></v-text-field>
    <v-textarea
      background-color="black"
      color="white"
      label="Details"
      v-model="details"
      placeholder="Enter your details"
    ></v-textarea>
    <v-btn block>
    Save
    </v-btn>
  </v-container>
</template>

<script>
export default {
  // transition(to, from) {
  //   if (from) {
  //     return 'slide-left'
  //   }
  // },
}
</script>

