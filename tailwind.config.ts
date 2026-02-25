import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',        // Indigo 500
        secondary: '#8b5cf6',      // Violet 500
        accent: '#06b6d4',         // Cyan 500
        'bg-primary': '#0a0a0f',   // Near-black with blue tint
        'bg-secondary': '#111118', // Dark card surface
        'bg-tertiary': '#1a1a28',  // Elevated surface
        'text-primary': '#ededf0', // Soft white
        'text-secondary': '#8b8b9e', // Muted lavender gray
        'text-muted': '#5a5a72',   // Subtle text
        border: 'rgba(255,255,255,0.08)',
        success: '#22c55e',
        warning: '#eab308',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'gradient': 'gradient 12s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-down': 'slide-down 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'mesh-blob-1': 'mesh-blob-1 25s ease-in-out infinite',
        'mesh-blob-2': 'mesh-blob-2 30s ease-in-out infinite',
        'mesh-blob-3': 'mesh-blob-3 20s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          from: { boxShadow: '0 0 15px rgba(99, 102, 241, 0.15)' },
          to: { boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'mesh-blob-1': {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '25%': { transform: 'translate(20%, -15%) scale(1.1)' },
          '50%': { transform: 'translate(-10%, 20%) scale(0.95)' },
          '75%': { transform: 'translate(-20%, -10%) scale(1.05)' },
        },
        'mesh-blob-2': {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '25%': { transform: 'translate(-25%, 15%) scale(1.05)' },
          '50%': { transform: 'translate(15%, -20%) scale(1.1)' },
          '75%': { transform: 'translate(10%, 10%) scale(0.95)' },
        },
        'mesh-blob-3': {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '25%': { transform: 'translate(15%, 20%) scale(0.95)' },
          '50%': { transform: 'translate(-20%, -10%) scale(1.1)' },
          '75%': { transform: 'translate(25%, -15%) scale(1.05)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.15)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.25)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.15)',
        'glow-violet': '0 0 20px rgba(139, 92, 246, 0.15)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 40px rgba(99, 102, 241, 0.12)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    typography,
  ],
} satisfies Config