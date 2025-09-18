/**
 * Função para rolagem suave até elementos na página
 * Pode ser usada por qualquer componente que precise navegar para seções específicas
 * 
 * @param {string} elementId - ID do elemento para onde deve rolar
 * @param {number} [offset=96] - Valor de offset em pixels para ajustar a posição final (considerando header fixo)
 */
export const scrollToSection = (elementId, offset = 96) => {
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