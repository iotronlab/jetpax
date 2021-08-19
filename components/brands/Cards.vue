<template>
  <v-container fluid class="pa-0">
    <h1 class="text-h4">Our Services</h1>
    <v-divider class="my-2"></v-divider>
    <v-item-group mandatory v-model="selectedService">
      <v-row no-gutters justify="center">
        <v-col
          v-for="(service, i) in services"
          :key="i"
          cols="6"
          md="3"
          class="pa-2"
        >
          <v-item v-slot="{ active, toggle }">
            <v-sheet
              @click="toggle"
              rounded="xl"
              class="py-2 text-center text-uppercase"
              :class="active ? 'nucard' : null"
              color="transparent"
              height="100%"
            >
              <div v-if="active" class="flex-grow-1">
                <h2
                  class="text-button ma-1 primary--text"
                  style="letter-spacing: 0.1rem !important; line-height: 95%"
                >
                  <strong>{{ service.heading }}</strong>
                </h2>
                <v-btn text disabled class="caption">viewing</v-btn>
              </div>

              <div v-if="!active" class="flex-grow-1">
                <h2
                  class="text-button ma-1"
                  style="letter-spacing: 0.1rem !important; line-height: 95%"
                >
                  {{ service.heading }}
                </h2>
                <v-btn text class="caption">view</v-btn>
              </div>
            </v-sheet>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
    <v-divider class="my-2"></v-divider>
    <v-window v-model="selectedService" reverse>
      <v-window-item
        v-for="(service, i) in services"
        :key="i"
        reverse-transition="slide-y-transition"
      >
        <LazyBrandsService :service="service" :order="i" />
      </v-window-item>
    </v-window>
    <!-- <v-row no-gutters justify="center">
      <v-col
        cols="12"
        md="6"
        v-for="(service, i) in services"
        :key="i"
        class="pa-lg-4"
      >
        <v-card flat color="transparent">
          <h2
            class="text-h5 mb-2 text-uppercase"
            style="letter-spacing: 0.15rem !important"
          >
            {{ service.heading }}
          </h2>
          <h5 class="body-1">
            {{ service.description }}
            <ul class="mt-2">
              <p
                class="mb-1"
                v-for="(children, i) in service.children"
                :key="i"
              >
                <v-icon color="agency">{{ icons.check }}</v-icon>
                {{ children.subheading }}
              </p>
            </ul>
          </h5></v-card
        >
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  props: {
    // services: {
    //   type: Array,
    //   required: true,
    // },
  },
  data() {
    return {
      selectedService: null,
      services: [
        {
          heading: 'Influencer Marketing',
          description: `We provide customised campaigns and match the right Influencer to your brand and products.`,
          img: [
            { src: require('@/assets/img/influencer.png') },
            // { src: require('@/assets/img/loader.gif') },
          ],
          children: [
            {
              subheading: 'Brand/Product Review',
              description: `Your favourite Influencer will review your brand/product and post the content on social networking sites -
              Facebook, Instagram, Twitter, YouTube. We build the credibility of your brand with recommendations from top content creators.`,
            },
            {
              subheading: 'Brand Sponsored Endorsement',
              description: `Promote your brand through direct engagement with Influencers. Our Influencer network acts as your brand's spokesperson
                and certifies your brand's claim and position. In addition, influencers highlight your product’s features, quality and
                benefits.`,
            },
            {
              subheading: 'Brand Collaboration',
              description: `Collaborate with your chosen content creators for any project. Get custom content created according to your business needs.`,
            },
            {
              subheading: 'Public Relations Management',
              description: `We build effective communication strategies to ensure a positive public perception of your brand. We also provide the
              business with regular coverage across various forms of media by working closely on content, campaigns, and strategies with our content
              creators. Our PR services include:`,
              children: [
                { subheading: 'Strategic planning for campaigns' },
                { subheading: 'Graphics and Digital PR' },
                { subheading: 'Product Placement' },
                { subheading: 'Media Monitoring' },
              ],
            },
            {
              subheading: 'Campaign Ad Shoots',
              description: `We offer a complete campaign plan to our clients, starting from photo/video shoot production to advertising campaign
              management. From location, photography or styling for your ad campaign, you can rely on us for managing them. Our package includes:`,
              children: [
                { subheading: 'Campaign Shoot' },
                { subheading: 'Shoot Location Scouting' },
                { subheading: 'Styling for Ad Campaign' },
                { subheading: 'Post shoot Production' },
                { subheading: 'Content Creation' },
              ],
            },
          ],
        },
        {
          heading: 'Social Media Marketing',
          description: `Grow your audience with our new-age Social Media Marketing Schemes.`,
          img: [{ src: require('@/assets/img/social-media.png') }],
          children: [
            {
              subheading: 'Social Marketing Services',
              children: [
                {
                  subheading: 'Social Media Consultation',
                  description: `Get SEO expertise on your social networks. Your social profiles will show measurable growth over a calculated period.`,
                },
                {
                  subheading: 'Social Media Campaign Management',
                  description: `Get set with a dedicated social media campaign. We focus on your target audience and daily measurement of your business
                  growth. Over 90% of your customers are scrolling their social networks every hour. Thus our unique ad content gets optimised for mobile users.`,
                },
                {
                  subheading: 'Social Media Brand Management',
                  description: `At Jetpax agency, our team manages your brand on social networks. We track, report, and work on various Key Performance Indicators.
                 We connect your brand with your audience, manage your paid and organic campaigns on social networks, including Facebook, Twitter, Instagram.
                 Now, you can measure your success with us.`,
                },
              ],
            },
            {
              subheading: 'Social Media Designs',
              children: [
                {
                  subheading: 'Cover Designs',
                  description: `Eye-catching social media covers for your business.`,
                },
                {
                  subheading: 'Animated Posters',
                  description: `Get The best-animated posters for your business. Motion captures attention, boosting your conversions with our animations.`,
                },
                {
                  subheading: 'Reels',
                  description: `We create modern reels to promote your products and events.`,
                },
                {
                  subheading: 'Short Videos',
                  description: `Get attractive minimalist video animation related to your Brand/Products of length 15 to 30 seconds.`,
                },
                {
                  subheading: 'Posters/Graphics',
                  description: `We make creativity and business align with each other with content designed to attract your audience/customer.`,
                },
                {
                  subheading: 'Thumbnail Designs',
                  description: `Get more views with our Modern Classic thumbnail designs to suit your video channels.`,
                },
              ],
            },
          ],
        },
        {
          heading: 'Digital Marketing Services',
          description: `Every Brand needs to reach out to its potential customers and convert them to loyal ones. We provide end-to-end solutions
           for your marketing needs at a reasonable rate.`,
          img: [{ src: require('@/assets/img/digital.svg') }],
          children: [
            {
              subheading: 'Marketing-Based Services',
              children: [
                {
                  subheading: 'Search Engine Optimization (SEO)',
                  description: `We optimise your online site to increase its search ranking, driving more customers to your website. We do frequent
                  keyword research and help your customers find you on Search engines.`,
                },
                {
                  subheading: 'Digital Marketing Strategy',
                  description: `“We build your company’s framework for success.” We enable you to attract more customers and generate more leads to
                  grow your business. We focus on inbound marketing strategies leading to customer experience based on trust. We plan your content and
                  supervise it on the calendar. As a result, your potential customer gets updated with all your latest products and services.`,
                },
                {
                  subheading:
                    'Search Engine Marketing (SEM) / Pay Per Click (PPC)',
                  description: `We help you with paid marketing expertise on search engines. Our continuous research of Keywords leads to driving more
                  customers to your website. We place estimated paid ads on search engines, analyse, calculate, and optimise your paid advertisements.
                  Your potential customers land on your website to browse your products and services.`,
                },
                {
                  subheading: 'Email marketing',
                  description: `Jetpax acts on behalf of your brand. We send commercial messages to your potential customer to meet your business goals.
                  We help your brand re-target your website visitors who have been browsing your product but could not complete the transaction. Start
                  converting your visitors to loyal customers with our expertise. Email templates include Welcome Emails, Email Newsletters, Dedicated-Lead
                  Nurturing, Re-Engagement, Brand Story Emails.`,
                },
                {
                  subheading: 'Link Building',
                  description: `Increase the number and quality of your web resource to your website. Boost the search engine rankings. We link your social
                  networks and all the relevant websites to your business website. Help your customers and the search engines to understand your products
                  and services.`,
                },
                {
                  subheading: 'Google Analytics Service',
                  description: `We analyse and measure your business to expand your brand’s reach in the internet market. We measure the efficiency of your
                  paid ads, compare them with previous reports, then act on them. Track your content quality on your website, social networking sites, and other applications.`,
                },
                {
                  subheading: 'Conversion Rate Optimization',
                  description: `Jetpax optimises your sponsored ads and website content to raise your conversion rate and build trust with your customers. In addition, we optimise
                  Call-to-Actions where a random visitor converts into your potential customer. We set our goal for the highest possible percentage of visitors to your site to convert.`,
                },
                {
                  subheading: 'Reputation Management',
                  description: `Jetpax aims at monitoring the stable reputation of your brand before your customers. We plan a quick and helpful response for your customers and build the
                  positives. We handle your negative reviews delicately. Improve and stabilise your reputation all over the internet market with us.`,
                },
              ],
            },
            {
              subheading: 'Design-Based Services',
              children: [
                {
                  subheading: 'Flyers',
                  description: `Customised modern and classic flyer designs make your brand rank at the forefront of your potential audience and customers.
                  Reach more customers with our range of designs to meet your business needs.`,
                },
                {
                  subheading: 'Brochures',
                  description: `We create eye-catchy brochures for your products & services—all the details of your brand in a design suitable for your business needs.`,
                },
                {
                  subheading: 'Standee Designs',
                  description: `Enhance your business or brand events with our customised standee designs. Educate customers and other business entities about your brand
                  values at the venue.`,
                },
                {
                  subheading: 'Explainer Videos',
                  description: `Explainer video ads help you generate an audience for your product and convert them to buyers. We create your Explainer videos with a
                  minimalist concept. Create an emotional connection with your viewers and customers with a focus on your products and services.`,
                },
                {
                  subheading: 'Introductory Videos',
                  description: `We will create short Intro videos for your brand, visualising the brand’s values. Enhance your brand with our range of innovative
                  introductory videos.`,
                },
                {
                  subheading: 'Info-graphics',
                  description: `Provide relevant information about your products and services to your target audience. We represent facts and figures with graphics
                  for customers to relate more to your business.`,
                },
              ],
            },
          ],
        },
        {
          heading: 'Graphics and Animations',
          description: `We Design Brands, Our range of Creative Solutions helps you to enhance your business. Grow in the market in a budget-friendly way.`,
          img: [{ src: require('@/assets/img/graphics.png') }],
          children: [
            {
              subheading: 'Brand Identity',
              img: [
                // { src: require('@/assets/img/loader.gif') },
              ],
              children: [
                {
                  subheading: 'Logo and Letterhead Designs',
                  description: `Jetpax designs your brand's identity in a way that portrays your brand value. Our creative process helps
              you to reach your specific target audience. A custom letterhead for your stationery comes complementary to the logo design.`,
                },
                {
                  subheading: 'Logo Animations',
                  description:
                    'Animate your logo with our creative ideas. Choose from simple logo reveals to more complex cinematic reveals.',
                },
                {
                  subheading: 'Business Cards',
                  description: `We insist that "a business card carries the exact weight of a brand". Therefore, we provide a Modern Classic
              design for a business card that amplifies a company's brand value.`,
                },
                {
                  subheading: 'Banner Designs',
                  description: `Banners are the basic needs for a business to reach out to its customers in offline and digital markets.
              Get a realistic banner design with all the information needed to display.`,
                },
                {
                  subheading: 'Stamps',
                  description: `Modern Classic stamp designs, created with a mix of creativity and professionalism, let you sign documents in style.`,
                },
                {
                  subheading: 'Product Packaging Designs',
                  description: `We create designs for the packaging of your product with choices in material, shape, graphics, colours, and fonts used on wrapping.`,
                },
                {
                  subheading: 'Mockup Designs',
                  description: `The mockup shows what the ultimate design will look like in the real world. Get detailed mockups for your products.`,
                },
                {
                  subheading: 'UI-UX Designs',
                  description: `For launching a digital application, UI-UX design is a mandatory process. It helps to identify your target demographics
              and design for max conversions.`,
                },
              ],
            },
            {
              subheading: 'Artwork & Merchandise',

              children: [
                {
                  subheading: 'T-shirt Designs',
                  description: `Get a modern classic t-shirt design from our creative team to improve your sales in the digital world.`,
                },
                {
                  subheading: 'Album Art Designs',
                  description: `Jetpax creates custom album art designs for the growing artists of different genres.`,
                },
                {
                  subheading: 'Custom Poster Designs',
                  description: `Get custom-made posters for your events with a high level of detail to highlight your brand values.`,
                },
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>
