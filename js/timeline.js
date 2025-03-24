document.addEventListener('DOMContentLoaded', () => {
    initTimeline();
});

function initTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) return;
    
    // Sorteer architectuurdata op jaar
    const sortedData = [...architectureData].sort((a, b) => {
        const yearA = parseInt(a.period.split('-')[0]);
        const yearB = parseInt(b.period.split('-')[0]);
        return yearA - yearB;
    });
    
    // Maak de tijdlijn lijn
    const timelineLineElement = document.createElement('div');
    timelineLineElement.className = 'timeline-line';
    timelineContainer.appendChild(timelineLineElement);
    
    // Voeg elke architectuurstijl toe aan de tijdlijn
    sortedData.forEach((item, index) => {
        const timelineItem = createTimelineItem(item, index);
        timelineContainer.appendChild(timelineItem);
    });
}

function createTimelineItem(item, index) {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    const itemContent = document.createElement('div');
    itemContent.className = 'timeline-item-content';
    
    // Maak de inhoud van het tijdlijn item
    itemContent.innerHTML = `
        <div class="timeline-date">${item.period}</div>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <div class="timeline-image">
            <img src="${item.images[0]}" alt="${item.title}">
        </div>
        <a href="detail.html?style=${item.id}" class="more-info">Meer informatie</a>
    `;
    
    timelineItem.appendChild(itemContent);
    return timelineItem;
} 