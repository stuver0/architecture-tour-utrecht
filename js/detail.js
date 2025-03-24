document.addEventListener('DOMContentLoaded', () => {
    // Haal de style parameter uit de URL
    const urlParams = new URLSearchParams(window.location.search);
    const styleId = urlParams.get('style');
    
    if (styleId) {
        displayArchitectureDetail(styleId);
    } else {
        document.querySelector('.detail-content').innerHTML = '<p>Er is geen architectuurstijl geselecteerd.</p>';
    }
});

function displayArchitectureDetail(styleId) {
    // Zoek de architectuurstijl in de data
    const style = architectureData.find(item => item.id === styleId);
    
    if (!style) {
        document.querySelector('.detail-content').innerHTML = '<p>De geselecteerde architectuurstijl werd niet gevonden.</p>';
        return;
    }
    
    // Bouw de HTML voor de detailpagina
    const detailHTML = `
        <div class="detail-header">
            <h1>${style.title}</h1>
            <div class="period">${style.period}</div>
        </div>
        
        <div class="detail-images">
            ${style.images.map(image => `
                <div class="detail-image">
                    <img src="${image}" alt="${style.title}">
                </div>
            `).join('')}
        </div>
        
        <div class="detail-description">
            <p>${style.fullDescription || style.description}</p>
        </div>
        
        ${style.location ? `
            <div class="detail-location">
                <h3>Locatie</h3>
                <p>${style.location}</p>
            </div>
        ` : ''}
        
        ${style.examples ? `
            <div class="detail-examples">
                <h3>Voorbeelden in Utrecht</h3>
                <ul>
                    ${style.examples.map(example => `<li>${example}</li>`).join('')}
                </ul>
            </div>
        ` : ''}
    `;
    
    // Plaats de HTML in de container
    document.querySelector('.detail-content').innerHTML = detailHTML;
    
    // Update de title van de pagina
    document.title = `${style.title} - Architectuur Tour Utrecht`;
} 