import React from 'react';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <section 
      className="w-full bg-[linear-gradient(180deg,#080910a5_0%,_#080910_100%)] relative"
      style={{
        backgroundImage: "url('/images/img_section_2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-24 justify-start items-center py-16 sm:py-20 md:py-24 lg:py-32">
          
          {/* Badge */}
          <div className="flex justify-center items-center">
            <Button
              text="EXCELÊNCIA EM EQUIPAMENTOS FITNESS"
              text_font_size="18"
              text_font_family="Oswald"
              text_font_weight="700"
              text_line_height="28px"
              text_color="#ff6600"
              fill_background_color="#07091089"
              border_border="none"
              border_border_radius="24px"
              padding="4px 16px"
              layout_width="auto"
              position="relative"
              variant="primary"
              size="medium"
              onClick={() => {}}
              className="text-sm sm:text-base md:text-lg lg:text-xl"
            />
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-6 sm:gap-8 justify-start items-center w-full max-w-[1202px]">
            
            {/* Heading and Description */}
            <div className="flex flex-col gap-3 sm:gap-4 justify-start items-center w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-white font-['Oswald'] leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[85px] text-center capitalize">
                <span className="text-white">EQUIPAMENTOS PERSONALIZADOS PARA TRANSFORMAR SUA </span>
                <span className="text-[#ff6600]">ACADEMIA</span>
              </h1>
              
              <div className="flex justify-center items-center w-full">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold text-[#dddee1] font-['Archivo'] leading-6 sm:leading-7 md:leading-8 lg:leading-[27px] text-center max-w-3xl">
                  Fabricação personalizada, manutenção especializada e consultoria para o sucesso do seu negócio.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full sm:w-auto">
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
                padding="12px 24px"
                layout_width="auto"
                position="relative"
                variant="primary"
                size="medium"
                onClick={() => {}}
                className="w-full sm:w-auto text-base sm:text-lg md:text-xl"
              />
              <Button
                text="Conheça nossos serviços"
                text_font_size="18"
                text_font_family="Inter"
                text_font_weight="500"
                text_line_height="22px"
                text_color="#ffffff"
                fill_background_color="transparent"
                border_border="1px solid #fafafa"
                border_border_radius="4px"
                padding="12px 24px"
                layout_width="auto"
                position="relative"
                variant="secondary"
                size="medium"
                onClick={() => {}}
                className="w-full sm:w-auto text-base sm:text-lg md:text-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;