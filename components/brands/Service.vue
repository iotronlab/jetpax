<template>
  <v-container fluid class="pa-0">
    <v-row class="fill-height" justify="center">
      <v-col cols="12" lg="5">
        <v-row no-gutters>
          <v-col
            v-for="(img, i) in service.img"
            :key="i"
            :cols="i == 0 ? 12 : 6"
          >
            <v-img :src="img.src" contain class="ma-2" /> </v-col
        ></v-row>
      </v-col>
      <v-col cols="12" lg="7" :order-lg="order % 2 == 0 ? 'first' : null">
        <v-card class="card-overlap pa-2" dark>
          <h1 class="text-h4 mb-4">{{ service.heading }}</h1>
          <section
            v-for="(service, i) in service.children"
            :key="i"
            class="mb-4"
          >
            <h2 class="text-button font-weight-bold creator--text">
              {{ service.subheading }}
            </h2>
            <h3 class="text-body-1">
              {{ service.description }}
            </h3>
            <v-row no-gutters
              ><v-col
                cols="12"
                lg="6"
                v-for="(children, i) in service.children"
                :key="i"
              >
                <v-card class="pa-1" color="transparent">
                  <h4 class="text-button font-weight-bold agency--text">
                    <v-icon color="agency">{{ icons.check }}</v-icon>
                    {{ children.subheading }}
                  </h4>
                  <h5 class="text-body-1 mx-1">{{ children.description }}</h5>
                </v-card></v-col
              ></v-row
            >
          </section>

          <v-row no-gutters justify="center">
            <v-btn to="order" class="ma-1 btn-agency" dark>
              <strong>Place order</strong>
            </v-btn>
            <!-- <v-btn to="contact" class="ma-1 button-right"
            ><strong>Request quote</strong></v-btn
          > -->
          </v-row></v-card
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiCheckboxMarkedCircleOutline } from '@mdi/js'
export default {
  props: {
    service: {
      type: Object,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        check: mdiCheckboxMarkedCircleOutline,
      },
    }
  },
  mounted() {
    //this.animateOnScroll()
  },

  methods: {
    animateOnScroll() {
      const gsap = this.$gsap
      gsap.utils.toArray('.right').forEach((demo) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: demo,
            toggleActions: 'restart none none reverse',
            // markers: true,
            start: '-150px center',
          },
        })

        tl.from(demo, {
          y: 150,
          ease: 'Power2.easeInOut',
          duration: 1,
          opacity: 0,
        })
      })
      gsap.utils.toArray('.left').forEach((demo) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: demo,
            toggleActions: 'restart none none reverse',
            // markers: true,
            start: '-150px center',
          },
        })

        tl.from(demo, {
          x: -150,
          ease: 'Power2.easeInOut',
          duration: 1,
          opacity: 0,
        })
      })
    },
  },
}
</script>
<style scoped>
.el {
  transform: skewY(var(--stripeSetAngle))
    translateY(var(--stripeSetSubpixelOffset));
}
</style>
