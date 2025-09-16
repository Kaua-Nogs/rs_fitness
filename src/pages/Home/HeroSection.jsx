import React from 'react';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import Section from '../../components/ui/Section';
import theme from '../../theme';

const HeroSection = () => {
  // Função auxiliar para rolagem suave até elementos
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Offset para ajustar a posição de rolagem (para levar em conta o header fixo)
      const headerOffset = 96; // Considera a altura do header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <Section
      backgroundImage="/images/img_section_2.png"
      backgroundOverlay="linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6))"
      paddingY="lg"
      containerWidth="xl"
      id="hero"
    >
      <div className="flex flex-col gap-12 sm:gap-16 justify-start items-center">
        
        {/* Badge */}
        <div className="flex justify-center items-center">
          <Button
            text="EXCELÊNCIA EM EQUIPAMENTOS FITNESS"
            variant="badge"
            size="medium"
            onClick={() => {}}
            text_font_size="16"
            text_font_family="Oswald"
            text_font_weight="700"
            text_line_height="24px"
            text_color="#ff6600"
            fill_background_color="transparent"
            padding="3px 12px"
            className="tracking-wider"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-6 sm:gap-8 justify-start items-center w-full max-w-[1202px]">
          
          {/* Heading and Description */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-start items-center w-full">
            <Typography variant="h1" align="center" gutterBottom>
              <span>EQUIPAMENTOS PERSONALIZADOS PARA TRANSFORMAR SUA </span>
              <span className="text-[var(--color-primary)]">ACADEMIA</span>
            </Typography>
            
            <Typography variant="subtitle1" align="center" className="max-w-3xl">
              Fabricação personalizada, manutenção especializada e consultoria para o sucesso do seu negócio.
            </Typography>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mt-3">
            <Button
              text="Peça seu orçamento"
              variant="primary"
              size="medium"
              onClick={() => scrollToSection('cta')}
              className="w-full sm:w-auto text-base font-medium"
              text_font_size="16"
              text_font_family="Archivo"
              text_font_weight="500"
              text_line_height="20px"
              padding="10px 20px"
              fill_background_color="#ef5b00"
              border_border_radius="4px"
            />
            <Button
              text="Conheça nossos serviços"
              variant="secondary"
              size="medium"
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto text-base font-medium"
              text_font_size="16"
              text_font_family="Archivo"
              text_font_weight="500"
              text_line_height="20px"
              padding="10px 20px"
              fill_background_color="transparent"
              border_border="1px solid #fafafa"
              border_border_radius="4px"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;