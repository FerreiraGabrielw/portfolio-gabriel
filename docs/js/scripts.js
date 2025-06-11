// Espera o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', function () {

  // Inicializa o carrossel de CURSOS na página Home
  if (document.querySelector('.cursos-swiper')) {
    const cursosSwiper = new Swiper('.cursos-swiper', {
      // Opções do carrossel
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});

// --- FUNCIONALIDADE DE COPIAR EMAIL (PÁGINA DE CONTATO) ---
document.addEventListener('DOMContentLoaded', function() {
  const emailCard = document.getElementById('email-card');
  const emailTextElement = document.getElementById('email-text');
  
  if (emailCard && emailTextElement) {
    const originalText = emailTextElement.textContent;
    const emailToCopy = 'ferreira.gabrielw@gmail.com';

    emailCard.addEventListener('click', function() {
      // Usa a API do navegador para copiar o texto
      navigator.clipboard.writeText(emailToCopy).then(() => {
        // Sucesso! Muda o texto para dar feedback ao usuário.
        emailTextElement.textContent = 'Email copiado!';
        emailTextElement.classList.add('copied'); // Adiciona classe para o estilo
        
        // Volta ao texto original após 2 segundos
        setTimeout(() => {
          emailTextElement.textContent = originalText;
          emailTextElement.classList.remove('copied'); // Remove a classe
        }, 2000);
      }).catch(err => {
        console.error('Erro ao copiar o email: ', err);
        alert('Não foi possível copiar o email.');
      });
    });
  }
});