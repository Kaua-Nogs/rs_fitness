import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const listClasses = cva(
  'list-none',
  {
    variants: {
      variant: {
        default: '',
        ordered: 'list-decimal',
        unordered: 'list-disc',
        none: 'list-none',
      },
      orientation: {
        vertical: 'flex flex-col',
        horizontal: 'flex flex-row flex-wrap',
      },
      spacing: {
        none: 'space-y-0',
        small: 'space-y-2',
        medium: 'space-y-4',
        large: 'space-y-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      orientation: 'vertical',
      spacing: 'medium',
    },
  }
);

const listItemClasses = cva(
  'flex items-center',
  {
    variants: {
      variant: {
        default: '',
        withIcon: 'gap-2',
        withBullet: 'gap-3',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const List = ({
  // Props
  items = [],
  variant = 'default',
  orientation = 'vertical',
  spacing = 'medium',
  className,
  itemClassName,
  renderItem,
  icon,
  bullet = '•',
  children,
  ...props
}) => {
  // Determine spacing classes based on orientation
  const spacingClasses = orientation === 'horizontal' 
    ? spacing === 'small' ? 'gap-2' : spacing === 'medium' ? 'gap-4' : spacing === 'large' ? 'gap-6' : 'gap-0'
    : spacing === 'small' ? 'space-y-2' : spacing === 'medium' ? 'space-y-4' : spacing === 'large' ? 'space-y-6' : 'space-y-0';

  // Custom render function for items
  const defaultRenderItem = (item, index) => {
    if (typeof item === 'string') {
      return (
        <li 
          key={index} 
          className={twMerge(
            listItemClasses({ variant: icon || bullet ? 'withIcon' : 'default' }),
            itemClassName
          )}
        >
          {icon && (
            <span className="flex-shrink-0">
              {typeof icon === 'string' ? (
                <img src={icon} alt="" className="w-4 h-4" />
              ) : (
                icon
              )}
            </span>
          )}
          {!icon && bullet && variant !== 'ordered' && (
            <span className="flex-shrink-0 text-orange-600 font-medium">
              {bullet}
            </span>
          )}
          <span>{item}</span>
        </li>
      );
    }
    
    if (React.isValidElement(item)) {
      return (
        <li key={index} className={twMerge(listItemClasses(), itemClassName)}>
          {item}
        </li>
      );
    }
    
    return null;
  };

  const renderFunction = renderItem || defaultRenderItem;

  return (
    <ul
      className={twMerge(
        listClasses({ variant, orientation, spacing: 'none' }),
        spacingClasses,
        className
      )}
      {...props}
    >
      {items?.length > 0 
        ? items?.map((item, index) => renderFunction(item, index))
        : children
      }
    </ul>
  );
};

// List Item component for more control
const ListItem = ({
  children,
  icon,
  bullet,
  className,
  ...props
}) => {
  return (
    <li 
      className={twMerge(
        listItemClasses({ variant: icon || bullet ? 'withIcon' : 'default' }),
        className
      )}
      {...props}
    >
      {icon && (
        <span className="flex-shrink-0">
          {typeof icon === 'string' ? (
            <img src={icon} alt="" className="w-4 h-4" />
          ) : (
            icon
          )}
        </span>
      )}
      {!icon && bullet && (
        <span className="flex-shrink-0 text-orange-600 font-medium">
          {bullet}
        </span>
      )}
      <span className="flex-1">{children}</span>
    </li>
  );
};

List.Item = ListItem;

export default List;