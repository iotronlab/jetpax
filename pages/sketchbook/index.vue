<template>
  <v-container>
    <div class="justify-center">
      <Breadcrumb :breadcrumbItems="breadcrumbItems" />
    </div>
    <v-divider class="my-2"></v-divider>

    <LazyPortfolioSketchBook />
  </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: 'SketchBook',
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
          text: 'Sketchbook',
          disabled: false,
          to: '/sketchbook',
        },
      ],
    }
  },
}
</script>
