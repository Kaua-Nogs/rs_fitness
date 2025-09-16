import React from 'react';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import Section from '../../components/ui/Section';
import Line from '../../components/ui/Line';

const AboutSection = () => {
  return (
    <Section backgroundImage='' paddingY="lg" containerWidth="xl" id="about">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-between items-center max-w-[1100px] mx-auto">
        {/* Left Content */}
        <div className="flex flex-col gap-5 w-full lg:w-3/5 max-w-[580px]">
          {/* Badge */}
          <div className="bg-[#ff660019] py-2 px-4 self-start rounded-2xl flex items-center h-12">
            <h2 className="text-[#ff6600] text-xl font-bold font-['Oswald'] tracking-wide my-auto">
              SOBRE A RS FITNESS
            </h2>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <Typography variant="h3" className="text-left">
              <span className="text-[#ff6600]">Especialistas</span>
              <span className="text-white"> Em Equipamentos Fitness</span>
            </Typography>

            {/* Description */}
            <Typography variant="body1" className="text-left mt-3 text-base">
              Excelência na fabricação sob medida de equipamentos de musculação e fitness. Nossa
              equipe altamente qualificados trabalha para entregar soluções personalizadas que
              atendem às necessidades específicas de cada cliente.
            </Typography>
          </div>

          {/* Orange Line */}
          <Line
            width="50px"
            height="3px"
            style={{ backgroundColor: '#ff6600' }}
            className="mt-1 mb-4"
          />

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Feature 1 */}
            <Card icon="/images/img_equip.svg" title="Equipamento moderno" />
            {/* Feature 2 */}
            <Card icon="/images/img_exercise_6794095.svg" title="Apoio e reparos técnicos" />

            {/* Feature 3 */}
            <Card icon="/images/img_icon.svg" title="Suporte contínuo" />

            {/* Feature 4 */}
            <Card icon="/images/img_gym_14608138_1.svg" title="Gestão de investimento" />
          </div>
        </div>
        {/* Right Image */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img
            src="/images/img_pexels_ivan_samkov_4162444.png"
            alt="Homem treinando em aparelho de academia"
            className="rounded-lg w-full max-w-[400px] h-auto object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;

const Card = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-lg p-3 h-16">
      <div className="flex-shrink-0 w-10 h-10 bg-[#ff6600] rounded-full flex items-center justify-center">
        <img src={icon} alt={title} className="w-5 h-5" />
      </div>
      <h3 className="text-white text-sm font-bold my-auto">
        {title}
      </h3>
    </div>
  );
};
