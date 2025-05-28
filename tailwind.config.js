module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - amber palette
        primary: "#D97706", // amber-600
        "primary-light": "#F59E0B", // amber-500
        "primary-dark": "#B45309", // amber-700
        
        // Amber palette extension
        amber: {
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
        },
        
        // Stone palette extension
        stone: {
          50: "#FAFAF9", // stone-50
          200: "#E7E5E4", // stone-200
          400: "#A8A29E", // stone-400
          600: "#57534E", // stone-600
          900: "#1C1917", // stone-900
        },
        
        // Semantic colors
        success: "#059669", // emerald-600
        warning: "#F59E0B", // amber-500
        error: "#DC2626", // red-600
        info: "#2563EB", // blue-600
        
        // Neutral colors with descriptive names
        background: "#FAFAF9", // stone-50
        surface: "#FFFFFF", // white
        border: "#E7E5E4", // stone-200
        "text-primary": "#1C1917", // stone-900
        "text-secondary": "#57534E", // stone-600
        "text-tertiary": "#A8A29E", // stone-400
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Merriweather', 'serif'],
      },
      fontSize: {
        'display-large': ['36px', { lineHeight: '1.2', fontWeight: '900' }],
        'display-medium': ['30px', { lineHeight: '1.2', fontWeight: '700' }],
        'display-small': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'title-large': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'title-medium': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'title-small': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-large': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-medium': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-small': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}