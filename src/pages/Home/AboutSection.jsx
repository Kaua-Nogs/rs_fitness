import React from 'react';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import IconButton from '../../components/ui/IconButton';
import Line from '../../components/ui/Line';

const AboutSection = () => {
  return (
    <section className="w-full relative py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background Circle */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[652px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[652px] bg-[#fafafa1e] rounded-full opacity-20"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-6 justify-center items-start w-full">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-10 justify-start items-center w-full lg:w-2/3">
            
            {/* Header Section */}
            <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-7 justify-start items-start w-full">
              
              {/* Badge */}
              <Button
                text="SOBRE A RS FITNESS"
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
                variant="primary"
                size="medium"
                padding="4px 16px"
                onClick={() => {}}
                className="text-sm sm:text-base md:text-lg lg:text-xl"
              />
              
              {/* Title and Description */}
              <div className="flex flex-col justify-start items-center w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white font-['Oswald'] leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[63px] text-left capitalize w-full">
                  <span className="text-[#ff6600]">Especialistas</span>
                  <span className="text-white"> em equipamentos fitness</span>
                </h2>
                
                <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-normal text-white font-['Archivo'] leading-7 sm:leading-8 md:leading-9 lg:leading-[33px] text-left w-full mt-4 sm:mt-5 md:mt-6 lg:mt-6">
                  Excelência na fabricação sob medida de equipamentos de musculação e fitness. Nossa equipe altamente qualificados trabalha para entregar soluções personalizadas que atendem às necessidades específicas de cada cliente.
                </p>
              </div>
              
              {/* Orange Line */}
              <Line 
                width="60px"
                height="4px"
                style={{ backgroundColor: '#ff6600' }}
                className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[80px] h-1 bg-[#ff6600]"
              />
            </div>

            {/* Features Grid */}
            <div className="flex flex-col gap-6 justify-start items-center w-full">
              
              {/* First Row */}
              <div className="flex flex-col sm:flex-row gap-6 justify-start items-center w-full">
                
                {/* Equipment Feature */}
                <div className="w-full sm:w-1/2">
                  <EditText
                    placeholder="Equipamento moderno"
                    text_font_size="16"
                    text_font_family="Oswald"
                    text_font_weight="700"
                    text_line_height="24px"
                    text_color="#ffffff"
                    fill_background_color="#ffffff07"
                    border_border="1px solid #ffffff0f"
                    border_border_radius="16px"
                    layout_gap="0"
                    layout_width="100%"
                    position="relative"
                    variant="outlined"
                    size="large"
                    value=""
                    onChange={() => {}}
                    onFocus={() => {}}
                    onBlur={() => {}}
                    name="equipment"
                    id="equipment"
                    padding="38px 12px 38px 104px"
                    className="w-full"
                  />
                </div>
                
                {/* Technical Support */}
                <div className="flex justify-center items-center w-full sm:w-1/2 bg-[#ffffff07] border border-[#ffffff0f] rounded-2xl p-6 sm:p-7">
                  <IconButton
                    src="/images/img_exercise_6794095.svg"
                    variant="primary"
                    size="large"
                    onClick={() => {}}
                    className="w-16 h-16 bg-[#ff6600] rounded-[32px] p-3"
                    alt="Technical Support"
                  />
                  <div className="flex justify-start items-center flex-1 px-4">
                    <span className="text-lg sm:text-xl font-bold text-white font-['Oswald'] leading-[30px] text-left">
                      Apoio e reparos técnicos
                    </span>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col sm:flex-row gap-6 justify-start items-center w-full">
                
                {/* Continuous Support */}
                <div className="flex justify-center items-center w-full sm:w-1/2 bg-[#ffffff07] border border-[#ffffff0f] rounded-2xl p-6 sm:p-7">
                  <IconButton
                    src="/images/img_icon.svg"
                    variant="primary"
                    size="large"
                    onClick={() => {}}
                    className="w-16 h-16 bg-[#ff6600] rounded-[32px] p-3"
                    alt="Continuous Support"
                  />
                  <div className="flex justify-start items-center flex-1 px-4">
                    <span className="text-lg sm:text-xl font-bold text-white font-['Oswald'] leading-[30px] text-left">
                      Suporte contínuo
                    </span>
                  </div>
                </div>
                
                {/* Investment Management */}
                <div className="flex justify-center items-center w-full sm:w-1/2 bg-[#ffffff07] border border-[#ffffff0f] rounded-2xl p-6 sm:p-7">
                  <IconButton
                    src="/images/img_gym_14608138_1.svg"
                    variant="primary"
                    size="large"
                    onClick={() => {}}
                    className="w-16 h-16 bg-[#ff6600] rounded-[32px] p-3"
                    alt="Investment Management"
                  />
                  <div className="flex justify-start items-center flex-1 px-4">
                    <span className="text-lg sm:text-xl font-bold text-white font-['Oswald'] leading-[30px] text-left">
                      Gestão de investimento
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <img 
              src="/images/img_image.png" 
              alt="Fitness Equipment" 
              className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[380px] lg:max-w-[382px] h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;