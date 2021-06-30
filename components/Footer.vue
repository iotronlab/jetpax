<template>
  <v-footer color="black lighten-1 py-4">
    <v-row justify="left" no-gutters>
      <v-btn
        v-for="link in navItems"
        :key="link"
        color="white"
        text
        rounded
        class="my-2 links-button"
      >
        <v-icon>{{ link.icon }}</v-icon>
        <NuxtLink :to="link.to" class="links-button">{{ link.title }}</NuxtLink>
      </v-btn>
    </v-row>
    <v-row justify="right" no-gutters>
      <NuxtLink to="/"
        ><v-img
          src="/logo.webp"
          max-width="220"
          contain
          class="mr-2"
          alt="Logo"
      /></NuxtLink>
      <span class="mr-2">&copy; {{ new Date().getFullYear() }}</span>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Services',
          to: '/inspire',
          children: [
            {
              title: 'Services for Companies',
              to: '/inspire',
            },
            {
              title: 'Services for Creators',
              to: '/inspire',
            },
          ],
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Portfolio',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About US',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact US',
          to: '/inspire',
        },
      ],
    }
  },
}
</script>

<style scoped>
.links-button {
  color: white;
  text-decoration: none;
}
</style>