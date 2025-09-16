import React from 'react';
import Line from '../../components/ui/Line';
import Typography from '@/components/ui/Typography';

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
    <section id="products" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative">
      {/* Background Circle */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#fafafa1e] rounded-full opacity-20"></div>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-6 sm:gap-8 justify-start items-center w-full">
          
          {/* Header Section */}
          <div className="flex flex-col justify-start items-center w-full px-4">
            <span className="text-base sm:text-lg font-bold text-[#ff6600] font-['Oswald'] leading-7 text-left bg-[#ff660019] rounded-2xl px-3 py-1.5 mb-5">
              PRODUTOS EM DESTAQUE
            </span>
            
            <Typography variant="h3" align="center" gutterBottom>
              <span className="text-white">Equipamentos para </span>
              <span className="text-[#ff6600]">transformar sua academia</span>
            </Typography>
              
            
            <p className="text-base font-normal text-[#dddee1] font-['Archivo'] leading-6 text-center w-full mt-2 max-w-lg">
              Conheça alguns dos nossos equipamentos mais populares, fabricados com materiais de alta qualidade e tecnologia avançada.
            </p>
            
            {/* Orange Line */}
            <Line 
              width="50px"
              height="2px"
              style={{ backgroundColor: '#ff6600' }}
              className="w-[50px] h-0.5 bg-[#ff6600] mt-4"
            />
          </div>

          {/* Products Grid */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 w-full max-w-[1100px]">
            {products?.map((product, index) => (
              <div 
                key={product?.id}
                className="flex flex-col gap-3 justify-start items-center w-full lg:w-1/3"
              >
                <img 
                  src={product?.image} 
                  alt={product?.title}
                  className="w-full h-[250px] sm:h-[300px] md:h-[320px] lg:h-[350px] object-cover rounded-lg"
                />
                
                <div className="flex flex-col gap-3 justify-start items-center w-full">
                  <div className="flex flex-col justify-start items-center w-full">
                    <div className="flex justify-start items-center w-full">
                      <span className="text-base sm:text-lg font-bold text-[#ff6600] font-['Oswald'] leading-6 text-left">
                        {product?.category}
                      </span>
                      <div className="w-1 h-1 bg-[#fafafa] rounded-full mx-3"></div>
                      <span className="text-base sm:text-lg font-bold text-[#ff6600] font-['Oswald'] leading-6 text-left">
                        {product?.subcategory}
                      </span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-['Oswald'] leading-7 text-left capitalize w-full mt-1">
                      {product?.title}
                    </h3>
                  </div>
                  
                  {/* Separator Line */}
                  <Line 
                    width="100%"
                    height="1px"
                    style={{ backgroundColor: '#7c7c7c' }}
                    className="w-full h-px bg-[#7c7c7c]"
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