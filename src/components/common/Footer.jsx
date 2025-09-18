import React from 'react';
import Link from '../ui/Link';
import IconButton from '../ui/IconButton';
import { scrollToSection } from '../../utils/navigation';

const Footer = () => {
  return (
    <footer className="w-full bg-[#dddee10a] py-10 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
            
            {/* Company Info Section */}
            <div className="flex flex-col gap-6 items-center lg:items-start w-full lg:w-[18%]">
              <img 
                src="/images/img_frame_210.svg" 
                alt="A2 Fitness Logo" 
                className="w-[180px] lg:w-[206px] h-auto"
              />
              <p className="text-sm font-normal text-[#dddee1] font-['Archivo'] leading-5 text-center lg:text-left">
                Especialistas em fabricação, manutenção e consultoria para academias e centros de treinamento.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 items-center">
                <IconButton
                  src="/images/img_container_gray_300.svg"
                  className="w-[34px] h-[34px] bg-[#070910] rounded-2xl p-2"
                  alt="Social Media 1"
                  variant="default"
                  size="md"
                  onClick={() => {}}
                />
                <IconButton
                  src="/images/img_container_black_900.svg"
                  className="w-[34px] h-[34px] rounded-2xl p-2"
                  alt="Social Media 2"
                  variant="default"
                  size="md"
                  onClick={() => {}}
                />
              </div>
            </div>

            {/* Links and Services Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12 w-full lg:w-[42%]">
              
              {/* Quick Links */}
              <div className="w-full sm:w-auto">
                <h3 className="text-lg lg:text-xl font-bold text-white font-['Oswald'] leading-[30px] mb-6">
                  Links Rápidos
                </h3>
                <ul className="space-y-7">
                  <li className="flex items-center gap-3">
                    <span className="text-[13px] font-normal text-[#ff6600] font-['Inter']">›</span>
                    <Link 
                      href="#about" 
                      className="text-sm font-normal text-[#dddee1] font-['Archivo'] hover:text-white transition-colors"
                      variant="default"
                      size="md"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('about');
                      }}
                      target="_self"
                      rel="nofollow"
                    >
                      Sobre Nós
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[13px] font-normal text-[#ff6600] font-['Inter']">›</span>
                    <Link 
                      href="#services" 
                      className="text-sm font-normal text-[#dddee1] font-['Archivo'] hover:text-white transition-colors"
                      variant="default"
                      size="md"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('services');
                      }}
                      target="_self"
                      rel="nofollow"
                    >
                      Serviços
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[13px] font-normal text-[#ff6600] font-['Inter']">›</span>
                    <Link 
                      href="#products" 
                      className="text-sm font-normal text-[#dddee1] font-['Archivo'] hover:text-white transition-colors"
                      variant="default"
                      size="md"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('products');
                      }}
                      target="_self"
                      rel="nofollow"
                    >
                      Produtos
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[13px] font-normal text-[#ff6600] font-['Inter']">›</span>
                    <Link 
                      href="#cta" 
                      className="text-sm font-normal text-[#dddee1] font-['Archivo'] hover:text-white transition-colors"
                      variant="default"
                      size="md"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('cta');
                      }}
                      target="_self"
                      rel="nofollow"
                    >
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="w-full sm:w-auto">
                <h3 className="text-lg lg:text-xl font-bold text-white font-['Oswald'] leading-[30px] mb-6">
                  Serviços
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-[13px] font-normal text-[#ff6600] font-['Inter']">›</span>
                    <Link 
                      href="#services" 
                      className="text-sm font-normal text-[#dddee1] font-['Archivo'] hover:text-white transition-colors"
                      variant="default"
                      size="md"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('services');
                      }}
                    >
                      Fabricação sob demanda
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[13px] font-normal text-[#ff6600] font-['Inter']">›</span>
                    <Link 
                      href="#services" 
                      className="text-sm font-normal text-[#dddee1] font-['Archivo'] hover:text-white transition-colors"
                      variant="default"
                      size="md"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('services');
                      }}
                    >
                      Manutenção
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[13px] font-normal text-[#ff6600] font-['Inter']">›</span>
                    <Link 
                      href="#services" 
                      className="text-sm font-normal text-[#dddee1] font-['Archivo'] hover:text-white transition-colors"
                      variant="default"
                      size="md"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('services');
                      }}
                    >
                      Reparo técnico
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[13px] font-normal text-[#ff6600] font-['Inter']">›</span>
                    <Link 
                      href="#services" 
                      className="text-sm font-normal text-[#dddee1] font-['Archivo'] hover:text-white transition-colors"
                      variant="default"
                      size="md"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('services');
                      }}
                    >
                      Consultoria
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[13px] font-normal text-[#ff6600] font-['Inter']">›</span>
                    <Link 
                      href="#services" 
                      className="text-sm font-normal text-[#dddee1] font-['Archivo'] hover:text-white transition-colors"
                      variant="default"
                      size="md"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('services');
                      }}
                    >
                      Gestão de academias
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="w-full lg:w-[18%]">
              <h3 className="text-lg lg:text-xl font-bold text-white font-['Oswald'] leading-[30px] mb-7">
                Contato
              </h3>
              <div className="space-y-6">
                {/* Phone */}
                <Link 
                  href="tel:+5598999999999" 
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  variant="default"
                  size="md"
                  onClick={() => {}}
                  target="_self"
                  rel="nofollow"
                >
                  <IconButton
                    src="/images/img_container_34x34.svg"
                    className="w-[34px] h-[34px] bg-[#ff660019] rounded-2xl p-2"
                    alt="Phone"
                    variant="default"
                    size="md"
                    onClick={() => {}}
                  />
                  <span className="text-sm font-normal text-[#dddee1] font-['Archivo']">
                    (98) 9999-9999
                  </span>
                </Link>
                
                {/* Email */}
                <Link 
                  href="mailto:contato@rsfitness.com.br" 
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  variant="default"
                  size="md"
                  onClick={() => {}}
                  target="_self"
                  rel="nofollow"
                >
                  <IconButton
                    src="/images/img_container_orange_a700_34x34.svg"
                    className="w-[34px] h-[34px] rounded-2xl p-2"
                    alt="Email"
                    variant="default"
                    size="md"
                    onClick={() => {}}
                  />
                  <span className="text-sm font-normal text-[#dddee1] font-['Archivo']">
                    contato@rsfitness.com.br
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-16 pt-6 border-t border-gray-700">
            <p className="text-base font-normal text-white font-['Archivo'] text-center lg:text-left">
              Copyright © 2025 Todos os direitos reservados / Desenvolvido por ClubTI
            </p>
            <img 
              src="/images/img_principal_horizontal.png" 
              alt="ClubTI Logo" 
              className="w-[80px] lg:w-[102px] h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;