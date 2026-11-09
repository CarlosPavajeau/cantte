/** @type {import('tailwindcss').Config} */
const token = (name) => `oklch(var(--${name}) / <alpha-value>)`

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['variant', ['&:is(.dark *)', '&:is(.dark)']],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono Variable"', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: token('background'),
        foreground: token('foreground'),
        card: token('card'),
        primary: {
          DEFAULT: token('primary'),
          foreground: token('primary-foreground'),
        },
        muted: {
          DEFAULT: token('muted'),
          foreground: token('muted-foreground'),
        },
        border: token('border'),
        ring: token('ring'),
        success: {
          DEFAULT: token('success'),
          foreground: token('success-foreground'),
        },
        info: {
          DEFAULT: token('info'),
          foreground: token('info-foreground'),
        },
      },
      borderColor: {
        DEFAULT: token('border'),
      },
      fontSize: {
        display: ['clamp(2.5rem, 5.4vw, 4rem)', { lineHeight: '1.04' }],
      },
      letterSpacing: {
        display: '-0.045em',
        heading: '-0.04em',
      },
      spacing: {
        section: 'clamp(4rem, 10vw, 8rem)',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
