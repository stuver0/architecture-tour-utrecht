document.addEventListener('DOMContentLoaded', function() {
    // Set jaar in footer copyright
    const currentYearElements = document.querySelectorAll('.current-year');
    currentYearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });
    
    // Initialiseer header scroll effect
    initHeaderScroll();
    
    // Voeg active class toe aan de huidige pagina's navigatielink
    highlightCurrentPage();
});

// Voeg een scroll effect toe aan de header
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Highlight de huidige pagina in de navigatie
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html') || 
            (currentPage === '/' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Mobile menu toggle (indien aanwezig)
const menuToggle = document.querySelector('.mobile-menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });
}

function loadFeaturedStyles() {
    const featuredContainer = document.querySelector('.featured-architecture');
    
    // Kies willekeurig 3 architectuurstijlen uit de data
    const featuredStyles = [];
    const tempData = [...architectureData];
    
    // Kies 3 willekeurige stijlen (of minder als er niet genoeg data is)
    for (let i = 0; i < 3 && tempData.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * tempData.length);
        featuredStyles.push(tempData[randomIndex]);
        tempData.splice(randomIndex, 1);
    }
    
    // Leeg de container
    featuredContainer.innerHTML = '';
    
    // Voeg de stijlen toe
    featuredStyles.forEach(style => {
        const card = document.createElement('div');
        card.className = 'architecture-card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${style.images[0]}" alt="${style.title}">
            </div>
            <div class="card-content">
                <h3>${style.title}</h3>
                <p class="period">${style.period} (${style.year})</p>
                <p>${style.shortDescription}</p>
                <a href="detail.html?id=${style.id}" class="more-info-btn">Meer informatie</a>
            </div>
        `;
        featuredContainer.appendChild(card);
    });
} 