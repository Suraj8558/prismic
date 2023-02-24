// https://nuxt.com/docs/api/configuration/nuxt-config
import {apiEndpoint} from './sm.json'
export default defineNuxtConfig({
  modules: [['@nuxtjs/prismic', {
    endpoint: apiEndpoint
  }]],

  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: '/js/main.js',body:true, defer:true},
        { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js', body: true, defer: true },
        { src: '/vendor/aos/aos.js', body: true, defer: true },
        { src: '/vendor/purecounter/purecounter_vanilla.js', body: true, defer: true },
        { src: '/vendor/glightbox/js/glightbox.min.js', body: true, defer: true },
        { src: '/vendor/swiper/swiper-bundle.min.js', body: true, defer: true },
        { src: '/vendor/isotope-layout/isotope.pkgd.min.js', body: true, defer: true },
        { src: '/vendor/php-email-form/validate.js', body: true, defer: true },

      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap' },
        { rel: 'stylesheet', href: '/css/main.css' },
        { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/vendor/bootstrap-icons/bootstrap-icons.css' },
        { rel: 'stylesheet', href: '/vendor/glightbox/css/glightbox.min.css' },
        { rel: 'stylesheet', href: '/vendor/swiper/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: '/vendor/aos/aos.css' },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  }

})
