/**
 * Sistema de temas centralizado
 * 
 * Este arquivo define todas as configurações de design system,
 * facilitando a padronização e alteração do estilo do site.
 */

const theme = {
  // Cores principais
  colors: {
    primary: {
      main: '#ef5b00',    // Laranja principal
      light: '#ff8533',   // Laranja claro
      dark: '#cc4a00',    // Laranja escuro
      contrastText: '#ffffff'  // Texto em fundo laranja
    },
    secondary: {
      main: '#070910',    // Preto/azul escuro
      light: '#282c3a',   // Versão mais clara
      dark: '#000000',    // Versão mais escura
      contrastText: '#ffffff'  // Texto em fundo escuro
    },
    text: {
      primary: '#ffffff',    // Texto principal (branco)
      secondary: '#dddee1',  // Texto secundário (cinza claro)
      disabled: '#9e9e9e',   // Texto desabilitado
      hint: '#6b6b6b',       // Dicas e textos de menor importância
    },
    background: {
      default: '#070910',  // Fundo padrão
      paper: '#121522',    // Fundo de cards/elementos
      light: '#ffffff',    // Fundo claro
      gradient: {
        dark: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6))'  // Gradiente escuro
      }
    },
    action: {
      active: '#ef5b00',
      hover: '#ff8533',
      disabled: '#9e9e9e',
    },
    error: {
      main: '#f44336',
    },
    success: {
      main: '#4caf50',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    }
  },
  
  // Tipografia
  typography: {
    // Família de fontes
    fontFamily: {
      primary: 'Oswald, sans-serif',      // Fonte principal
      secondary: 'Inter, sans-serif',     // Fonte secundária 
      tertiary: 'Archivo, sans-serif',    // Fonte terciária
    },
    
    // Tamanhos de fonte
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '4rem',      // 64px
    },
    
    // Pesos da fonte
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    // Altura da linha
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
      custom: {
        headline: '1.1',  // Para títulos grandes
        body: '1.6',      // Para texto do corpo
      },
    },
    
    // Estilos de texto pré-definidos
    styles: {
      h1: {
        fontFamily: 'Oswald, sans-serif',
        fontSize: '4rem',        // 64px
        fontWeight: 700,         // bold
        lineHeight: 1.1,         // tight
        textTransform: 'capitalize',
        color: '#ffffff',        // white
        responsive: {
          sm: '2.5rem',          // 40px
          md: '3rem',            // 48px 
          lg: '3.5rem',          // 56px
          xl: '4rem',            // 64px
        }
      },
      h2: {
        fontFamily: 'Oswald, sans-serif',
        fontSize: '3rem',        // 48px
        fontWeight: 700,         // bold
        lineHeight: 1.2,
        textTransform: 'capitalize',
        color: '#ffffff',        // white
        responsive: {
          sm: '2rem',            // 32px
          md: '2.5rem',          // 40px
          lg: '2.75rem',         // 44px
          xl: '3rem',            // 48px
        }
      },
      h3: {
        fontFamily: 'Oswald, sans-serif',
        fontSize: '2.25rem',     // 36px
        fontWeight: 600,         // semibold
        lineHeight: 1.3,
        textTransform: 'capitalize',
        color: '#ffffff',        // white
        responsive: {
          sm: '1.5rem',          // 24px
          md: '1.75rem',         // 28px
          lg: '2rem',            // 32px
          xl: '2.25rem',         // 36px
        }
      },
      h4: {
        fontFamily: 'Oswald, sans-serif',
        fontSize: '1.5rem',      // 24px
        fontWeight: 600,         // semibold
        lineHeight: 1.4,
        color: '#ffffff',        // white
      },
      subtitle1: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.25rem',     // 20px
        fontWeight: 500,         // medium
        lineHeight: 1.5,
        color: '#dddee1',        // gray/white
      },
      subtitle2: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.125rem',    // 18px
        fontWeight: 500,         // medium
        lineHeight: 1.5,
        color: '#dddee1',        // gray/white
      },
      body1: {
        fontFamily: 'Archivo, sans-serif',
        fontSize: '1rem',        // 16px
        fontWeight: 400,         // normal
        lineHeight: 1.6,
        color: '#dddee1',        // gray/white
      },
      body2: {
        fontFamily: 'Archivo, sans-serif',
        fontSize: '0.875rem',    // 14px
        fontWeight: 400,         // normal
        lineHeight: 1.6,
        color: '#dddee1',        // gray/white
      },
      button: {
        fontFamily: 'Oswald, sans-serif',
        fontSize: '1.125rem',    // 18px
        fontWeight: 500,         // medium
        lineHeight: 1.4,
        textTransform: 'uppercase',
        color: '#ffffff',        // white
      },
      badge: {
        fontFamily: 'Oswald, sans-serif',
        fontSize: '1.125rem',    // 18px
        fontWeight: 700,         // bold
        lineHeight: 1.4,
        textTransform: 'uppercase',
        color: '#ef5b00',        // orange
      }
    }
  },
  
  // Espaçamentos
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '2.5rem',  // 40px
    '3xl': '3rem',    // 48px
    '4xl': '4rem',    // 64px
    '5xl': '6rem',    // 96px
  },
  
  // Bordas e arredondamentos
  border: {
    radius: {
      none: '0',
      sm: '0.125rem',   // 2px
      md: '0.25rem',    // 4px
      lg: '0.5rem',     // 8px
      full: '9999px',   // círculo completo
    },
    width: {
      none: '0',
      thin: '1px',
      thick: '2px',
      thicker: '4px',
    },
  },
  
  // Sombras
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  // Breakpoints para responsividade
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Containers
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
  },
  
  // Estilos específicos de componentes
  components: {
    button: {
      primary: {
        backgroundColor: '#ef5b00',
        color: '#ffffff',
        padding: '12px 24px',
        borderRadius: '4px',
        fontFamily: 'Oswald, sans-serif',
        fontSize: '1.125rem',
        fontWeight: 500,
      },
      secondary: {
        backgroundColor: 'transparent',
        color: '#ffffff',
        padding: '12px 24px',
        borderRadius: '4px',
        border: '1px solid #fafafa',
        fontFamily: 'Oswald, sans-serif',
        fontSize: '1.125rem',
        fontWeight: 500,
      },
      badge: {
        backgroundColor: '#07091089',
        color: '#ef5b00',
        padding: '4px 16px',
        borderRadius: '24px',
        fontFamily: 'Oswald, sans-serif',
        fontSize: '1.125rem',
        fontWeight: 700,
      }
    },
    section: {
      padding: {
        y: {
          sm: '2rem',   // 32px
          md: '3rem',   // 48px
          lg: '4rem',   // 64px
          xl: '5rem',   // 80px
        },
        x: {
          sm: '1rem',   // 16px
          md: '1.5rem', // 24px
          lg: '2rem',   // 32px
          xl: '2.5rem', // 40px
        }
      },
      gap: {
        sm: '1rem',     // 16px
        md: '1.5rem',   // 24px
        lg: '2rem',     // 32px
        xl: '3rem',     // 48px
      }
    }
  }
};

export default theme;