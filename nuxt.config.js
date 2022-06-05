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
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css'},
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
    { src: '~/plugins/vue-rellax.js'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    ['nuxt-matomo', { matomoUrl: '//floriane-ryan.com/', siteId: 1 }],
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
          about_text1 : 'Hello & bonjour, I’m Floriane Ryan! I’m an aspiring digital designer, and love the creative process across many fields (motion design, graphic design, illustration, 3D, creative writing, etc...)',
          about_text2 : 'I currently live in Paris, although I was born in Philadelphia and lived there the first four years of my life. Which means I\'m fluent in both French and English!',
          about_text3 : 'If I’m not in the process of designing something, you’ll find me baking, traveling, rescuing strays or chatting with lots of different individuals.',
          about_text4 : 'I love meeting fascinating people from different cultures all over the world, and hope to work in many different destinations over the course of my life, I\'d say it\'s one of my biggest goals.',
          contact_me : 'Contact me',
          contact_me_text : 'Feel free to contact me here!',
          full_potential : 'This website show its full potential on a computer !',
          download : 'Download',
          resume : 'my resume',
          here : 'here!',
          synerg_title : "New Year's Card",
          synerg_text : 'This junior company asked me to complete a christmas card for their clients in 2020.',
          synerg_text2 : 'They wanted a magical winter scene!',
          clothing_title : 'Clothing logo',
          clothing_text : 'As part of a freelance project, I created this logo for a clothing brand. ',
          netflix_title : 'Netflix Poster',
          netflix_content : 'This is a Netflix ad in the style of “Mucha”, as part of a school contest.',
          insta_title : 'Instagram Design',
          insta_text : 'This is the instagram page for a fake company as part of a school project. I designed the posts as well as created the ideas.',
          christmas_title : 'Christmas Poster',
          christmas_content : 'This poster helped me win in a contest to become the  Project Manager of Graphic Design in a junior company.',
          alcohol_title : 'Alcohol Branding',
          alcohol_text : 'This is branding for a 20th century Marmite alcohol brand. ',
          blossom_text : 'I created a logo animation for a fictional communication agency.The petal animation is hand-drawn!',
          blossom_title : 'Blossoming Agency Logo Animation',
          catapulz_title : "CatapulZ Logo Animation",
          catapulz_text : "I designed and animated a logo for CatapulZ. It was a very fun freelance job which got me into logo animation",
          cajoo_title : "Cajoo Instagram Story",
          cajoo_text : "I was very lucky to produce an instagram story for Cajoo, one of the top grocery delivery services in Paris.",
          citwell_text1 : "I animated their New Year’s card for 2022.",
          citwell_text2 : "This freelance project was very fun!",
          citwell_title : "Citwell New Year‘s Card Animation",
          design_by : "Design by ",
          developp_by : "Coded by ",
          right : "© 2022 - All rights reserved",

        },
        fr: {
          navbar_des : 'Design / Graphisme',
          navbar_motion : 'Motion Design',
          navbar_contact : 'Contactez moi',
          about_me: 'À propos de moi',
          about_text1 : 'Bonjour & hello, je suis Floriane Ryan ! Je touche principalement au design digital, et aime le processus créatif dans de nombreux domaines (motion design, design graphique, illustration, 3D, écriture créative, etc...).',
          about_text2 : 'Je vis actuellement à Paris, bien que je sois née à Philadelphie et que j\'y ai vécu les quatre premières années de ma vie. Ce qui signifie que je parle couramment le français et l\'anglais !',
          about_text3 : 'Si je ne suis pas en train de concevoir quelque chose, vous me trouverez en train de faire de la pâtisserie, voyager, de récupérer des animaux errants ou de discuter avec autant d\'individus différents que possible.',
          about_text4 : 'J\'adore rencontrer des gens fascinants venant de diverses cultures du monde entier, et j\'espère travailler dans de nombreuses destinations différentes au cours de ma vie, je dirais que c\'est l\'un de mes plus grands objectifs.',
          contact_me : 'Contactez moi',
          contact_me_text : 'Vous pouvez me contacter à tout moment ici !',
          full_potential : 'Ce site dévoile tout son potentiel sur un ordinateur !',
          download : 'Télécharger',
          resume : 'mon cv',
          here : 'ici!',
          synerg_title : 'Carte de Voeux du Nouvel An',
          synerg_text : 'Cette junior entreprise m\'a demandée de compléter une carte de voeux pour leur clients de 2021.',
          synerg_text2 : 'Ils voulaient une scène hivernale enchantée !',
          clothing_title : 'Logo pour une marque de vêtements',
          clothing_text : "Dans le cadre d'un projet freelance, j'ai créé ce logo pour une marque de vêtements. ",
          netflix_title : 'Affiche Netflix',
          netflix_content : `Il s'agit ici d'une publicité Netflix dans le style "Mucha", réalisée dans le cadre d'un concours scolaire. `,
          insta_title : 'Design Instagram',
          insta_text : 'Ceci est la page instagram d\'une fausse entreprise dans le cadre d\'un projet scolaire. J\'ai créé les publications ainsi que conçu les idées.',
          christmas_title : 'Affiche de Noël',
          christmas_content : 'Cette affiche m\'a aidée à gagner un concours pour devenir cheffe de projet en design graphique dans une junior entreprise.',
          alcohol_title : 'Marque d\'alcool',
          alcohol_text : 'Il s\'agit du branding pour une marque d\'alcool de Marmite du XXe siècle.',
          blossom_text : 'J\'ai créé une animation de logo pour une agence de communication fictive. L\'animation de la pétale est faite à la main, en traditionelle !',
          blossom_title : "Animation du logo de l'agence Blossoming",
          catapulz_title : "Animation du Logo de CatapulZ",
          catapulz_text : 'J\'ai conçu et animé un logo pour CatapulZ. C\'était une mission freelance très enrichissante qui m\'a amenée à adorer la création d\'animations de logo',
          cajoo_title : 'Story Instagram pour Cajoo',
          cajoo_text : 'J\'ai eu la chance de produire une story instagram pour Cajoo, l\'un des meilleurs services de livraison de courses à Paris.',
          citwell_text1 : 'J\'ai animé leur carte de voeux pour 2022.',
          citwell_text2 : 'Ce projet freelance a été très fun à réaliser!',
          citwell_title : 'Carte du Nouvel An animée pour Citwell',
          design_by : "Designé par ",
          developp_by : "Développé par ",
          right : "© 2022 - Tous droits réservés",

        },
        
      },
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
