import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProductsSection from './ProductsSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>A2 Fitness - Equipamentos Personalizados para Academias | Fabricação & Manutenção</title>
        <meta 
          name="description" 
          content="Especialistas em equipamentos fitness personalizados para academias. Fabricação sob medida, manutenção especializada e consultoria completa. Transforme sua academia com A2 Fitness - qualidade e excelência garantidas." 
        />
        <meta property="og:title" content="A2 Fitness - Equipamentos Personalizados para Academias | Fabricação & Manutenção" />
        <meta property="og:description" content="Especialistas em equipamentos fitness personalizados para academias. Fabricação sob medida, manutenção especializada e consultoria completa. Transforme sua academia com A2 Fitness - qualidade e excelência garantidas." />
      </Helmet>

      <div className="w-full bg-[#070910] min-h-screen">
        <Header />
        
        <main className="pt-28">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProductsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Home;