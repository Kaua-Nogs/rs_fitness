import React from 'react';
import Line from '../../components/ui/Line';

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
    <section 
      className="w-full py-16 sm:py-20 md:py-24 lg:py-32"
      style={{
        backgroundImage: "url('/images/img_0x0.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col justify-center items-center w-full">
          
          {/* Header */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white font-['Oswald'] leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[72px] text-center capitalize">
            <span className="text-white">O que </span>
            <span className="text-[#ff6600]">nossos clientes dizem</span>
          </h2>
          
          {/* Orange Line */}
          <Line 
            className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[80px] h-1 bg-[#ff6600] mt-2"
            width="80px"
            height="4px"
            style={{ backgroundColor: '#ff6600', marginTop: '8px' }}
          />

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full max-w-[952px] mt-10 sm:mt-12">
            {testimonials?.map((testimonial) => (
              <div 
                key={testimonial?.id}
                className="flex flex-col gap-5 sm:gap-6 justify-start items-start w-full bg-[#070910a7] rounded-xl p-6 sm:p-7 md:p-8 lg:p-[52px_22px] shadow-[0px_10px_15px_#00000019] hover:shadow-[0px_15px_25px_#00000025] transition-shadow duration-300"
              >
                <img 
                  src="/images/img_frame_orange_a700_32x32.svg" 
                  alt="Quote" 
                  className="w-8 h-8"
                />
                
                <p className="text-sm sm:text-base lg:text-base font-normal text-[#d1d5db] font-['Archivo'] leading-5 sm:leading-6 lg:leading-[21px] text-left w-full">
                  {testimonial?.quote}
                </p>
                
                <div className="flex flex-col gap-6 justify-start items-center w-full">
                  <div className="flex gap-3 justify-start items-center w-full">
                    <img 
                      src={testimonial?.avatar} 
                      alt={testimonial?.name}
                      className="w-12 h-12 rounded-3xl object-cover"
                    />
                    <div className="flex flex-col justify-center items-start flex-1">
                      <span className="text-lg sm:text-xl lg:text-xl font-bold text-white font-['Oswald'] leading-7 sm:leading-8 lg:leading-[30px] text-left">
                        {testimonial?.name}
                      </span>
                      <span className="text-sm lg:text-sm font-normal text-[#dddee1] font-['Archivo'] leading-4 lg:leading-4 text-left">
                        {testimonial?.role}
                      </span>
                    </div>
                  </div>
                  
                  <img 
                    src="/images/img_container.svg" 
                    alt="Rating" 
                    className="w-full h-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;