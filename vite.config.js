import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/vite-project/', // أو اسم المستودع على GitHub
  plugins: [react()],
});
