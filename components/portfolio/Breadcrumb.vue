<template>
  <div>
    <v-breadcrumbs
      :items="items"
      divider="/"
      large
      class="justify-center"
    ></v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: 'Home',
        disabled: false,
        to: '/',
      },
      {
        text: 'Portfolio',
        disabled: false,
        to: 'portfolio',
      },
      {
        text: 'Link 2',
        disabled: true,
        to: 'breadcrumbs_link_2',
      },
    ],
  }),
}
</script>
