import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme';
import { twMerge } from 'tailwind-merge';

/**
 * Componente Typography
 * 
 * Um componente reutilizável para renderizar todos os tipos de texto
 * com estilos consistentes baseados no tema
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.variant - Variante do texto (h1, h2, h3, h4, subtitle1, subtitle2, body1, body2, button, badge)
 * @param {string} props.color - Cor personalizada para o texto (opcional)
 * @param {string} props.align - Alinhamento do texto (left, center, right, justify)
 * @param {string} props.transform - Transformação do texto (uppercase, lowercase, capitalize)
 * @param {boolean} props.gutterBottom - Se deve adicionar margem inferior
 * @param {React.ReactNode} props.children - Conteúdo do texto
 * @param {string} props.className - Classes CSS adicionais
 * @returns {JSX.Element} - Elemento de tipografia estilizado
 */
const Typography = ({
  variant = 'body1',
  color,
  align = 'left',
  transform,
  gutterBottom = false,
  children,
  className = '',
  ...props
}) => {
  const typographyStyles = theme.typography.styles[variant] || theme.typography.styles.body1;
  const fontFamily = typographyStyles.fontFamily;
  const fontSize = typographyStyles.fontSize;
  const fontWeight = typographyStyles.fontWeight;
  const lineHeight = typographyStyles.lineHeight;
  const textColor = color || typographyStyles.color;
  const textTransform = transform || typographyStyles.textTransform;
  
  // Classes base para cada variante
  const variantClasses = {
    h1: `font-['${fontFamily.split(',')[0]}'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold`,
    h2: `font-['${fontFamily.split(',')[0]}'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold`,
    h3: `font-['${fontFamily.split(',')[0]}'] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold`,
    h4: `font-['${fontFamily.split(',')[0]}'] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold`,
    subtitle1: `font-['${fontFamily.split(',')[0]}'] text-lg sm:text-xl font-medium`,
    subtitle2: `font-['${fontFamily.split(',')[0]}'] text-base sm:text-lg font-medium`,
    body1: `font-['${fontFamily.split(',')[0]}'] text-base font-normal`,
    body2: `font-['${fontFamily.split(',')[0]}'] text-sm font-normal`,
    button: `font-['${fontFamily.split(',')[0]}'] text-base sm:text-lg font-medium`,
    badge: `font-['${fontFamily.split(',')[0]}'] text-base sm:text-lg font-bold`,
  };

  // Classes de alinhamento
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  // Classes de transformação
  const transformClasses = {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    normal: 'normal-case',
  };

  // Classes para margem inferior
  const gutterBottomClass = gutterBottom ? 'mb-4' : '';
  
  // Combinando classes
  const classes = twMerge(
    variantClasses[variant],
    alignClasses[align] || 'text-left',
    transformClasses[textTransform] || '',
    gutterBottomClass,
    className
  );

  // Estilo inline para cor personalizada
  const style = {
    color: textColor,
    ...props.style,
  };

  // Mapeamento de variantes para elementos HTML
  const Component = 
    variant === 'h1' ? 'h1' : 
    variant === 'h2' ? 'h2' : 
    variant === 'h3' ? 'h3' : 
    variant === 'h4' ? 'h4' : 
    variant === 'subtitle1' ? 'h5' : 
    variant === 'subtitle2' ? 'h6' : 
    'p';

  return (
    <Component className={classes} style={style} {...props}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'h1', 'h2', 'h3', 'h4', 'subtitle1', 'subtitle2', 
    'body1', 'body2', 'button', 'badge'
  ]),
  color: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  transform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize', 'normal']),
  gutterBottom: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Typography;