import React, { useState } from 'react';
import Button from '../ui/Button';
import Link from '../ui/Link';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Header Bar
      
      <div className="w-full bg-[#070910] shadow-[0px_4px_100px_#888888ff]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-1">
            <div className="hidden lg:flex justify-between items-center w-[60%]">
          
              <div className="flex gap-2 justify-center items-center">
                <img 
                  src="/images/img_call.svg" 
                  alt="Phone" 
                  className="w-6 h-6"
                />
                <span className="text-sm font-medium text-[#f9f9f9] font-['Archivo']">
                  (98) 99999-9999
                </span>
              </div>
              
              <div className="flex gap-2 justify-center items-center">
                <img 
                  src="/images/img_mail.svg" 
                  alt="Email" 
                  className="w-5 h-4"
                />
                <span className="text-sm font-medium text-[#f9f9f9] font-['Archivo']">
                  rsfitness@gmail.com.br
                </span>
              </div>
            </div>
            
            <div className="flex gap-6 justify-center items-center ml-auto">
              <Link href="#" className="block">
                <img 
                  src="/images/img_01.svg" 
                  alt="Social 1" 
                  className="w-[14px] h-[18px]"
                />
              </Link>
              <Link href="#" className="block">
                <img 
                  src="/images/img_03.svg" 
                  alt="Social 2" 
                  className="w-[14px] h-[18px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      */}
      

      {/* Main Navigation */}
      <div className="w-full bg-[#070910] shadow-[0px_4px_100px_#888888ff]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/images/img_frame_210.svg" 
                alt="A2 Fitness Logo" 
                className="w-[180px] sm:w-[200px] lg:w-[230px] h-auto"
              />
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
                href="#sobre" 
                className="text-base font-medium text-[#fafafa] font-['Archivo'] hover:text-orange-400 transition-colors"
                variant="default"
                size="medium"
                onClick={() => {}}
                target="_self"
                rel=""
              >
                Sobre
              </Link>
              <Link 
                href="#servicos" 
                className="text-base font-medium text-[#fafafa] font-['Archivo'] hover:text-orange-400 transition-colors"
                variant="default"
                size="medium"
                onClick={() => {}}
                target="_self"
                rel=""
              >
                Serviços
              </Link>
              <Link 
                href="#produtos" 
                className="text-base font-medium text-[#fafafa] font-['Archivo'] hover:text-orange-400 transition-colors"
                variant="default"
                size="medium"
                onClick={() => {}}
                target="_self"
                rel=""
              >
                Produtos
              </Link>
              <Link 
                href="#clientes" 
                className="text-base font-medium text-[#fafafa] font-['Archivo'] hover:text-orange-400 transition-colors"
                variant="default"
                size="medium"
                onClick={() => {}}
                target="_self"
                rel=""
              >
                Clientes
              </Link>
              <Button
                text="Solicitar Orçamento"
                className="px-6 py-2 bg-[#ef5b00] text-white rounded hover:bg-orange-600 transition-colors"
                border_border="none"
                layout_width="auto"
                padding="6px"
                position="relative"
                variant="primary"
                size="medium"
                onClick={() => {}}
              />
            </nav>
          </div>

          {/* Mobile Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
            <div className="flex flex-col space-y-4">
              <Link 
                href="#sobre" 
                className="text-base font-medium text-[#fafafa] font-['Archivo'] hover:text-orange-400 transition-colors py-2"
                variant="default"
                size="medium"
                onClick={() => setMenuOpen(false)}
                target="_self"
                rel=""
              >
                Sobre
              </Link>
              <Link 
                href="#servicos" 
                className="text-base font-medium text-[#fafafa] font-['Archivo'] hover:text-orange-400 transition-colors py-2"
                variant="default"
                size="medium"
                onClick={() => setMenuOpen(false)}
                target="_self"
                rel=""
              >
                Serviços
              </Link>
              <Link 
                href="#produtos" 
                className="text-base font-medium text-[#fafafa] font-['Archivo'] hover:text-orange-400 transition-colors py-2"
                variant="default"
                size="medium"
                onClick={() => setMenuOpen(false)}
                target="_self"
                rel=""
              >
                Produtos
              </Link>
              <Link 
                href="#clientes" 
                className="text-base font-medium text-[#fafafa] font-['Archivo'] hover:text-orange-400 transition-colors py-2"
                variant="default"
                size="medium"
                onClick={() => setMenuOpen(false)}
                target="_self"
                rel=""
              >
                Clientes
              </Link>
              <Button
                text="Solicitar Orçamento"
                className="px-6 py-2 bg-[#ef5b00] text-white rounded hover:bg-orange-600 transition-colors mt-4"
                border_border="none"
                layout_width="auto"
                padding="6px"
                position="relative"
                variant="primary"
                size="medium"
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;