export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'florianeryan',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css'}
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          navbar_des : 'Design / Graphism',
          navbar_motion : 'Motion Design',
          navbar_contact : 'Contact me',
          about_me: 'About me',
          about_text1 : 'Hello, I’m Floriane Ryan! I’m an aspiring digital designer, and love the process of creation in many fields (motion design, graphism, 3D, writing...)',
          about_text2 : 'I currently live in Paris, though I was born in Philly and lived there the first four years of my life. ',
          about_text3 : 'If I’m not in the process of designing something, you’ll find me baking, booking plane tickets, taking care of my plants or discovering a new cafe with friends.',
          about_text4 : 'I love meeting fascinating people from all over the world, and hope to work in many different destinations over the course of my life.',
          synerg_text : 'This junior company asked me to complete a christmas card for their clients in 2020.',
          synerg_text2 : 'They wanted a magical winter scene!',
          blossom_text : 'I created a logo animation for a fictional communication agency.The petal animation is hand-drawn!',
          contact_me : 'Contact me',
          contact_me_text : 'Feel free to contact me here!',
          full_potential : 'This website show its full potential on a computer !',
          download : 'Download',
          resume : 'my resume',
          here : 'here!',
        },
        fr: {
          navbar_des : 'Design / Graphisme',
          navbar_motion : 'Motion Design',
          navbar_contact : 'Contactez moi',
          about_me: 'À propos de moi',
          about_text1 : 'Hello, je m\'appelle Floriane Ryan ! J\'aspire à devenir directrice artistiqueet j\'adore le processus de création dans beaucoup de domaines (motion design, graphisme, 3D, écriture...)',
          about_text2 : 'Je vis actuellement à Paris bien que je sois né à Philadelphieet ai vécut là-bas les quatre premières années de ma vie. ',
          about_text3 : 'Si je ne suis pas en train de faire du site, vous me trouverez certainement en train de faire de la pâtisserie, acheter des billets d\'avion, prendre soin de mes plantes ou en train de découvrir de nouveaux cafés avec mes amis',
          about_text4 : 'J\'adore rencontrer des gens fascinants venant de la planète entière, et j\'éspère travailler dans beaucoup d\'endroit différent tout au long de ma vie',
          synerg_text : 'Cette jeune entreprise m\'a demandé de compléter une carte de Noël pour leur clients de 2020.',
          synerg_text2 : 'Ils voulaient une scène de Noël magique !',
          blossom_text : 'J\'ai créé une animation de logo pour une agence de communication fictive. L\'animation de la pétale est faite à la main !',
          contact_me : 'Contactez moi',
          contact_me_text : 'Vous pouvez me contacter à tout moment ici !',
          full_potential : 'Ce site dévoile tout son potentiel sur un ordinateur !',
          download : 'Télécharger',
          resume : 'mon cv',
          here : 'ici!',
        },
        
      }
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
