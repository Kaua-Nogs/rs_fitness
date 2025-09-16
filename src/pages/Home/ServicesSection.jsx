import React from 'react';
import Button from '../../components/ui/Button';
import IconButton from '../../components/ui/IconButton';
import Line from '../../components/ui/Line';
import Section from '@/components/ui/Section';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: '/images/img_frame.svg',
      title: 'Fabricação sob demanda',
      description:
        'Equipamentos para atender às necessidades específicas da sua academia, com design exclusivo, personalizados e materiais de alta qualidade.',
    },
    {
      id: 2,
      icon: '/images/img_frame_orange_a700.svg',
      title: 'Manutenção',
      description:
        'Serviços de manutenção preventiva e corretiva para garantir a durabilidade e o bom funcionamento dos seus equipamentos.',
    },
    {
      id: 3,
      icon: '/images/img_frame.svg',
      title: 'Reparo técnico',
      description:
        'Assistência técnica especializada para resolver problemas e restaurar o desempenho dos seus aparelhos de musculação.',
    },
    {
      id: 4,
      icon: '/images/img_frame_orange_a700_64x64.svg',
      title: 'Consultoria e gestão',
      description:
        'Orientação profissional para otimizar o layout da academia, selecionar equipamentos adequados e implementar estratégias de gestão eficientes.',
    },
  ];

  return (
    <Section
      backgroundImage="/images/img_.png"
      backgroundOverlay="linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6))"
      paddingY="lg"
      containerWidth="xl"
      id="services"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center w-full">
          {/* Header Section */}
          <div className="flex flex-col justify-start items-center w-full max-w-xl">
            <span className="text-base sm:text-lg font-bold text-[#ff6600] font-['Oswald'] leading-7 text-left bg-[#ff660019] rounded-2xl px-3 py-1.5">
              NOSSOS SERVIÇOS
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-['Oswald'] leading-tight text-center capitalize mt-4">
              <span className="text-white">soluções para a </span>
              <span className="text-[#ff6600]">sua</span>
              <span className="text-white"> </span>
              <span className="text-[#ff6600]">empresa</span>
            </h2>

            <p className="text-base font-normal text-white font-['Archivo'] leading-6 text-center w-full mt-2 max-w-lg">
              Oferecemos soluções completas para academias e centros de treinamento, desde a
              fabricação de equipamentos até a gestão do negócio.
            </p>

            {/* Orange Line */}
            <Line
              className="w-[50px] h-0.5 bg-[#ff6600] mt-4"
              width="50px"
              height="2px"
              style={{ backgroundColor: '#ff6600' }}
            />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full max-w-[1100px]">
            {services?.map((service) => (
              <div
                key={service?.id}
                className="flex flex-col justify-start items-start w-full bg-[#070910a7] rounded-lg p-4 sm:p-5 md:p-6 lg:p-6 shadow-[0px_0px_20px_#ff660019] hover:shadow-[0px_0px_30px_#ff660025] transition-shadow duration-300"
              >
                <IconButton
                  src={service?.icon}
                  className="w-12 h-12 bg-[#ff660019] rounded-2xl p-2.5"
                  alt={service?.title}
                  variant="primary"
                  size="medium"
                  onClick={() => {}}
                />

                <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-white font-['Oswald'] leading-7 sm:leading-8 text-left mt-4">
                  {service?.title}
                </h3>

                <p className="text-sm font-medium text-[#fafafa] font-['Archivo'] leading-5 text-left w-full mt-2">
                  {service?.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            text="Peça seu orçamento"
            text_font_size="16"
            text_font_family="Archivo"
            text_font_weight="500"
            text_line_height="20px"
            text_color="#ffffff"
            fill_background_color="#ef5b00"
            border_border_radius="4px"
            border_border="none"
            layout_width="auto"
            position="relative"
            padding="10px 20px"
            className="text-base mt-2"
            variant="primary"
            size="medium"
            onClick={() => {}}
          />
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
