// Tour locaties met geografische coördinaten
const tourLocations = [
    {
        id: "romaans",
        name: "Pieterskerk",
        lat: 52.0915,
        lng: 5.12425,
        zoom: 17,
        description: "De Pieterskerk is een van de best bewaarde voorbeelden van Romaanse architectuur in Nederland."
    },
    {
        id: "gotisch",
        name: "Domkerk",
        lat: 52.09089,
        lng: 5.12292,
        zoom: 17,
        description: "De Domkerk is het belangrijkste voorbeeld van Gotische architectuur in Utrecht."
    },
    {
        id: "renaissance",
        name: "Centraal Museum",
        lat: 52.08381,
        lng: 5.12578,
        zoom: 17,
        description: "Het Centraal Museum is gevestigd in een gebouw met Nederlandse Renaissance invloeden."
    },
    {
        id: "grachtenpanden",
        name: "Janskerkhof 13",
        lat: 52.09375,
        lng: 5.12314,
        zoom: 17,
        description: "Janskerkhof 13 is een prachtig voorbeeld van Hollands Classicisme, gebouwd in 1648. Het pand heeft een bewogen geschiedenis en was onder andere in gebruik als kantongerecht."
    },
    {
        id: "jugendstil",
        name: "Voorstraat 2",
        lat: 52.09375,
        lng: 5.11875,
        zoom: 17,
        description: "De voormalige apotheek aan de Voorstraat 2 is een prachtig voorbeeld van Jugendstil architectuur in Utrecht.",
        images: [
            "images/jugendstil-pand.jpg"
        ],
        isSpecial: true // Markeren als speciale locatie
    },
    {
        id: "amsterdamse-school",
        name: "De Inktpot",
        lat: 52.08756,
        lng: 5.11569,
        zoom: 17,
        description: "De Inktpot (nu ProRail) is een van de grootste bakstenen gebouwen van Nederland en een prachtig voorbeeld van de expressieve Amsterdamse School architectuur."
    },
    {
        id: "modernisme",
        name: "Rietveld Schröderhuis",
        lat: 52.08519,
        lng: 5.14753,
        zoom: 17,
        description: "Het Rietveld Schröderhuis is een UNESCO Werelderfgoed en een icoon van het Modernisme."
    },
    {
        id: "wederopbouw",
        name: "Hoog Catharijne",
        lat: 52.0897,
        lng: 5.1107,
        zoom: 17,
        description: "Hoog Catharijne is een voorbeeld van wederopbouwarchitectuur, hoewel het oorspronkelijke gebouw inmiddels is gerenoveerd."
    },
    {
        id: "hedendaags",
        name: "TivoliVredenburg",
        lat: 52.092417,
        lng: 5.11253,
        zoom: 17,
        description: "TivoliVredenburg is een indrukwekkend modern muziekpaleis met vijf verschillende concertzalen, ontworpen door het architectenbureau 3XN."
    },
    {
        id: "springhaver",
        name: "Springhaver",
        lat: 52.08814,
        lng: 5.11908,
        zoom: 17,
        description: "Springhaver is een historisch pand dat oorspronkelijk als bioscoop diende. Nu is het een gezellig café waar je de tour kunt afsluiten met een quiz en een Josje!",
        images: [
            "images/springhaver.jpg",
            "images/springhaver-interieur.jpg"
        ],
        isSpecial: true // Markeren als speciale locatie
    }
];

// Tour status variables
let map;
let currentLocationIndex = -1; // -1 betekent dat de tour nog niet is gestart
let directionsService;
let directionsRenderer;
let currentUserLocation = { lat: 52.0907, lng: 5.1214 }; // Default centrum Utrecht
let infoWindow;
let userMarker;
let destinationMarker;
let currentLocationMarker;
let confettiActive = false; // Om bij te houden of confetti al actief is

// Verwijder DOMContentLoaded event listener, want deze kan conflicteren met de callback van Google Maps

// Controleer of we van homepage komen of de pagina herladen
function checkTourStatus() {
    const storedIndex = localStorage.getItem('currentLocationIndex');
    
    // Als we van de homepage komen (URL bevat reset=true), reset dan de tour
    if (window.location.href.includes('reset=true')) {
        localStorage.removeItem('currentLocationIndex');
        currentLocationIndex = -1;
        return;
    }
    
    // Als er een opgeslagen index is, gebruik die dan
    if (storedIndex !== null) {
        currentLocationIndex = parseInt(storedIndex);
        
        // Update UI om te tonen dat tour al bezig is
        document.getElementById("start-button").style.display = "none";
        document.getElementById("next-button").disabled = false;
        
        // Update navigatieknoppen
        updateNavigationButtons();
        
        // Toon huidige locatie
        showLocation(currentLocationIndex);
    }
}

// Initialiseer de Google Maps en tour functionaliteit
function initMap() {
    // Event listeners voor navigatieknoppen (nu hier in plaats van in DOMContentLoaded)
    document.getElementById('start-button').addEventListener('click', function() {
        startTour();
    });
    
    document.getElementById('next-button').addEventListener('click', function() {
        nextLocation();
    });
    
    document.getElementById('prev-button').addEventListener('click', function() {
        prevLocation();
    });
    
    // Toon het totale aantal locaties
    document.getElementById('total-locations').textContent = tourLocations.length;
    
    // Centrum van Utrecht
    const utrechtCenter = { lat: 52.0907, lng: 5.1214 };
    
    // Maak de kaart aan
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: utrechtCenter,
        mapTypeControl: true,
        fullscreenControl: true,
        streetViewControl: true,
        zoomControl: true
    });
    
    // Maak services aan voor routebeschrijvingen
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true,
        polylineOptions: {
            strokeColor: "#0042ae",
            strokeWeight: 5
        }
    });
    
    // InfoWindow voor navigatie-instructies
    infoWindow = new google.maps.InfoWindow();
    
    // Gebruikerslocatie - voor demo laten we een vaste locatie zien
    // In een echte app zou je navigator.geolocation.getCurrentPosition gebruiken
    setUserLocation(utrechtCenter);
    
    // Probeer echte gebruikerslocatie te krijgen als geolocation beschikbaar is
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                setUserLocation(pos);
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
            }
        );
    } else {
        // Browser ondersteunt geen geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
    
    // Start de tour, of herstel de vorige tour-status
    checkTourStatus();
}

// Functie om gebruikerslocatie in te stellen
function setUserLocation(position) {
    currentUserLocation = position;
    
    // Maak of update de gebruikersmarker
    if (userMarker) {
        userMarker.setPosition(position);
    } else {
        userMarker = new google.maps.Marker({
            position: position,
            map: map,
            title: "Je locatie",
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "#4285F4",
                fillOpacity: 1,
                strokeColor: "#FFFFFF",
                strokeWeight: 2,
            }
        });
    }
    
    // Als we al een locatie bekijken, update dan de route
    if (currentLocationIndex >= 0) {
        showLocation(currentLocationIndex);
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    const errorMsg = browserHasGeolocation
        ? "Fout: De Geolocation service is mislukt."
        : "Fout: Je browser ondersteunt geen geolocation.";
    infoWindow.setContent(errorMsg);
    infoWindow.open(map);
}

function startTour() {
    // Verberg de startknop
    document.getElementById("start-button").style.display = "none";
    
    // Start bij de eerste locatie
    currentLocationIndex = 0;
    
    // Sla de huidige index op in localStorage
    localStorage.setItem('currentLocationIndex', currentLocationIndex);
    
    // Toon de eerste locatie
    showLocation(currentLocationIndex);
    
    // Update navigatieknoppen
    updateNavigationButtons();
}

function nextLocation() {
    if (currentLocationIndex < tourLocations.length - 1) {
        currentLocationIndex++;
        
        // Sla de huidige index op in localStorage
        localStorage.setItem('currentLocationIndex', currentLocationIndex);
        
        showLocation(currentLocationIndex);
    }
    
    // Update navigatieknoppen
    updateNavigationButtons();
}

function prevLocation() {
    if (currentLocationIndex > 0) {
        currentLocationIndex--;
        
        // Sla de huidige index op in localStorage
        localStorage.setItem('currentLocationIndex', currentLocationIndex);
        
        showLocation(currentLocationIndex);
    }
    
    // Update navigatieknoppen
    updateNavigationButtons();
}

function updateNavigationButtons() {
    // Vooruit knop
    const nextButton = document.getElementById("next-button");
    nextButton.disabled = (currentLocationIndex >= tourLocations.length - 1);
    
    // Terug knop
    const prevButton = document.getElementById("prev-button");
    prevButton.disabled = (currentLocationIndex <= 0);
}

function showLocation(index) {
    // Voeg scrollable class toe voor normale locaties
    const locationContainer = document.getElementById('location-info');
    locationContainer.classList.add('scrollable');
    
    // Scroll de pagina naar boven
    window.scrollTo(0, 0);
    
    // Update de progressbar
    updateProgress();
    
    // Controleer of de locatie index geldig is
    if (index < 0 || index >= tourLocations.length) {
        console.error('Ongeldige locatie index: ' + index);
        return;
    }
    
    // Update de huidige locatie index
    currentLocationIndex = index;
    
    // Sla de huidige locatie op in localStorage
    localStorage.setItem('currentLocationIndex', index);
    
    // Update de knoppen gebaseerd op de huidige locatie
    updateNavigationButtons();
    
    // Update de locatie voortgang text
    document.getElementById('current-location').textContent = 'Locatie ' + (index + 1);
    document.getElementById('total-locations').textContent = tourLocations.length;
    
    // Haal de huidige locatie op
    const location = tourLocations[index];
    
    // Vind de architectuurdata voor deze locatie
    const architectureInfo = architectureData.find(item => item.id === location.id);
    
    // Verplaats de kaart naar de huidige locatie
    map.setCenter({ lat: location.lat, lng: location.lng });
    map.setZoom(location.zoom || 16);
    
    // Maak een marker voor de bestemming
    if (destinationMarker) {
        destinationMarker.setMap(null);
    }
    
    destinationMarker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name,
        animation: google.maps.Animation.DROP
    });
    
    // Stel de route in als we een gebruikerslocatie hebben
    if (currentUserLocation) {
        const request = {
            origin: currentUserLocation,
            destination: { lat: location.lat, lng: location.lng },
            travelMode: google.maps.TravelMode.WALKING
        };
        
        directionsService.route(request, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
                
                // Bereken afstand en tijd
                const route = result.routes[0];
                const leg = route.legs[0];
                const distance = leg.distance.text;
                const duration = leg.duration.text;
                
                // Toon info in het venster
                infoWindow.setContent(
                    `<h3>Navigeer naar: ${location.name}</h3>` +
                    `<p>Afstand: ${distance}</p>` +
                    `<p>Looptijd: ${duration}</p>`
                );
                infoWindow.open(map, destinationMarker);
            }
        });
    }
    
    // Laad de informatie over deze locatie
    const locationInfo = document.getElementById('location-info');
    
    // Controleer of dit de laatste locatie is (Springhaver)
    if (location.id === "springhaver") {
        // Laad de special Springhaver pagina
        showSpringhaverSpecial(locationInfo);
        return;
    }
    
    // Als we architectuurinfo hebben voor deze locatie
    if (architectureInfo) {
        locationInfo.innerHTML = `
            <h2 class="location-title">${architectureInfo.title} <span class="location-period">${architectureInfo.period} (${architectureInfo.year})</span></h2>
            <h3>Locatie: ${location.name}</h3>
            <img src="${architectureInfo.images[0]}" alt="${architectureInfo.title}" class="location-image">
            <div class="location-description">
                ${architectureInfo.fullDescription}
            </div>
            <h3>Kenmerkende elementen:</h3>
            <ul class="features-list">
                ${architectureInfo.features.map(feature => `
                    <li>
                        <strong>${feature.title}:</strong> ${feature.description}
                    </li>
                `).join('')}
            </ul>
            <div class="fun-facts">
                <h3>Leuke weetjes:</h3>
                <ul>
                    ${architectureInfo.funFacts.map(fact => `<li>${fact}</li>`).join('')}
                </ul>
            </div>
        `;
    } else {
        locationInfo.innerHTML = `
            <h2 class="location-title">${location.name}</h2>
            <p>${location.description}</p>
            <p>Er is geen gedetailleerde informatie beschikbaar voor deze locatie.</p>
        `;
    }
    
    // Check of gebruiker al bij de locatie is
    checkArrival();
}

// Functie voor het tonen van de speciale Springhaver ervaring
function showSpringhaverSpecial(container) {
    // Verwijder de scrollable class van de container
    container.classList.remove('scrollable');
    
    // Voeg een special stylesheet toe voor de Springhaver locatie
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        .springhaver-image {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            border-radius: 10px;
            margin: 20px 0;
        }
        
        .celebration-box {
            background-color: #f9f3e5;
            border-left: 4px solid var(--accent-color);
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
        }
        
        .rainbow-text {
            text-align: center;
            font-size: 2rem;
            margin: 20px 0;
            background: linear-gradient(to right, #ff5722, #ffeb3b, #4caf50, #2196f3, #9c27b0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: rainbow 6s ease infinite;
            background-size: 400% 100%;
        }
        
        @keyframes rainbow {
            0%, 100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }
        
        .praise-niek {
            background-color: #d4edda;
            color: #155724;
        }
        
        .praise-sanne {
            background-color: #cce5ff;
            color: #004085;
        }
    `;
    document.head.appendChild(rainbowStyle);
    
    // Voeg HTML toe voor de speciale Springhaver sectie, inclusief quiz embed
    container.innerHTML = `
        <h2 class="rainbow-text">🎉 Gefeliciteerd! Je hebt de Architectuur Tour voltooid! 🎉</h2>
        
        <div class="celebration-box">
            <h3>Welkom bij Springhaver - Het eindpunt van je architectuurtour!</h3>
            <p>Springhaver is een historisch pand met een rijke geschiedenis als bioscoop en culturele ontmoetingsplek.</p>
        </div>
        
        <img src="images/springhaver.jpg" alt="Springhaver" class="springhaver-image">
        
        <p>Dit is de perfecte plek om je tour af te sluiten met een drankje én een architectuurquiz!</p>
        
        <div class="celebration-box">
            <h3>Tijd voor de Quiz: Niek vs. Sanne!</h3>
            <p>Test nu jullie opgedane architectuurkennis in deze spannende quiz!</p>
        </div>
        
        <!-- Embed de Quiz -->
        <div class="quiz-section">
            <div id="quiz-content">
                <!-- Dit deel wordt ingevuld door de quiz.js -->
                <div id="quiz-playing" style="display: none;">
                    <div class="score-board">
                        <div class="score-container">
                            <div id="player1-score" class="player-score active">Niek: 0</div>
                            <div id="player2-score" class="player-score">Sanne: 0</div>
                        </div>
                        <div class="current-player">
                            <p>Aan de beurt: <span id="current-player">Niek</span></p>
                        </div>
                        <div class="question-progress-container">
                            <div id="question-progress" class="question-progress">Vraag 1 van 10</div>
                        </div>
                    </div>

                    <div class="question-card">
                        <div id="question-container">
                            <!-- Vraag wordt hier ingevuld door JavaScript -->
                            <p>Quiz wordt geladen...</p>
                        </div>
                    </div>
                </div>

                <div id="quiz-results" style="display: none;">
                    <div class="results-container" id="results-container">
                        <!-- Resultaten worden ingevuld door JavaScript -->
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Start confetti voor feestelijke effecten
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
    
    // Laad de quiz script dynamisch
    if (!document.getElementById('quiz-script')) {
        const quizScript = document.createElement('script');
        quizScript.id = 'quiz-script';
        quizScript.src = 'js/quiz.js';
        document.body.appendChild(quizScript);
        
        quizScript.onload = function() {
            // URL parameter toevoegen om de quiz automatisch te starten
            window.history.replaceState({}, document.title, window.location.pathname + "?springhaver=true");
            
            // Als startQuizDirectly functie bestaat, roep deze aan
            if (typeof startQuizDirectly === 'function') {
                setTimeout(startQuizDirectly, 500); // Kleine vertraging om de DOM te laten updaten
            }
        };
    } else {
        // Als quiz script al geladen is
        window.history.replaceState({}, document.title, window.location.pathname + "?springhaver=true");
        if (typeof startQuizDirectly === 'function') {
            setTimeout(startQuizDirectly, 500);
        }
    }
}

// Functie om confetti te starten
function startConfetti() {
    confettiActive = true;
    
    // Initiële confetti burst
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    
    // Periodieke confetti voor feestelijk effect
    const confettiInterval = setInterval(() => {
        if (currentLocationIndex === tourLocations.length - 1) {
            confetti({
                particleCount: 50,
                angle: Math.random() * 360,
                spread: 50,
                origin: { x: Math.random(), y: Math.random() * 0.3 + 0.3 },
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
            });
        } else {
            clearInterval(confettiInterval);
            confettiActive = false;
        }
    }, 3000);
    
    // Stop na 15 seconden om resources te sparen
    setTimeout(() => {
        clearInterval(confettiInterval);
        confettiActive = false;
    }, 15000);
}

// Functie om te controleren of de gebruiker is aangekomen bij de locatie
function checkArrival() {
    if (currentLocationIndex < 0) return; // Tour nog niet gestart
    
    const location = tourLocations[currentLocationIndex];
    const distance = getDistance(
        currentUserLocation.lat, 
        currentUserLocation.lng, 
        location.lat, 
        location.lng
    );
    
    // Als gebruiker binnen 50 meter van de locatie is
    if (distance <= 0.05) {
        infoWindow.setContent(
            `<h3>Je bent aangekomen bij ${location.name}!</h3>` +
            `<p>Je kunt nu de informatie over deze locatie bekijken.</p>`
        );
        infoWindow.open(map, destinationMarker);
    }
}

// Bereken afstand tussen twee punten in kilometers (Haversine formule)
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Straal van de aarde in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Afstand in km
    return distance;
}

// Functie om de progressbar bij te werken
function updateProgress() {
    const progressBar = document.getElementById('tour-progress');
    if (progressBar) {
        const progressPercentage = ((currentLocationIndex + 1) / tourLocations.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }
} 