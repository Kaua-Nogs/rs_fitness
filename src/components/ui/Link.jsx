import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const linkClasses = cva(
  'inline-flex items-center transition-all duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'text-white hover:text-orange-400',
        secondary: 'text-gray-300 hover:text-white',
        accent: 'text-orange-600 hover:text-orange-500',
        muted: 'text-gray-400 hover:text-gray-300',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Link = ({
  // Standard props
  href = "#",
  children,
  variant,
  size,
  className,
  onClick,
  target,
  rel,
  ...props
}) => {
  // Handle click events
  const handleClick = (event) => {
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  // Determine if it's an external link
  const isExternal = href && (href?.startsWith('http') || href?.startsWith('mailto:') || href?.startsWith('tel:'));
  
  // Set appropriate rel attribute for external links
  const linkRel = isExternal ? (rel || 'noopener noreferrer') : rel;
  const linkTarget = isExternal ? (target || '_blank') : target;

  return (
    <a
      href={href}
      target={linkTarget}
      rel={linkRel}
      onClick={handleClick}
      className={twMerge(
        linkClasses({ variant, size }),
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;