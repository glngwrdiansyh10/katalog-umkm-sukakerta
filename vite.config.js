import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo-kkn.jpeg', 'favicon.svg'],
      manifest: {
        name: 'Katalog UMKM Desa Sukakerta',
        short_name: 'UMKM Sukakerta',
        description: 'Katalog digital UMKM Desa Sukakerta, Karawang',
        theme_color: '#2d6a4f',
        background_color: '#f0faf4',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'logo-kkn.jpeg',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: 'logo-kkn.jpeg',
            sizes: '512x512',
            type: 'image/jpeg'
          }
        ]
      }
    })
  ],
})
