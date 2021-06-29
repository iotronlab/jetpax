<template>
  <v-container fluid class="pa-0">
    <v-img src="/land.png" max-height="650" contain>
      <v-row no-gutters class="fill-height text-center">
        <v-col cols="12">
          <h1 class="text-button">Digital Marketing Agency connecting</h1>
        </v-col>
        <v-col cols="12" align-self="end">
          <h1 class="text-h2">
            <span class="neon-agency">Brands</span> -&-
            <span class="neon-creator">Influencers</span>
          </h1>

          <v-row no-gutters class="mt-12 mb-6">
            <v-col cols="12" lg="6">
              <v-btn class="ma-2 btn-agency" large to="companies" dark rounded>
                <v-icon large class="mr-2 neon-agency">
                  mdi-arrow-left-circle-outline
                </v-icon>
                for companies</v-btn
              ></v-col
            >
            <v-col cols="12" lg="6">
              <v-btn
                class="ma-2 btn-creator"
                large
                to="creators"
                alt="creators"
                dark
                rounded
              >
                for creators
                <v-icon large class="ml-2 neon-creator">
                  mdi-arrow-right-circle-outline
                </v-icon>
              </v-btn></v-col
            ></v-row
          ></v-col
        >
      </v-row></v-img
    >
    <v-row no-gutters justify="center" class="mb-6">
      <v-col cols="10" class="mt-6 text-center">
        <h4 class="text-button" style="line-height: 150%">
          With a hunger and thirst for innovation, our agency paves the way
          <span class="agency--text"> brands</span> and
          <span class="creator--text">influencers</span> connect with their
          <span class="agency--text"> audiences</span> in the digital space. We
          are a holistic
          <span class="agency--text">digital marketing agency </span> covering
          all your marketing and promotional needs. We at JETPAX aim to be the
          biggest and best
          <span class="creator--text">community of influencers</span>.
        </h4>
        <v-btn class="mt-4 btn-creator" to="creative-network" large dark
          >Visit influencer network</v-btn
        >
      </v-col></v-row
    >
  </v-container>
  <!-- <v-col cols="12" class="pa-2">
          <h1 class="text-h3 text-right lime--text font-weight-bold">
            Your Partner in Creating and Evolving YOUR BRAND.
          </h1>
          <h4 class="text-subtitle-2 text-right lime-lighten-1--text">
            Grow your brand with dedicated marketing campaigns run by our
            influencer network.
          </h4></v-col
        > -->
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data() {
    return {
      services: [
        {
          heading: 'BRAND DESIGN',
          description:
            'We Design Brands. Our range of Creative Solutions helps you to enhance your brand. Grow in the market in a budget-friendly way.',
          children: [
            {
              heading: 'Logo Designs, Logo Animation',
              description:
                'We design your brand’s identity in a way that portrays your brand value. Our creative process helps you to reach your specific target audience.',
            },
            {
              heading: 'Letterheads',
              description:
                'A specific letterhead for your stationary, complementary to the logo design.',
            },
            {
              heading: 'Business Cards',
              description:
                'We insist that “a business card carries the exact weight of a brand”. When it comes to a Business card, we provide a Modern Classic design that amplifies the brand value of a Company',
            },
            {
              heading: 'Banner Designs',
              description:
                'Banners are the basic needs for a brand to reach out to their customers both in the offline and digital markets. Get a realistic banner design with all the necessary information needed to display.',
            },
            {
              heading: 'Stamps',
              description:
                'Modern Classic stamp designs, created with a mix of creativity and professionalism. Now, sign documents in style.',
            },
            {
              heading: 'Product Packaging Design',
              description:
                'Designs for the packaging of your product. This includes choices in material, shape, graphics, colors, and fonts used on wrapping.',
            },
            {
              heading: 'Mockup Designs',
              description:
                'The mockup shows what the final design will look like in the real world. Get detailed mockups for your products',
            },
            {
              heading: 'UI-UX Designs',
              description:
                'For launching a digital application, UI-UX design is a mandatory process. It helps to identify your target demographics and design for max conversions.',
            },
            {
              heading: 'ARTWORK & MERCHANDISE',
              children: [
                {
                  heading: 'T-Shirt Designing',
                  description:
                    'Get a modern classic t-shirt design from our creative team that would just tweak your sales in the digital world.',
                },
                {
                  heading: 'Album Art Designing',
                  description:
                    'Our range of creatives offer album art and song logo designing for the growing bands (of different genres) in and around India.',
                },
                {
                  heading: 'Custom Poster/Banner Designing',
                  description:
                    'We Design Custom Banner for your Event with specific details that highlight your brand values and is Audience/Customer friendly.',
                },
              ],
            },
          ],
        },
        {
          heading: 'SOCIAL MEDIA Design and Marketing',
          description:
            'Attract more Audience with our Modern Marketing Schemes.',
          children: [
            {
              subheading: 'PRODUCT',
              children: [
                {
                  heading: 'Cover Design',
                  description:
                    'With our experienced brand designers, we help you to come up with modern classic designs which become the eye-catching piece of your social media handle.',
                },
                {
                  heading: 'Animated Posters',
                  description:
                    'Our vast range of Creative services provides the best-animated posters for your business. Attractive sells more, get going with our animated posters.',
                },
                {
                  heading: 'Reels',
                  description:
                    'Create Modern Event reels that boost your viewers and audience to keep following you on various Social Media platforms.',
                },
                {
                  heading: 'Short Videos',
                  description:
                    'Create attractive minimalist Video Animation related to your Brand/Products. These videos last from 15-30 seconds.',
                },
                {
                  heading: 'Posters/Graphics',
                  description:
                    'We make the modern generation and businesses align with each other. Daily information & branding contents skillfully designed to attract your audience/customer.',
                },
                {
                  heading: 'Thumbnail Designs',
                  description:
                    'Get more views with our Modern Classic Thumbnail designs that are carefully designed to suit your video content.',
                },
              ],
            },
            {
              subheading: 'SERVICES',
              children: [
                {
                  heading: 'Social Media Consultation',
                  description:
                    'Get budget-friendly SEO expertise on your social networks. Our social media expert helps your brand to engage with more online customers on social media platforms. Social profiles show measurable growth over a calculated period of time.',
                },
                {
                  heading: 'Social Media Campaign Management',
                  description:
                    'Our social media campaigns are coordinated marketing efforts to help you achieve your business goal. We set a dedicated social media campaign focusing on the target and daily basis measurement of your business growth. Over 90 percent of your customers are scrolling their social networks every hour. Therefore our unique social ad contents are optimized for mobile users.',
                },
                {
                  heading: 'Social Media Brand Management',
                  description:
                    'At JetPax agency, our team manages your brand on social networks. We track, report, and work on various Key Performance Indicators. JetPax connects your brand with your audience, manages your paid and organic campaigns on social networks including Facebook, Twitter, Instagram. Our dedicated digital marketing expert may manage your accounts and help you achieve the best results over a period of time. Measure your success with us.',
                },
              ],
            },
          ],
        },
        {
          heading: 'DIGITAL MARKETING Services and Designs',
          children: [
            {
              subheading: 'MARKETING MATERIAL',
              description:
                'Every Brand/Company needs to reach out to its potential customers and convert others to your loyal ones. We design eye-catching marketing designs at a reasonable rate. Hike your Brand value with us.',
              children: [
                {
                  heading: 'Flyers',
                  description:
                    'We provide customized modern classic flyer designs to make your brand come to the frontline of your potential audience and customers. Reach more customers with our range of designs carefully designed to meet your business needs.',
                },
                {
                  heading: 'Brochures',
                  description:
                    'We know the quality and standards of your Brand. Keeping the reader in mind we design eye-catchy brochures for your products & services. This contains all the brand-provided details enclosed in a modern classic design of your business need.',
                },
                {
                  heading: 'Standee Designs',
                  description:
                    'Enhance your business or brand events with our modern classic standee designs. Attract and educate customers and other business entities about your brand values at the venue.',
                },
                {
                  heading: 'Explainer Videos',
                  description:
                    'Explainer video ads help you to generate an audience for your product and convert them to buyers. We design your Explainer videos with a minimalist concept and create an emotional connection with your viewers and customer while focusing on your products and services. Our creative videos are designed to fulfill your business desires.',
                },
                {
                  heading: 'Introductory Videos',
                  description:
                    'We design short Intro videos by visualizing the connection between the brand and its values. Enhance your brand with our range of Creative Intro Videos.',
                },
                {
                  heading: 'Info-graphics',
                  description:
                    'Portray and Provide relevant information regarding your product and services to your customers and other businesses. We study the brand and apply the right color psychology to put a good impression on your viewer.',
                },
              ],
            },
            {
              subheading: 'Marketing Services',
              children: [
                {
                  subheading: 'Search Engine Optimization (SEO)',
                  description:
                    'We optimize your online store to increase its search page ranking while driving more traffic to your website. We conduct frequent keyword research and help your customers find you easily on Search engines.',
                  children: [
                    {
                      heading: 'Local SEO',
                      description:
                        'Our search engine optimization strategy helps your business be more visible in local search results on search engines. Get your brand listed on local business platforms and reach more potential customers.',
                    },
                    {
                      heading: 'Technical SEO ',
                      description:
                        'Jetpax ensures that your business website meets all the technical requirements of modern search engines with the target of improved organic search rankings. This SEO service is based on important elements i.e; crawling, indexing, rendering, and website architecture.',
                    },
                    {
                      heading: 'Franchise SEO',
                      description:
                        'Getting trouble ranking multiple business locations on Google?No more worries. Jetpax helps your outranked search result get optimized and localized. We set up your business on google map and embed it on your site so that your customers visit your storefront. Send them notifications when they are nearby your business location.',
                    },
                  ],
                },
                {
                  subheading: 'Digital Marketing Strategy',
                  description:
                    '“We build your company’s framework for success.” Attract more customers and generate more leads to grow your business. We focus on inbound marketing strategies which lead to customer experience based on trust. We plan your content and supervise the content calendar in such a way that customer gets updated with your latest products and services.',
                },
                {
                  subheading: 'Pay Per Click (PPC) Marketing',
                  description:
                    'With our continuous research of Keyword that is most relevant to your business, our marketing team drives more traffic to your website by placing paid ads on Search engines. We Analyse, calculate, and Optimize your paid advertisements in such a way that your potential customers land upon your website and browse your products and services.',
                },
                {
                  subheading: 'E-mail marketing',
                  description:
                    'At Jetpax, we act on behalf of your brand to send a commercial message to your potential customer at the right time for your business needs. Email Marketing helps your brand to retarget the customers who have been browsing your product but could not complete the transaction. Start converting your visitors to loyal customers with our expertise.',
                },
                {
                  subheading: 'Link Building',
                  description:
                    'Our actions are aimed at increasing the number and quality of inbound links to a webpage with the goal of increasing search engine rankings. We link your social networks and all the business-relevant websites to your Business website. This helps the customers as well as the digital media to understand your product and services.',
                },
                {
                  subheading: 'Google Analytics Service',
                  description:
                    'Analyzing and measuring your business is a very important action that is required to grow and expand on the digital market. We measure the efficiency of your paid ads and compare them with previous reports, then act accordingly. We also Track your Contents on your website, social networking sites, and other applications in order to Grow Your Brand.',
                },
                {
                  subheading: 'Conversion Rate Optimization',
                  description:
                    'Jetpax optimizes your sponsored ads and website content to raise your conversion rate. We optimize Call-to-Action in a way that a random visitor converts into your potential customer. While building trust with your customer, our goal is set for the highest possible percentage of visitors to your site to convert.',
                },
                {
                  subheading: 'Search Engine Marketing (SEM)',
                  description:
                    'With increase ranking on search engines(SEO Service), we also help you with paid marketing expertise on search engines. Our marketing strategy acts to increase the visibility of a website on search engine results pages and make the person browsing land on your Website.',
                },
                {
                  subheading: 'Reputation Management',
                  description:
                    'Jetpax aims at monitoring the stable reputation of your brand before your customers. We plan a quick and helpful response for your customers and build the positives. We handle your negative reviews delicately and try to improve and stabilize your reputations all over the internet market.',
                },
              ],
            },
          ],
        },
        {
          heading: 'INFLUENCER MARKETING',
          children: [
            {
              heading: 'Brand Collaboration',
              description:
                'Collaborate with your favorite influencer on your projects',
            },
            {
              heading: 'Brand Promotion',
              description:
                'Our influencer network promotes your brand through social media posts',
            },
            {
              heading: 'Brand Endorsement',
              description:
                'Promote your brand through direct engagement with influencers',
            },
            {
              heading: 'Online/Offline Events',
              description:
                'Get your favorite influencer to attend your events.',
            },
          ],
        },
      ],
    }
  },
  components: {
    Logo,
    VuetifyLogo,
  },
}
</script>
<style scoped>
.landing-image {
  background-image: url('/land.jpg');
  background-position: center;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.btn-creator {
  transition: all 0.5s 0.1s ease-in-out;
  background-size: auto 200%;
  box-shadow: 0 0 10px #9333ea;
  background-image: linear-gradient(
    to bottom,
    #c084fc 0%,
    #9333ea 51%,
    #c084fc 100%
  );
}

.btn-creator:hover {
  background-position: center bottom; /* change the direction of the change here */
  box-shadow: 0 0 15px #9333ea;
}

.btn-agency {
  transition: all 0.5s ease-in-out 0.1s;
  background-size: auto 200%;
  box-shadow: 0 0 10px #6366f1;
  background-image: linear-gradient(
    to bottom,
    #6366f1 0%,
    #4f46e5 51%,
    #6366f1 100%
  );
}

.btn-agency:hover {
  background-position: center bottom; /* change the direction of the change here */
  box-shadow: 0 0 15px #6366f1;
}

.neon-creator {
  color: #fff;
  -webkit-animation: neon-creator 1.5s ease-in-out infinite alternate;
  -moz-animation: neon-creator 1.5s ease-in-out infinite alternate;
  animation: neon-creator 1.5s ease-in-out infinite alternate;
}

.neon-agency {
  color: #fff;
  -webkit-animation: neon-agency 1.5s ease-in-out infinite alternate;
  -moz-animation: neon-agency 1.5s ease-in-out infinite alternate;
  animation: neon-agency 1.5s ease-in-out infinite alternate;
}

@keyframes neon-creator {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #9333ea, 0 0 20px #9333ea,
      0 0 25px #d946ef;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 7px #fff, 0 0 20px #d946ef, 0 0 25px #d946ef,
      0 0 30px #d946ef;
  }
}

@keyframes neon-agency {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #6366f1, 0 0 20px #6366f1,
      0 0 25px #60a5fa;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 7px #fff, 0 0 20px #60a5fa, 0 0 25px #60a5fa,
      0 0 30px #60a5fa;
  }
}
</style>
