<template>
  <v-container fluid>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12" lg="4">
        <NuxtLink to="/"
          ><v-img
            src="/logo.webp"
            max-width="220"
            contain
            class="mx-auto"
            alt="JetPax Logo"
        /></NuxtLink>
        <section class="text-center">
          <v-divider class="my-2" />
          <p class="caption">find us on</p>
          <v-row no-gutters justify="space-around" class="my-4">
            <v-btn v-for="(social, i) in socialLinks" :key="i" icon
              ><v-icon>{{ social.icon }}</v-icon></v-btn
            >
          </v-row>
          <v-divider class="my-2" />
          <v-row no-gutters justify="space-around">
            <p class="caption">
              <v-icon>{{ icons.phone }} </v-icon>&nbsp;+91 7980 123 456
            </p>
            <p class="caption">
              <v-icon>{{ icons.email }}</v-icon
              >&nbsp;contactus@jetpax.org
            </p>
          </v-row>
        </section></v-col
      >
      <v-col cols="12" lg="4">
        <p v-for="(link, i) in navItems" :key="i">
          <v-icon>{{ link.icon }}</v-icon>
          <NuxtLink :to="link.to">{{ link.title }}</NuxtLink>
        </p></v-col
      >
    </v-row>
    <v-row no-gutters>
      <span class="mr-2">&copy; {{ new Date().getFullYear() }}</span>
    </v-row>
  </v-container>
</template>

<script>
import { mdiEmail } from '@mdi/js'
import { mdiPhone } from '@mdi/js'
import { mdiFacebook } from '@mdi/js'
import { mdiInstagram } from '@mdi/js'
import { mdiYoutube } from '@mdi/js'
import { mdiLinkedin } from '@mdi/js'

export default {
  data() {
    return {
      icons: {
        email: mdiEmail,
        phone: mdiPhone,
      },
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
          to: '/portfolio',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About US',
          to: '/aboutus',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact US',
          to: '/aboutus#contact',
        },
      ],
      helpLinks: [
        { name: 'FAQ', url: '/help-centre#FAQ' },
        { name: 'Payment', url: '/help-centre#Payment' },
        { name: 'Shipping', url: '/help-centre#Shipping' },
        {
          name: 'Cancellation and Return',
          url: '/help-centre#Cancellation%20and%20Return',
        },
        {
          name: 'Report Infringement',
          url: '/help-centre#Report%20Infringement',
        },
      ],
      socialLinks: [
        { icon: mdiFacebook, url: '' },
        { icon: mdiYoutube, url: '' },
        { icon: mdiInstagram, url: '' },
        { icon: mdiLinkedin, url: 'Privacy Policy' },
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
