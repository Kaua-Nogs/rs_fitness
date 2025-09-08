import React from 'react';
import Button from '../../components/ui/Button';
import IconButton from '../../components/ui/IconButton';
import Line from '../../components/ui/Line';


const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "/images/img_frame.svg",
      title: "Fabricação sob demanda",
      description: "Equipamentos para atender às necessidades específicas da sua academia, com design exclusivo, personalizados e materiais de alta qualidade."
    },
    {
      id: 2,
      icon: "/images/img_frame_orange_a700.svg",
      title: "Manutenção",
      description: "Serviços de manutenção preventiva e corretiva para garantir a durabilidade e o bom funcionamento dos seus equipamentos."
    },
    {
      id: 3,
      icon: "/images/img_frame.svg",
      title: "Reparo técnico",
      description: "Assistência técnica especializada para resolver problemas e restaurar o desempenho dos seus aparelhos de musculação."
    },
    {
      id: 4,
      icon: "/images/img_frame_orange_a700_64x64.svg",
      title: "Consultoria e gestão",
      description: "Orientação profissional para otimizar o layout da academia, selecionar equipamentos adequados e implementar estratégias de gestão eficientes."
    }
  ];

  return (
    <section 
      className="w-full py-16 sm:py-20 md:py-24 lg:py-32"
      style={{
        backgroundImage: "url('/images/img_.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-10 justify-center items-center w-full">
          
          {/* Header Section */}
          <div className="flex flex-col justify-start items-center w-full max-w-2xl">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-[#ff6600] font-['Oswald'] leading-9 text-left bg-[#ff660019] rounded-3xl px-4 py-2">
              NOSSOS SERVIÇOS
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white font-['Oswald'] leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[63px] text-center capitalize mt-6">
              <span className="text-white">soluções para a </span>
              <span className="text-[#ff6600]">sua</span>
              <span className="text-white"> </span>
              <span className="text-[#ff6600]">empresa</span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-xl lg:text-xl font-normal text-white font-['Archivo'] leading-7 sm:leading-8 md:leading-9 lg:leading-[30px] text-center w-full mt-2">
              Oferecemos soluções completas para academias e centros de treinamento, desde a fabricação de equipamentos até a gestão do negócio.
            </p>
            
            {/* Orange Line */}
            <Line 
              className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[80px] h-1 bg-[#ff6600] mt-6"
              width="80px"
              height="4px"
              style={{ backgroundColor: '#ff6600' }}
            />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full max-w-[1202px]">
            {services?.map((service) => (
              <div 
                key={service?.id}
                className="flex flex-col justify-start items-start w-full bg-[#070910a7] rounded-xl p-6 sm:p-7 md:p-8 lg:p-[52px_22px] shadow-[0px_0px_25px_#ff660019] hover:shadow-[0px_0px_35px_#ff660025] transition-shadow duration-300"
              >
                <IconButton
                  src={service?.icon}
                  className="w-16 h-16 bg-[#ff660019] rounded-[32px] p-3 sm:p-4"
                  alt={service?.title}
                  variant="primary"
                  size="medium"
                  onClick={() => {}}
                />
                
                <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-white font-['Oswald'] leading-8 sm:leading-9 lg:leading-[36px] text-left mt-5 sm:mt-6">
                  {service?.title}
                </h3>
                
                <p className="text-sm sm:text-base lg:text-base font-medium text-[#fafafa] font-['Archivo'] leading-5 sm:leading-6 lg:leading-[22px] text-left w-full mt-3 sm:mt-4">
                  {service?.description}
                </p>
              </div>
            ))}
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
            border_border_radius="4px"
            border_border="none"
            layout_width="auto"
            position="relative"
            padding="12px 24px"
            className="text-base sm:text-lg md:text-xl"
            variant="primary"
            size="medium"
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;