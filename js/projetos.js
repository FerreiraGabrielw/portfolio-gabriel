document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        // Projetos de Data Science
        { 
            id: 'ds-proj-1', 
            category: 'Data Science', 
            title: 'Clustering Project - Marketing', 
            tools: 'Python, PCA, KNN', 
            description: 'The objective of this project was to utilize unsupervised learning techniques (clustering) to identify distinct groups of couples based on their responses, enabling the creation of more effective and personalized marketing strategies.', 
            link: 'projetos/DataScience/1AnaliseMarketingCasalProspero/AnaliseMarketingCasalProspero.html',
            image: 'projetos/DataScience/1AnaliseMarketingCasalProspero/projetocluster.png'
        },
        {
            id: 'ds-proj-4',
            category: 'Data Science',
            title: 'Hybrid Recommender System for E-commerce (End-to-End)',
            tools: 'Python, SQL, Pandas, Scikit-learn, AWS S3, AWS Lambda, API Gateway',
            description: 'This project presents the end-to-end development of a hybrid recommender system for e-commerce, combining Item-Item Collaborative Filtering, Content-Based Filtering, and Association Rules. The solution covers the full lifecycle of a data science product, including relational database design in SQL, exploratory analysis, model development and recommendation API on AWS.',
            link: 'projetos/DataScience/4RecomendationSystem/RecomendationSystemEN.html',
            image: 'projetos/DataScience/4RecomendationSystem/RecomendationCapa.png'
        },
        { 
            id: 'ds-proj-2', 
            category: 'Data Science', 
            title: 'Customer Churn Analysis, Prediction and Deploy', 
            tools: 'Python, Machine Learning, Streamlit', 
            description: 'The objective of this project is to analyze and build a Machine Learning model based on customer churn data. Churn prediction identifies customers who are likely to cancel their contracts soon. ', 
            link: 'projetos/DataScience/2ChurnPrediction/ProjetoChurn.html',
            image: 'projetos/DataScience/2ChurnPrediction/churn.png'
        },
        { 
            id: 'ds-proj-3', 
            category: 'Data Science', 
            title: 'Hotel Matching: Data Integration and Enrichment via API', 
            tools: 'Python, Pandas, Levenshtein, Haversine, FastAPI', 
            description: 'The objective of this project is to develop a scalable matching algorithm for integrating two heterogeneous hotel datasets without shared keys, using textual similarities (Levenshtein) and geographic proximity (Haversine), followed by enrichment via a simulated RESTful API to add attributes like stars, scores, and amenities for hospitality applications.', 
            link: 'projetos/DataScience/3MatchingHoteis/MatchingHoteis.html',
            image: 'projetos/DataScience/3MatchingHoteis/matchinghoteis.png'
        },
        // Projetos de Data Engineering
        { 
            id: 'de-proj-1', 
            category: 'Data Engineering', 
            title: 'Fitness Analytics Platform +LLM (End-to-End)',
            tools: 'AWS (RDS,S3, Lambda, Bedrock), Python, PostgreSQL', 
            description: 'Production-grade end-to-end data engineering project transforming raw workout and nutrition data into a normalized PostgreSQL model on AWS. Implements ETL pipelines, Gold-layer weekly aggregations, and a deterministic JSON contract for LLM consumption.Executed in Amazon RDS, S3, and Bedrock (Claude).', 
            link: 'projetos/DataEngineering/1FitnessLLM/FitnessDataLLM.html',
            image: 'projetos/DataEngineering/1FitnessLLM/capa.png'
        },
        // Projetos de Data Analytics
        { 
            id: 'da-proj-1', 
            category: 'Data Analytics', 
            title: 'Customer Analysis for Shopping Center',
            tools: 'Python', 
            description: 'This project was conducted using a real dataset from a shopping center, with the main objective of studying the characteristics and purchasing patterns of its customers', 
            link: 'projetos/DataAnalytics/1CustumerShoppingCenter/1AnaliseDadosShoppingCenter.html',
            image: 'projetos/DataAnalytics/1CustumerShoppingCenter/capa.png'
        },
        // Projetos de Dashboards
        { 
            id: 'dash-proj-11', 
            category: 'Dashboards', 
            title: 'Mentee Profile', 
            tools: 'Power BI, DAX, M', 
            description: ' Project that enabled the company working with mentoring programs to better understand its target audience, personalize training offers, optimize resource allocation, and identify talents with high potential for development and career migration.', 
            link: 'projetos/Dashboards/11ProjetoPerfilMentorado/Projeto11DA.html',
            image: 'projetos/Dashboards/11ProjetoPerfilMentorado/capa.png'
        },
            { 
            id: 'dash-proj-5', 
            category: 'Dashboards', 
            title: 'Piracanjuba Project', 
            tools: 'Power BI, DAX, M',   
            description: 'This is a real project, consisting of the creation of a dashboard developed for Piracanjuba, with the main objective of evaluating the engagement and development of employees participating in a course.', 
            link: 'projetos/Dashboards/5ProjetoPiracanjuba/Projeto5DA.html',
            image: 'projetos/Dashboards/5ProjetoPiracanjuba/capa.png'
        },
        { 
            id: 'dash-proj-6', 
            category: 'Dashboards', 
            title: 'Amazon Sales', 
            tools: 'Power BI, DAX, M',  
            description: 'This project presents a sales and profitability analysis Dashboard, developed to simulate Amazon\'s e-commerce and retail environment.', 
            link: 'projetos/Dashboards/6DadosAmazonSales/Projeto6DA.html',
            image: 'projetos/Dashboards/6DadosAmazonSales/capa.png'
        },
        { 
            id: 'dash-proj-4', 
            category: 'Dashboards', 
            title: 'Tech Trend', 
            tools: 'Power BI, DAX, M',   
            description: 'This project presents a Marketing Analytics Dashboard, built to provide a comprehensive view of digital campaign performance and user behavior', 
            link: 'projetos/Dashboards/4CaseTechTrends/Projeto4DA.html',
            image: 'projetos/Dashboards/4CaseTechTrends/capa.png'
        },
        { 
            id: 'dash-proj-1', 
            category: 'Dashboards', 
            title: 'HR and Contract Performance', 
            tools: 'Power BI, DAX, M',  
            description: 'This project was developed with the purpose of providing an overview of the workforce composition of a fictional organization and the performance of its contracts.', 
            link: 'projetos/Dashboards/1DashboardFuncionarios/Projeto1DA.html',
            image: 'projetos/Dashboards/1DashboardFuncionarios/capa.png'
        },
        { 
            id: 'dash-proj-2', 
            category: 'Dashboards', 
            title: 'Auto Solutions', 
            tools: 'Power BI, DAX, M',  
            description: 'This project consists of creating a Dashboard developed in Power BI, aiming to offer a comprehensive and detailed overview of operational performance.', 
            link: 'projetos/Dashboards/2DashboardAutoSolutions/Projeto2DA.html',
            image: 'projetos/Dashboards/2DashboardAutoSolutions/capa.png'
        },
        { 
            id: 'dash-proj-3', 
            category: 'Dashboards', 
            title: 'Bite Speed', 
            tools: 'Power BI, DAX, M',   
            description: 'This project presents a Dashboard developed for the fictional company BiteSpeed, with the primary objective of providing a consolidated and actionable view of operations.', 
            link: 'projetos/Dashboards/3DashboardBiteSpeed/Projeto3DA.html',
            image: 'projetos/Dashboards/3DashboardBiteSpeed/capa.png'
        },
        { 
            id: 'dash-proj-7', 
            category: 'Dashboards', 
            title: 'Brazilian Championship', 
            tools: 'Power BI, DAX, M',  
            description: 'This project presents an analytical Dashboard focused on the statistics of the Brazilian Soccer Championship.', 
            link: 'projetos/Dashboards/7DadosCampeonatoBrasileiro/Projeto7DA.html',
            image: 'projetos/Dashboards/7DadosCampeonatoBrasileiro/capa.png'
        },
        { 
            id: 'dash-proj-8', 
            category: 'Dashboards', 
            title: 'Spotify', 
            tools: 'Power BI, DAX, M, Python, HTML',  
            description: 'This project presents an analytical Spotify Dashboard, focused on exploring music trends, audience engagement, and the characteristics of the most popular songs.', 
            link: 'projetos/Dashboards/8DashboardSpotify/Projeto8DA.html',
            image: 'projetos/Dashboards/8DashboardSpotify/capa.png'
        },
        { 
            id: 'dash-proj-9', 
            category: 'Dashboards', 
            title: 'Netflix', 
            tools: 'Tableau', 
            description: 'This project presents an analytical Dashboard focused on Netflix vast content library.', 
            link: 'projetos/Dashboards/9TableauDashboard/Projeto9DA.html',
            image: 'projetos/Dashboards/9TableauDashboard/capa.png'
        },
        { 
            id: 'dash-proj-10', 
            category: 'Dashboards', 
            title: 'Orders', 
            tools: 'Loocker Studio', 
            description: 'This project presents an Order Analysis Dashboard, developed in Looker Studio.', 
            link: 'projetos/Dashboards/10DashboardLoockerStudio/Projeto10DA.html',
            image: 'projetos/Dashboards/10DashboardLoockerStudio/capa.png'
        },
    ];

    // Adiciona o seletor para o novo container
    const dsContainer = document.querySelector('#ds-swiper .swiper-wrapper');
    const deContainer = document.querySelector('#de-swiper .swiper-wrapper');
    const daContainer = document.querySelector('#da-swiper .swiper-wrapper');
    const dashContainer = document.querySelector('#dash-swiper .swiper-wrapper');
    
    // O restante da seleção de elementos do modal
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

    // Atualiza o loop
    projects.forEach(p => {
        const cardHtml = createProjectCard(p);
        
        if (p.category === 'Data Science' && dsContainer) {
            dsContainer.insertAdjacentHTML('beforeend', cardHtml);
        } 
        else if (p.category === 'Data Engineering' && deContainer) {
            deContainer.insertAdjacentHTML('beforeend', cardHtml);
        } 
        else if (p.category === 'Data Analytics' && daContainer) {
            daContainer.insertAdjacentHTML('beforeend', cardHtml);
        } 
        else if (p.category === 'Dashboards' && dashContainer) {
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
    const deSwiper = new Swiper('#de-swiper', { ...baseSwiperOptions, navigation: { nextEl: '#de-swiper .swiper-button-next', prevEl: '#de-swiper .swiper-button-prev', }, pagination: { el: '#de-swiper .swiper-pagination', clickable: true, }, });
    const daSwiper = new Swiper('#da-swiper', { ...baseSwiperOptions, navigation: { nextEl: '#da-swiper .swiper-button-next', prevEl: '#da-swiper .swiper-button-prev', }, pagination: { el: '#da-swiper .swiper-pagination', clickable: true, }, });
    const dashSwiper = new Swiper('#dash-swiper', {...baseSwiperOptions, navigation: { nextEl: '#dash-swiper .swiper-button-next', prevEl: '#dash-swiper .swiper-button-prev', }, pagination: { el: '#dash-swiper .swiper-pagination', clickable: true, }, }); });