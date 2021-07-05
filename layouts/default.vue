<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" temporary fixed app>
      <v-list-item>
        <v-switch
          v-model="$vuetify.theme.dark"
          inset
          label="Dark Mode"
          persistent-hint
        ></v-switch
      ></v-list-item>
      <v-list>
        <v-list-item
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar id="nav" fixed app flat class="nav-transparent">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        aria-label="nav-button"
      >
        <v-icon slot="default">{{ icons.menu }}</v-icon></v-app-bar-nav-icon
      >
      <nuxt-link :to="{ name: 'index' }"
        ><v-img
          src="/logo.webp"
          max-width="220"
          contain
          class="hidden-lg-and-up"
          alt="Logo"
      /></nuxt-link>
      <v-row
        no-gutters
        justify="center"
        align="center"
        class="hidden-md-and-down"
      >
        <nuxt-link :to="{ name: 'index' }">
          <v-img src="/logo.webp" max-width="220" contain class="mr-2"
        /></nuxt-link>
        <v-btn
          text
          v-for="(item, i) in navItems"
          :key="i"
          color="creator"
          :to="item.to"
          >{{ item.title }}</v-btn
        >
      </v-row>
      <v-btn icon class="ml-auto" aria-label="call"
        ><v-icon>{{ icons.call }}</v-icon></v-btn
      >
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <LazyFooter />
  </v-app>
</template>

<script>
import { mdiMenu } from '@mdi/js'
import { mdiPhone } from '@mdi/js'
export default {
  head() {
    return {
      link: [
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
          media: 'print',
          onload: "this.media='all'",
        },
      ],
    }
  },
  data() {
    return {
      drawer: false,
      icons: {
        menu: mdiMenu,
        call: mdiPhone,
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

      title: 'Launchpad',
    }
  },
  mounted() {
    let myNav = document.getElementById('nav')
    window.onscroll = function () {
      'use strict'
      if (document.body.scrollTop >= 200) {
        myNav.classList.add('nav-transparent')
      } else {
        myNav.classList.remove('nav-transparent')
      }
    }
  },
}
</script>
<style scoped>
.nav-transparent {
  transition: 0.5s ease-in-out;
  background: linear-gradient(
    to bottom,
    rgba(147, 51, 234, 0.2),
    transparent 90%
  ) !important;
}
</style>
