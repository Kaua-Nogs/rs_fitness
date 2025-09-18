import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Link from '../ui/Link';
import { scrollToSection as scrollToSectionUtil } from '../../utils/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // Wrapper para a função de rolagem que também atualiza a seção ativa
  const scrollToSection = (elementId) => {
    scrollToSectionUtil(elementId);
    
    // Atualiza a seção ativa
    setActiveSection(elementId);
  };
  
  // Função para detectar qual seção está visível
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'products', 'testimonials', 'cta'];
      
      // Encontrar qual seção está mais visível na tela
      let currentSection = '';
      let maxVisibility = 0;
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          
          // Se a seção estiver mais visível que a anterior
          if (visibleHeight > maxVisibility && visibleHeight > 0) {
            maxVisibility = visibleHeight;
            currentSection = sectionId;
          }
        }
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    // Adicionar event listener para scroll
    window.addEventListener('scroll', handleScroll);
    
    // Executar uma vez quando o componente montar
    handleScroll();
    
    // Remover event listener quando o componente desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Header Bar with Contact Info */}
      <div className="w-full bg-[#070910] border-b border-[#222]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex gap-2 items-center">
                <img 
                  src="/images/img_call.svg" 
                  alt="Phone" 
                  className="w-4 h-4"
                />
                <span className="text-xs font-medium text-[#f9f9f9] font-['Archivo']">
                  (98) 99999-9999
                </span>
              </div>
              
              <div className="flex gap-2 items-center">
                <img 
                  src="/images/img_mail.svg" 
                  alt="Email" 
                  className="w-4 h-3"
                />
                <span className="text-xs font-medium text-[#f9f9f9] font-['Archivo']">
                  rsfitness@gmail.com.br
                </span>
              </div>
            </div>
            
            <div className="flex gap-4 items-center ml-auto">
              <Link href="#" className="block">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </Link>
              <Link href="#" className="block">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full bg-[#070910] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-3xl font-bold font-['Oswald']">
                <span className="text-[#ff6600]">RS</span> <span className="text-white">FITNESS</span>
              </div>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <button 
              className="lg:hidden p-2 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-8 items-center">
              <Link 
                href="#about" 
                className={`text-sm font-medium ${activeSection === 'about' ? 'text-orange-400' : 'text-[#fafafa]'} font-['Archivo'] hover:text-orange-400 transition-colors outline-none focus:outline-none`}
                variant="default"
                size="medium"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                target="_self"
                rel=""
              >
                Sobre
              </Link>
              <Link 
                href="#services" 
                className={`text-sm font-medium ${activeSection === 'services' ? 'text-orange-400' : 'text-[#fafafa]'} font-['Archivo'] hover:text-orange-400 transition-colors outline-none focus:outline-none`}
                variant="default"
                size="medium"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                target="_self"
                rel=""
              >
                Serviços
              </Link>
              <Link 
                href="#products" 
                className={`text-sm font-medium ${activeSection === 'products' ? 'text-orange-400' : 'text-[#fafafa]'} font-['Archivo'] hover:text-orange-400 transition-colors outline-none focus:outline-none`}
                variant="default"
                size="medium"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('products');
                }}
                target="_self"
                rel=""
              >
                Produtos
              </Link>
              <Link 
                href="#testimonials" 
                className={`text-sm font-medium ${activeSection === 'testimonials' ? 'text-orange-400' : 'text-[#fafafa]'} font-['Archivo'] hover:text-orange-400 transition-colors outline-none focus:outline-none`}
                variant="default"
                size="medium"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('testimonials');
                }}
                target="_self"
                rel=""
              >
                Clientes
              </Link>
              <Button
                text="Solicitar Orçamento"
                className={`px-4 py-2 ${activeSection === 'cta' ? 'bg-orange-600' : 'bg-[#ef5b00]'} text-white text-sm rounded hover:bg-orange-600 transition-colors outline-none focus:outline-none`}
                border_border="none"
                layout_width="auto"
                padding="6px"
                position="relative"
                variant="primary"
                size="medium"
                onClick={() => {
                  scrollToSection('cta');
                }}
              />
            </nav>
          </div>

          {/* Mobile Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
            <div className="flex flex-col space-y-4">
              <Link 
                href="#about" 
                className={`text-sm font-medium ${activeSection === 'about' ? 'text-orange-400' : 'text-[#fafafa]'} font-['Archivo'] hover:text-orange-400 transition-colors py-2 outline-none focus:outline-none`}
                variant="default"
                size="medium"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                  setMenuOpen(false);
                }}
                target="_self"
                rel=""
              >
                Sobre
              </Link>
              <Link 
                href="#services" 
                className={`text-sm font-medium ${activeSection === 'services' ? 'text-orange-400' : 'text-[#fafafa]'} font-['Archivo'] hover:text-orange-400 transition-colors py-2 outline-none focus:outline-none`}
                variant="default"
                size="medium"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                  setMenuOpen(false);
                }}
                target="_self"
                rel=""
              >
                Serviços
              </Link>
              <Link 
                href="#products" 
                className={`text-sm font-medium ${activeSection === 'products' ? 'text-orange-400' : 'text-[#fafafa]'} font-['Archivo'] hover:text-orange-400 transition-colors py-2 outline-none focus:outline-none`}
                variant="default"
                size="medium"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('products');
                  setMenuOpen(false);
                }}
                target="_self"
                rel=""
              >
                Produtos
              </Link>
              <Link 
                href="#testimonials" 
                className={`text-sm font-medium ${activeSection === 'testimonials' ? 'text-orange-400' : 'text-[#fafafa]'} font-['Archivo'] hover:text-orange-400 transition-colors py-2 outline-none focus:outline-none`}
                variant="default"
                size="medium"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('testimonials');
                  setMenuOpen(false);
                }}
                target="_self"
                rel=""
              >
                Clientes
              </Link>
              <Button
                text="Solicitar Orçamento"
                className={`px-4 py-2 ${activeSection === 'cta' ? 'bg-orange-600' : 'bg-[#ef5b00]'} text-white text-sm rounded hover:bg-orange-600 transition-colors mt-4 outline-none focus:outline-none`}
                border_border="none"
                layout_width="auto"
                padding="6px"
                position="relative"
                variant="primary"
                size="medium"
                onClick={() => {
                  scrollToSection('cta');
                  setMenuOpen(false);
                }}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;