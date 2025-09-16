module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      serif: ['serif'],
    },
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)"
        },
        // Secondary Colors
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)"
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          light: "var(--text-light)",
          dark: "var(--text-dark)"
        },
        // Background Colors
        background: {
          main: "var(--bg-main)",
          card: "var(--bg-card)",
          overlay: "var(--bg-overlay)",
          accent: "var(--bg-accent)",
          neutral: "var(--bg-neutral)",
          light: "var(--bg-light)"
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)"
        },
        // Component-specific colors
        header: {
          background: "var(--header-bg)",
          text: "var(--header-text)"
        },
        button: {
          primary: "var(--button-bg-primary)",
          secondary: "var(--button-bg-secondary)",
          outline: "var(--button-bg-outline)",
          textPrimary: "var(--button-text-primary)",
          textAccent: "var(--button-text-accent)"
        },
        link: {
          primary: "var(--link-text-primary)",
          secondary: "var(--link-text-secondary)",
          accent: "var(--link-text-accent)"
        },
        footer: {
          background: "var(--footer-bg)",
          text: "var(--footer-text)"
        },
        input: {
          background: "var(--input-bg)",
          border: "var(--input-border)",
          text: "var(--input-text)"
        }
      },
      // Typography
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)'
      },
      // Spacing
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)'
      },
      // Border Radius
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        'full': 'var(--radius-full)'
      },
      // Font Families
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif']
      }
    }
  },
  plugins: []
};