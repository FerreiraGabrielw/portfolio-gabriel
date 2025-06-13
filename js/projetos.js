document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        // Projetos de Data Science
        { 
            id: 'ds-proj-1', 
            category: 'Data Science', 
            title: 'Classificação de Clientes em Marketing', 
            tools: 'Python, PCA, KNN', 
            description: 'O objetivo desse projeto foi utilizar técnicas de aprendizado não supervisionado (clusterização) para identificar grupos distintos de casais com base em suas respostas, permitindo a criação de estratégias de marketing mais eficazes e personalizadas.', 
            link: 'projetos/DataScience/1AnaliseMarketingCasalProspero/AnaliseMarketingCasalProspero.html',
            image: 'projetos/DataScience/1AnaliseMarketingCasalProspero/projetocluster.png'
        },
        // Projetos de Data Analytics
        { 
            id: 'da-proj-1', 
            category: 'Data Analytics', 
            title: 'Análise de Clientes para Shopping Center', 
            tools: 'Python', 
            description: 'Este projeto foi realizado a partir de um conjunto de dados real, proveniente de um shopping center, com o objetivo principal de estudar as características e os padrões de compra de seus clientes', 
            link: 'projetos/DataAnalytics/1CustumerShoppingCenter/1AnaliseDadosShoppingCenter.html',
            image: 'projetos/DataAnalytics/1CustumerShoppingCenter/capa.png'
        },
        // Projetos de Dashboards
        { 
            id: 'dash-proj-11', 
            category: 'Dashboards', 
            title: 'Perfil do Mentorado', 
            tools: 'Power BI, DAX, M', 
            description: ' Projeto que capicitou a empresa que trabalha com programas de mentoria a compreender melhor seu público-alvo, personalizar as ofertas de capacitação, otimizar a alocação de recursos e identificar talentos com alto potencial para desenvolvimento e migração de área.', 
            link: 'projetos/Dashboards/11ProjetoPerfilMentorado/Projeto11DA.html',
            image: 'projetos/Dashboards/11ProjetoPerfilMentorado/capa.png'
        },
            { 
            id: 'dash-proj-5', 
            category: 'Dashboards', 
            title: 'Projeto Piracanjuba', 
            tools: 'Power BI, DAX, M',   
            description: 'Este é um projeto real, e consiste na criação de um dashboard desenvolvido para a Piracanjuba, com o objetivo principal de avaliar o engajamento e o desenvolvimento dos colaboradores que estão participando de um curso', 
            link: 'projetos/Dashboards/5ProjetoPiracanjuba/Projeto5DA.html',
            image: 'projetos/Dashboards/5ProjetoPiracanjuba/capa.png'
        },
        { 
            id: 'dash-proj-6', 
            category: 'Dashboards', 
            title: 'Amazon Sales', 
            tools: 'Power BI, DAX, M',  
            description: 'Este projeto apresenta um Dashboard de análise de vendas e lucratividade, desenvolvido para simular o ambiente de e-commerce e varejo da Amazon', 
            link: 'projetos/Dashboards/6DadosAmazonSales/Projeto6DA.html',
            image: 'projetos/Dashboards/6DadosAmazonSales/capa.png'
        },
        { 
            id: 'dash-proj-4', 
            category: 'Dashboards', 
            title: 'Tech Trend', 
            tools: 'Power BI, DAX, M',   
            description: 'Este projeto apresenta um Dashboard de Marketing Analytics, construído para fornecer uma visão abrangente do desempenho das campanhas digitais e do comportamento do usuário', 
            link: 'projetos/Dashboards/4CaseTechTrends/Projeto4DA.html',
            image: 'projetos/Dashboards/4CaseTechTrends/capa.png'
        },
        { 
            id: 'dash-proj-1', 
            category: 'Dashboards', 
            title: 'RH e Performance de Contratos', 
            tools: 'Power BI, DAX, M',  
            description: 'Este projeto foi desenvolvido com o propósito de proporcionar uma visão sobre a composição da força de trabalho de uma organização fictícia e a performance de seus contratos.', 
            link: 'projetos/Dashboards/1DashboardFuncionarios/Projeto1DA.html',
            image: 'projetos/Dashboards/1DashboardFuncionarios/capa.png'
        },
        { 
            id: 'dash-proj-2', 
            category: 'Dashboards', 
            title: 'Auto Solutions', 
            tools: 'Power BI, DAX, M',  
            description: 'Este projeto consiste na criação de um Dashboard desenvolvido no Power BI, com o objetivo de oferecer uma visão abrangente e detalhada sobre a performance das operações', 
            link: 'projetos/Dashboards/2DashboardAutoSolutions/Projeto2DA.html',
            image: 'projetos/Dashboards/2DashboardAutoSolutions/capa.png'
        },
        { 
            id: 'dash-proj-3', 
            category: 'Dashboards', 
            title: 'Bite Speed', 
            tools: 'Power BI, DAX, M',   
            description: 'Este projeto apresenta um Dashboard desenvolvido para a empresa fictícia BiteSpeed, com o objetivo primordial de fornecer uma visão consolidada e acionável sobre as operações.', 
            link: 'projetos/Dashboards/3DashboardBiteSpeed/Projeto3DA.html',
            image: 'projetos/Dashboards/3DashboardBiteSpeed/capa.png'
        },
        { 
            id: 'dash-proj-7', 
            category: 'Dashboards', 
            title: 'Campeonato Brasileiro', 
            tools: 'Power BI, DAX, M',  
            description: 'Este projeto apresenta um Dashboard analítico com foco nas estatísticas do Campeonato Brasileiro de Futebol.', 
            link: 'projetos/Dashboards/7DadosCampeonatoBrasileiro/Projeto7DA.html',
            image: 'projetos/Dashboards/7DadosCampeonatoBrasileiro/capa.png'
        },
        { 
            id: 'dash-proj-8', 
            category: 'Dashboards', 
            title: 'Spotify', 
            tools: 'Power BI, DAX, M, Python, HTML',  
            description: 'Este projeto apresenta um Dashboard analítico do Spotify, focado em explorar as tendências musicais, o engajamento da audiência e as características das músicas mais populares.', 
            link: 'projetos/Dashboards/8DashboardSpotify/Projeto8DA.html',
            image: 'projetos/Dashboards/8DashboardSpotify/capa.png'
        },
        { 
            id: 'dash-proj-9', 
            category: 'Dashboards', 
            title: 'Netflix', 
            tools: 'Tableau', 
            description: 'Este projeto apresenta um Dashboard analítico com foco na vasta biblioteca de conteúdo da Netflix.', 
            link: 'projetos/Dashboards/9TableauDashboard/Projeto9DA.html',
            image: 'projetos/Dashboards/9TableauDashboard/capa.png'
        },
        { 
            id: 'dash-proj-10', 
            category: 'Dashboards', 
            title: 'Pedidos', 
            tools: 'Loocker Studio', 
            description: 'Este projeto apresenta um Dashboard de análise de pedidos, desenvolvido no Looker Studio.', 
            link: 'projetos/Dashboards/10DashboardLoockerStudio/Projeto10DA.html',
            image: 'projetos/Dashboards/10DashboardLoockerStudio/capa.png'
        },
    ];

    // Adiciona o seletor para o novo container
    const dsContainer = document.querySelector('#ds-swiper .swiper-wrapper');
    const daContainer = document.querySelector('#da-swiper .swiper-wrapper');
    const dashContainer = document.querySelector('#dash-swiper .swiper-wrapper');
    
    // O restante da seleção de elementos do modal continua igual
    const modal = document.getElementById('projectModal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalLink = document.getElementById('modal-link');
    const closeModal = document.querySelector('.close-button');

    function createProjectCard(project) {
        return `
            <div class="swiper-slide">
                <div class="project-card-text" data-id="${project.id}">
                    <h5>${project.title}</h5>
                    <p class="project-tools">${project.tools}</p>
                </div>
            </div>
        `;
    }

    // Atualiza o loop para incluir a nova categoria
    projects.forEach(p => {
        const cardHtml = createProjectCard(p);
        if (p.category === 'Data Science' && dsContainer) {
            dsContainer.insertAdjacentHTML('beforeend', cardHtml);
        } else if (p.category === 'Data Analytics' && daContainer) {
            daContainer.insertAdjacentHTML('beforeend', cardHtml);
        } else if (p.category === 'Dashboards' && dashContainer) {
            dashContainer.insertAdjacentHTML('beforeend', cardHtml);
        }
    });

    function openModal(projectId) {
        const project = projects.find(p => p.id === projectId);
        if (project) {
            modalTitle.innerHTML = `<strong>${project.title}</strong>`;
            modalDesc.textContent = project.description;
            modalLink.href = project.link;
            if (project.image && modalImg) {
                modalImg.src = project.image;
                modalImg.style.display = 'block';
            } else if (modalImg) {
                modalImg.style.display = 'none';
            }
            modal.style.display = 'block';
        }
    }
    document.querySelectorAll('.project-card-text').forEach(card => {
        card.addEventListener('click', function () {
            const projectId = this.getAttribute('data-id');
            openModal(projectId);
        });
    });
    if(closeModal) closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (event) => {
        if (event.target === modal) modal.style.display = 'none';
    });
    
    // Inicialização dos carrosséis
    const baseSwiperOptions = {
        slidesPerView: 1, spaceBetween: 20, loop: false,
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 }
        }
    };
    
    const dsSwiper = new Swiper('#ds-swiper', { ...baseSwiperOptions, navigation: { nextEl: '#ds-swiper .swiper-button-next', prevEl: '#ds-swiper .swiper-button-prev', }, pagination: { el: '#ds-swiper .swiper-pagination', clickable: true, }, });
    const daSwiper = new Swiper('#da-swiper', { ...baseSwiperOptions, navigation: { nextEl: '#da-swiper .swiper-button-next', prevEl: '#da-swiper .swiper-button-prev', }, pagination: { el: '#da-swiper .swiper-pagination', clickable: true, }, });
    
    const dashSwiper = new Swiper('#dash-swiper', {
        ...baseSwiperOptions,
        navigation: {
          nextEl: '#dash-swiper .swiper-button-next',
          prevEl: '#dash-swiper .swiper-button-prev',
        },
        pagination: {
          el: '#dash-swiper .swiper-pagination',
          clickable: true,
        },
    });
});