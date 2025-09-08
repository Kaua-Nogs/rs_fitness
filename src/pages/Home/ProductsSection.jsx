import React from 'react';
import Line from '../../components/ui/Line';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      image: "/images/img_pexels_annushka_ahuja_7991652.png",
      category: "GLÚTEOS",
      subcategory: "MUSCULAÇÃO",
      title: "Máquina de Glúteo 4 apoios"
    },
    {
      id: 2,
      image: "/images/img_pexels_ivan_samkov_4162444.png",
      category: "COSTAS",
      subcategory: "MUSCULAÇÃO",
      title: "Remada Articulada"
    },
    {
      id: 3,
      image: "/images/img_pexels_cottonbr.png",
      category: "GLÚTEOS",
      subcategory: "MUSCULAÇÃO",
      title: "Agachamento Squad"
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 relative">
      {/* Background Circle */}
      <div className="absolute top-0 left-0 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[766px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[766px] bg-[#fafafa1e] rounded-full opacity-20"></div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-10 justify-start items-center w-full">
          
          {/* Header Section */}
          <div className="flex flex-col justify-start items-center w-full max-w-3xl px-8 sm:px-12 md:px-16 lg:px-[148px]">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-[#ff6600] font-['Oswald'] leading-9 text-left bg-[#ff660019] rounded-3xl px-4 py-1.5">
              PRODUTOS EM DESTAQUE
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white font-['Oswald'] leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[72px] text-left capitalize mt-5 sm:mt-6">
              <span className="text-white">Equipamentos para </span>
              <span className="text-[#ff6600]">transformar sua academia</span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-xl lg:text-xl font-normal text-[#dddee1] font-['Archivo'] leading-7 sm:leading-8 md:leading-9 lg:leading-[30px] text-center w-full mt-2">
              Conheça alguns dos nossos equipamentos mais populares, fabricados com materiais de alta qualidade e tecnologia avançada.
            </p>
            
            {/* Orange Line */}
            <Line 
              width="60px sm:w-[70px] md:w-[80px] lg:w-[80px]"
              height="4px"
              style={{ backgroundColor: '#ff6600', marginTop: '20px' }}
              className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[80px] h-1 bg-[#ff6600] mt-5 sm:mt-6"
            />
          </div>

          {/* Products Grid */}
          <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1200px]">
            {products?.map((product, index) => (
              <div 
                key={product?.id}
                className={`flex flex-col ${index === 1 ? 'gap-5' : 'gap-4'} justify-start items-center w-full lg:w-1/3`}
              >
                <img 
                  src={product?.image} 
                  alt={product?.title}
                  className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[512px] object-cover rounded-lg"
                />
                
                <div className={`flex flex-col ${index === 1 ? 'gap-5 sm:gap-6' : 'gap-5 sm:gap-6'} justify-start items-center w-full`}>
                  <div className="flex flex-col justify-start items-center w-full">
                    <div className="flex justify-start items-center w-full">
                      <span className="text-xl sm:text-2xl lg:text-2xl font-bold text-[#ff6600] font-['Oswald'] leading-8 sm:leading-9 lg:leading-[36px] text-left">
                        {product?.category}
                      </span>
                      <div className="w-1.5 h-1.5 bg-[#fafafa] rounded-full mx-4"></div>
                      <span className="text-xl sm:text-2xl lg:text-2xl font-bold text-[#ff6600] font-['Oswald'] leading-8 sm:leading-9 lg:leading-[36px] text-left">
                        {product?.subcategory}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white font-['Oswald'] leading-8 sm:leading-9 lg:leading-[41px] text-left capitalize w-full mt-2">
                      {product?.title}
                    </h3>
                  </div>
                  
                  {/* Separator Line */}
                  <Line 
                    width="100%"
                    height="2px"
                    style={{ backgroundColor: '#7c7c7c' }}
                    className="w-full h-0.5 bg-[#7c7c7c]"
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

export default ProductsSection;