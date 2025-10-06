/**
 * Função para rolagem suave até elementos na página ou redirecionamento para WhatsApp
 * Pode ser usada por qualquer componente que precise navegar para seções específicas
 * 
 * @param {string} elementId - ID do elemento para onde deve rolar
 * @param {number} [offset=96] - Valor de offset em pixels para ajustar a posição final (considerando header fixo)
 */
export const scrollToSection = (elementId, offset = 96) => {
  // Se o ID for 'cta', redirecionar para o WhatsApp
  if (elementId === 'cta') {
    // Número do WhatsApp com código do país (substitua pelo número correto)
    const phoneNumber = '559892465342';
    
    // Mensagem pré-definida (opcional)
    const message = 'Olá! Gostaria de solicitar um orçamento para equipamentos fitness.';
    
    // Codificação da mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Criar o link do WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Redirecionar para o WhatsApp
    window.open(whatsappLink, '_blank');
    return;
  }
  
  // Para outros IDs, continuar com o comportamento de rolagem padrão
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};