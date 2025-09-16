import React from 'react';
import Line from '../../components/ui/Line';
import Section from '@/components/ui/Section';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Os equipamentos da RS Fitness transformaram completamente minha academia. A qualidade é excepcional e o atendimento personalizado fez toda a diferença.",
      name: "Carlos Silva",
      role: "Proprietário de academia",
      avatar: "/images/img_image_48x48.png"
    },
    {
      id: 2,
      quote: "A consultoria da RS Fitness nos ajudou a otimizar o espaço e selecionar os equipamentos ideais para nosso público. O retorno sobre o investimento foi muito rápido.",
      name: "Mariana Costa",
      role: "Treinadora",
      avatar: "/images/img_container_orange_a700.svg"
    },
    {
      id: 3,
      quote: "O serviço de manutenção preventiva da RS Fitness é impecável. Nossos equipamentos estão sempre em perfeitas condições, o que aumenta a satisfação dos clientes.",
      name: "Roberto Almeida",
      role: "Gerente da XXXX",
      avatar: "/images/img_container_orange_a700.svg"
    }
  ];

  return (
    <Section
          backgroundImage="/images/img_0x0.png"
          backgroundOverlay="linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.6))"
          paddingY="lg"
          containerWidth="xl"
          id="testimonials"
        >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center w-full">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-base sm:text-lg font-bold text-[#ff6600] font-['Oswald'] leading-7 text-center bg-[#ff660019] rounded-2xl px-3 py-1.5 mb-4">
              DEPOIMENTOS
            </span>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-['Oswald'] leading-tight text-center capitalize">
              <span className="text-white">O que </span>
              <span className="text-[#ff6600]">nossos clientes dizem</span>
            </h2>
            
            {/* Orange Line */}
            <Line 
              className="w-[50px] h-0.5 bg-[#ff6600] mt-4"
              width="50px"
              height="2px"
              style={{ backgroundColor: '#ff6600' }}
            />
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[900px] mt-8">
            {testimonials?.map((testimonial) => (
              <div 
                key={testimonial?.id}
                className="flex flex-col gap-4 justify-start items-start w-full bg-[#070910a7] rounded-lg p-4 sm:p-5 shadow-[0px_10px_15px_#00000019] hover:shadow-[0px_15px_25px_#00000025] transition-shadow duration-300"
              >
                <img 
                  src="/images/img_frame_orange_a700_32x32.svg" 
                  alt="Quote" 
                  className="w-6 h-6"
                />
                
                <p className="text-sm font-normal text-[#d1d5db] font-['Archivo'] leading-5 text-left w-full">
                  {testimonial?.quote}
                </p>
                
                <div className="flex flex-col gap-4 justify-start items-center w-full">
                  <div className="flex gap-3 justify-start items-center w-full">
                    <img 
                      src={testimonial?.avatar} 
                      alt={testimonial?.name}
                      className="w-10 h-10 rounded-2xl object-cover"
                    />
                    <div className="flex flex-col justify-center items-start flex-1">
                      <span className="text-base sm:text-lg font-bold text-white font-['Oswald'] leading-6 text-left">
                        {testimonial?.name}
                      </span>
                      <span className="text-xs font-normal text-[#dddee1] font-['Archivo'] leading-4 text-left">
                        {testimonial?.role}
                      </span>
                    </div>
                  </div>
                  
                  <img 
                    src="/images/img_container.svg" 
                    alt="Rating" 
                    className="w-full h-3"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;