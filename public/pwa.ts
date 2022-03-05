import { VitePWA } from 'vite-plugin-pwa'

const BASE_ICONS_PATH = './public/icons'

export default VitePWA({
  manifest: {
    theme_color: '#1e2124',
    background_color: '#1e2124',
    display: 'browser',
    scope: '/',
    start_url: '/',
    name: 'Alex Djonata - Porf\u00f3lio',
    short_name: 'Alex Djonata - Porf\u00f3lio',
    description:
      'Desenvolvedor Front-End | Confira meus projetos e conhecimentos!',
    icons: [
      {
        src: `${BASE_ICONS_PATH}/android-chrome-192x192.png`,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: `${BASE_ICONS_PATH}/android-chrome-512x512.png`,
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: `${BASE_ICONS_PATH}/android-chrome-maskable-192x192.png`,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: `${BASE_ICONS_PATH}/android-chrome-maskable-512x512.png`,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: `${BASE_ICONS_PATH}/apple-touch-icon-60x60.png`,
        sizes: '60x60',
        type: 'image/png',
      },
      {
        src: `${BASE_ICONS_PATH}/apple-touch-icon-76x76.png`,
        sizes: '76x76',
        type: 'image/png',
      },
      {
        src: `${BASE_ICONS_PATH}/apple-touch-icon-120x120.png`,
        sizes: '120x120',
        type: 'image/png',
      },
      {
        src: `${BASE_ICONS_PATH}/apple-touch-icon-152x152.png`,
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: `${BASE_ICONS_PATH}/apple-touch-icon-180x180.png`,
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: `${BASE_ICONS_PATH}/apple-touch-icon.png`,
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: `${BASE_ICONS_PATH}/favicon-16x16.png`,
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: `${BASE_ICONS_PATH}/favicon-32x32.png`,
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: `${BASE_ICONS_PATH}/msapplication-icon-144x144.png`,
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: `${BASE_ICONS_PATH}/mstile-150x150.png`,
        sizes: '150x150',
        type: 'image/png',
      },
    ],
  },
})