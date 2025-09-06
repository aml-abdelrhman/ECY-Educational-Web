import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/ECY-Educational-Web/', // لازم يكون نفس اسم المستودع بالضبط
  plugins: [react()],
});
