import React from 'react';
import Button from '../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 relative">
      {/* Background Images */}
      <img 
        src="/images/img_vector.png" 
        alt="Background Left" 
        className="absolute left-0 bottom-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[606px] h-auto opacity-50"
      />
      <img 
        src="/images/img_vector_gray_50_01.png" 
        alt="Background Right" 
        className="absolute right-0 bottom-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[648px] h-auto opacity-50"
      />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-6 sm:gap-8 justify-start items-center w-full">
          
          {/* Badge */}
          <Button
            text="EXCELÊNCIA EM EQUIPAMENTOS FITNESS"
            text_font_size="18"
            text_font_family="Oswald"
            text_font_weight="700"
            text_line_height="28px"
            text_color="#ff6600"
            fill_background_color="#ff660019"
            border_border="none"
            border_border_radius="24px"
            layout_width="auto"
            position="relative"
            variant="custom"
            size="medium"
            padding="4px 16px"
            className="text-sm sm:text-base md:text-lg lg:text-xl"
            onClick={() => {}}
          />

          {/* Main Content */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-start items-center w-full max-w-5xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-white font-['Oswald'] leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[85px] text-center capitalize">
              EQUIPAMENTOS DE MUSCULAÇÃO FEITOS PARA O SEU SUCESSO
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold text-[#dddee1] font-['Archivo'] leading-7 sm:leading-8 md:leading-9 lg:leading-[36px] text-center w-full">
              Entre em contato hoje mesmo e descubra como a RS Fitness pode ajudar seu negócio a alcançar novos patamares de sucesso.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            text="Peça seu orçamento"
            text_font_size="18"
            text_font_family="Inter"
            text_font_weight="500"
            text_line_height="22px"
            text_color="#ffffff"
            fill_background_color="#ef5b00"
            border_border="none"
            border_border_radius="4px"
            layout_width="auto"
            position="relative"
            variant="custom"
            size="medium"
            padding="12px 24px"
            className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6"
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;