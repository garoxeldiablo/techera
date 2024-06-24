import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        signin: resolve(__dirname, 'src/page/signin/index.html'),
        signup: resolve(__dirname, 'src/page/signup/index.html'),
        forum: resolve(__dirname, 'src/page/forum/index.html'),
        editprofile: resolve(__dirname, 'src/page/editprofile/index.html'),
        detailorder: resolve(__dirname, 'src/page/detailorder/index.html'),
        createpost: resolve(__dirname, 'src/page/createpost/index.html'),
        consultation: resolve(__dirname, 'src/page/consultation/index.html'),
        booking: resolve(__dirname, 'src/page/booking/index.html'),
        blog: resolve(__dirname, 'src/page/blog/index.html')
      }
    }
  }
})
