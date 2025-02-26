import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './tailwind.config.ts',
  ],
  theme: {
    extend: {
      spacing: {
        xxxs: '2px',
        xxs: '4px',
        xs: '8px',
        s: '12px',
        m: '16px', // base size
        l: '20px',
        xl: '24px', // base size
        xxl: '32px',
        xxxl: '40px',
      },

      fontFamily: {
        sans: ['var(--font-noto-sans-kr)', 'Arial', 'sans-serif'],
      },
      fontSize: {
        xxxl: '24px',
        xxl: '22px',
        xl: '20px',
        l: '18px',
        m: '16px',
        s: '14px',
        xs: '12px',
        xxs: '11px',
      },
      fontWeight: {
        bold: '700',
        medium: '500',
        regular: '400',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
