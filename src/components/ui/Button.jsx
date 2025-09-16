import React from 'react';
import PropTypes from 'prop-types';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import theme from '../../theme';

/**
 * Componente de botão padronizado com variantes baseadas no tema
 */
const buttonClasses = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed hover:brightness-105 active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary: 'bg-[#ef5b00] text-white border-none shadow-sm',
        secondary: 'bg-transparent border border-white text-white hover:bg-white/10',
        badge: 'bg-transparent text-[#ff6600] border-none',
        outline: 'border-2 border-[#ef5b00] bg-transparent text-[#ef5b00] hover:bg-[#ef5b00]/5',
        text: 'bg-transparent text-[#ef5b00] hover:underline',
        icon: 'rounded-full p-2 hover:bg-opacity-10',
      },
      size: {
        small: 'text-sm px-3 py-1.5 rounded',
        medium: 'text-base px-5 py-3 rounded',
        large: 'text-lg px-6 py-4 rounded-md',
        badge: 'text-base px-4 py-1 rounded-full',
      },
      fullWidth: {
        true: 'w-full',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      fullWidth: false,
    },
  }
);

/**
 * Componente Button
 * 
 * Um botão padronizado que usa o sistema de design
 * 
 * @param {Object} props - Propriedades do componente
 */
const Button = ({
  // Props básicas
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  type = "button",
  className = '',
  onClick,
  
  // Props específicas (legado)
  text = "Peça seu orçamento",
  text_font_size = "20",
  text_font_family = "Inter",
  text_font_weight = "500",
  text_line_height = "25px",
  text_text_align = "center",
  text_color = "#ffffff",
  fill_background_color = "#ef5b00",
  border_border_radius = "4px",
  border_border,
  layout_width,
  padding,
  position,
  
  ...props
}) => {
  // Usa o estilo definido no tema ou os valores personalizados
  const getButtonStyles = () => {
    const variantStyles = theme.components.button[variant] || {};
    
    // Ajustar padding com base na variante
    let defaultPadding;
    if (variant === 'primary' || variant === 'secondary') {
      defaultPadding = '12px 24px';
    } else if (variant === 'badge') {
      defaultPadding = '4px 16px';
    } else {
      defaultPadding = '8px 16px';
    }
    
    return {
      fontFamily: text_font_family || variantStyles.fontFamily || 'Oswald, sans-serif',
      fontWeight: text_font_weight || variantStyles.fontWeight || '500',
      lineHeight: text_line_height || variantStyles.lineHeight || '1.2',
      color: text_color || (variant === 'secondary' ? '#ffffff' : variant === 'badge' ? '#ef5b00' : '#ffffff'),
      backgroundColor: fill_background_color || (variant === 'primary' ? '#ef5b00' : variant === 'secondary' ? 'transparent' : variant === 'badge' ? 'rgba(7,9,16,0.5)' : 'transparent'),
      borderRadius: border_border_radius || (variant === 'badge' ? '24px' : '4px'),
      border: border_border || (variant === 'secondary' ? '1px solid #ffffff' : 'none'),
      padding: padding || defaultPadding,
      ...(text_font_size && { fontSize: `${text_font_size}px` }),
    };
  };

  const buttonStyles = getButtonStyles();

  // Safe validation for optional parameters
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
    hasValidBorder ? `border-[${border_border}]` : '',
  ]?.filter(Boolean)?.join(' ');

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(
        buttonClasses({ variant, size, fullWidth }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;