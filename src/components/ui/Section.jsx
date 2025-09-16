import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import theme from '../../theme';

/**
 * Componente Section
 * 
 * Um componente reutilizável para criar seções consistentes em todo o site
 * 
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Conteúdo da seção
 * @param {string} props.className - Classes CSS adicionais
 * @param {string} props.backgroundImage - URL da imagem de fundo
 * @param {string} props.backgroundOverlay - Gradient overlay para a imagem de fundo
 * @param {string} props.backgroundColor - Cor de fundo da seção
 * @param {string} props.id - ID da seção para navegação
 * @param {boolean} props.fullWidth - Se a seção deve ocupar toda a largura da tela
 * @param {boolean} props.fullHeight - Se a seção deve ocupar toda a altura da tela
 * @param {string} props.paddingY - Padding vertical (sm, md, lg, xl)
 * @param {string} props.paddingX - Padding horizontal (sm, md, lg, xl)
 * @param {string} props.containerWidth - Largura máxima do container (sm, md, lg, xl, 2xl)
 * @returns {JSX.Element} Componente Section
 */
const Section = ({
  children,
  className = '',
  backgroundImage = '',
  backgroundOverlay = '',
  backgroundColor = '',
  id,
  fullWidth = false,
  fullHeight = false,
  paddingY = 'lg',
  paddingX = 'lg',
  containerWidth = '2xl',
  ...props
}) => {
  // Mapeia valores de padding para classes Tailwind
  const paddingYClasses = {
    none: '',
    xs: 'py-2',
    sm: 'py-4 sm:py-8',
    md: 'py-8 sm:py-12 md:py-16',
    lg: 'py-12 sm:py-16 md:py-20 lg:py-24',
    xl: 'py-16 sm:py-20 md:py-24 lg:py-32'
  };

  const paddingXClasses = {
    none: '',
    xs: 'px-2',
    sm: 'px-4',
    md: 'px-4 sm:px-6',
    lg: 'px-4 sm:px-6 lg:px-8',
    xl: 'px-4 sm:px-8 lg:px-12'
  };

  const containerWidthClasses = {
    sm: 'max-w-[640px]',
    md: 'max-w-[768px]',
    lg: 'max-w-[1024px]',
    xl: 'max-w-[1280px]',
    '2xl': 'max-w-[1440px]',
    full: 'max-w-none'
  };

  // Estilo para background
  const backgroundStyle = {
    ...(backgroundImage && {
      backgroundImage: backgroundOverlay 
        ? `${backgroundOverlay}, url('${backgroundImage}')`
        : `url('${backgroundImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }),
    ...(backgroundColor && { backgroundColor })
  };

  return (
    <section 
      id={id}
      className={twMerge(
        'w-full relative',
        fullHeight ? 'min-h-screen' : '',
        className
      )}
      style={backgroundStyle}
      {...props}
    >
      <div className={twMerge(
        fullWidth ? 'w-full' : `mx-auto ${containerWidthClasses[containerWidth] || containerWidthClasses['2xl']}`,
        paddingXClasses[paddingX],
      )}>
        <div className={twMerge(
          paddingYClasses[paddingY]
        )}>
          {children}
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundOverlay: PropTypes.string,
  backgroundColor: PropTypes.string,
  id: PropTypes.string,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  paddingY: PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl']),
  paddingX: PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl']),
  containerWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl', 'full']),
};

export default Section;