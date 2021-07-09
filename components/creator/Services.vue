<template>
  <v-row no-gutters>
    <v-col
      v-for="(service, i) in services"
      :key="i"
      cols="12"
      lg="3"
      md="6"
      sm="6"
    >
      <v-card class="ma-1" rounded="lg">
        <v-card-title class="text-h5"> {{ service.name }}</v-card-title>

        <v-card-subtitle
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quo
          dolores, earum maiores dolorem quod velit voluptas accusamus nostrum
          minus quaerat dolor totam illum voluptate itaque laboriosam
          distinctio! Asperiores, hic?
          <h2 class="text-h6">₹ {{ service.rate }}</h2></v-card-subtitle
        >
      </v-card></v-col
    >
    <!-- <v-col cols="12" lg="3" md="6" sm="6"> -->
    <!-- <CreatorServices :services="creator.services" />s -->
    <!-- </v-col> -->
  </v-row>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
}
</script>
