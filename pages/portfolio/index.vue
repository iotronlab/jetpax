<template>
  <v-container>
    <div class="justify-center">
      <Breadcrumb :breadcrumbItems="breadcrumbItems" />
    </div>
    <v-divider class="my-2"></v-divider>

    <LazyPortfolioCaseStudy />
  </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: 'Portfolio',
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
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Home',
          disabled: false,
          to: '/',
        },
        {
          text: 'Portfolio',
          disabled: true,
          to: 'portfolio',
        },
      ],
    }
  },
}
</script>
