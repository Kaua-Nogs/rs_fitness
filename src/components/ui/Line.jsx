import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const lineClasses = cva(
  'bg-gray-300',
  {
    variants: {
      orientation: {
        horizontal: 'w-full h-px',
        vertical: 'w-px h-full',
      },
      variant: {
        solid: 'bg-gray-300',
        dashed: 'border-dashed border-gray-300',
        dotted: 'border-dotted border-gray-300',
        primary: 'bg-orange-600',
        secondary: 'bg-gray-600',
        muted: 'bg-gray-200',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      variant: 'solid',
    },
  }
);

const Line = ({
  // Props
  orientation = 'horizontal',
  variant = 'solid',
  width,
  height,
  className,
  style,
  ...props
}) => {
  // Build inline styles
  const lineStyles = {
    ...style,
    ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
    ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
  };

  return (
    <div
      className={twMerge(
        lineClasses({ orientation, variant }),
        className
      )}
      style={lineStyles}
      role="separator"
      {...props}
    />
  );
};

export default Line;