import React from 'react';
import Button from '../../components/ui/Button';
import { scrollToSection } from '../../utils/navigation';

const CTASection = () => {
  return (
    <section id="cta" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative">
      {/* Background Images */}
      <img 
        src="/images/img_vector.png" 
        alt="Background Left" 
        className="absolute left-0 bottom-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto opacity-50"
      />
      <img 
        src="/images/img_vector_gray_50_01.png" 
        alt="Background Right" 
        className="absolute right-0 bottom-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto opacity-50"
      />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-4 sm:gap-6 justify-start items-center w-full">
          
          {/* Badge */}
          <Button
            text="EXCELÊNCIA EM EQUIPAMENTOS FITNESS"
            text_font_size="16"
            text_font_family="Oswald"
            text_font_weight="700"
            text_line_height="24px"
            text_color="#ff6600"
            fill_background_color="#ff660019"
            border_border="none"
            border_border_radius="20px"
            layout_width="auto"
            position="relative"
            variant="custom"
            size="medium"
            padding="3px 12px"
            className="text-base"
            onClick={() => {}}
          />

          {/* Main Content */}
          <div className="flex flex-col gap-2 sm:gap-3 justify-start items-center w-full max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-['Oswald'] leading-tight text-center capitalize">
              EQUIPAMENTOS DE MUSCULAÇÃO FEITOS PARA O SEU SUCESSO
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl font-medium text-[#dddee1] font-['Archivo'] leading-6 sm:leading-7 text-center w-full max-w-3xl">
              Entre em contato hoje mesmo e descubra como a RS Fitness pode ajudar seu negócio a alcançar novos patamares de sucesso.
            </p>
          </div>

          {/* CTA Button - Ao estar já na seção CTA, este botão poderia abrir um modal ou formulário */}
          <Button
            text="Peça seu orçamento"
            text_font_size="16"
            text_font_family="Archivo"
            text_font_weight="500"
            text_line_height="20px"
            text_color="#ffffff"
            fill_background_color="#ef5b00"
            border_border="none"
            border_border_radius="4px"
            layout_width="auto"
            position="relative"
            variant="primary"
            size="medium"
            padding="10px 20px"
            className="text-base mt-4"
            onClick={() => {
              // Como já estamos na seção CTA, poderíamos abrir um modal ou formulário
              // Por enquanto, apenas mantém a rolagem para a própria seção
              scrollToSection('cta');
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;