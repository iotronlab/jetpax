<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
      dark
      color="rgba(0, 0, 0, 0.6)"
    >
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
      <nuxt-link :to="{ name: 'index' }" v-if="!$vuetify.breakpoint.lgAndUp"
        ><v-img src="/logo.webp" max-width="220" contain alt="Logo"
      /></nuxt-link>

      <AppBarMenu :navItems="navItems" v-else />

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
          title: 'Home',
          to: '/',
        },
        {
          title: 'Influencers',
          to: '/influencers',
        },
        {
          title: 'Services',
          children: [
            {
              title: 'Services for Companies',
              to: '/brands',
            },
            {
              title: 'Services for Creators',
              to: '/creators',
            },
          ],
        },

        {
          title: 'Portfolio',
          children: [
            {
              title: 'Case Studies',
              to: '/portfolio',
            },
            {
              title: 'Sketchbook',
              to: '/sketchbook',
            },
          ],
        },
        {
          title: 'About US',
          to: '/about-us',
        },
        {
          title: 'Contact US',
          to: '/contact-us',
        },
      ],
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
    this.tawk()
  },
  methods: {
    tawk() {
      var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date()
      ;(function () {
        var s1 = document.createElement('script'),
          s0 = document.getElementsByTagName('script')[0]
        s1.async = true
        s1.src = 'https://embed.tawk.to/60dddb4965b7290ac638eb61/1f9ha16m2'
        s1.charset = 'UTF-8'
        s1.setAttribute('crossorigin', '*')
        s0.parentNode.insertBefore(s1, s0)
      })()
    },
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
