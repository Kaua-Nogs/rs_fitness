import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const iconButtonClasses = cva(
  'inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-2 border-gray-300 bg-transparent hover:bg-gray-100 focus:ring-gray-500',
        ghost: 'bg-transparent hover:bg-gray-100 focus:ring-gray-500',
      },
      size: {
        small: 'w-8 h-8 p-1',
        medium: 'w-10 h-10 p-2',
        large: 'w-12 h-12 p-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const IconButton = ({
  // Props
  src,
  alt = "Icon",
  variant,
  size,
  disabled = false,
  className,
  onClick,
  children,
  ...props
}) => {
  // Handle click events
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={twMerge(
        iconButtonClasses({ variant, size }),
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-contain"
        />
      ) : (
        children
      )}
    </button>
  );
};

export default IconButton;