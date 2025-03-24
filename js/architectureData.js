const architectureData = [
    {
        id: "romaans",
        title: "Romaanse Architectuur",
        period: "Middeleeuwen",
        year: "1000-1200",
        shortDescription: "Romaanse architectuur kenmerkt zich door dikke muren, ronde bogen en kleine ramen.",
        fullDescription: `
          De Romaanse architectuur is de eerste Europese stijl sinds de Romeinse bouwkunst en ontwikkelde zich vanaf 1000 na Christus. 
          
          In Utrecht zijn verschillende Romaanse invloeden te vinden in de oudste kerken van de stad. De stijl kenmerkt zich door massieve, dikke muren die het gewicht van het stenen gewelf moesten dragen. De ramen waren klein om de constructie stabiel te houden.
          
          Typisch Romaanse kenmerken zijn:
          - Ronde bogen
          - Dikke, zware muren met weinig ramen
          - Tongewelven
          - Geometrische patronen
          - Stevige pilaren
        `,
        location: "Pieterskerk, Utrecht",
        images: [
          "images/romaans-pieterskerk.jpeg",
          "images/romaans-details.jpg"
        ],
        features: [
          {
            title: "Ronde bogen",
            description: "Romaanse architectuur gebruikt consequent ronde bogen voor deuren, ramen en arcades. Deze halfronde bogen waren direct geïnspireerd op Romeinse bouwkunst.",
            image: "images/romaans-bogen.jpg"
          },
          {
            title: "Dikke muren",
            description: "De muren waren extreem dik en zwaar om het gewicht van de stenen gewelven te kunnen dragen. Dit resulteerde in een donker interieur met kleine ramen.",
            image: "images/romaans-muren.jpg"
          },
          {
            title: "Kapittelen",
            description: "De decoratie van kapitelen (de bovenkant van zuilen) is vaak geometrisch of met gestileerde plantenvormen. Soms werden ook dieren of Bijbelse taferelen afgebeeld.",
            image: "images/romaans-kapitelen.jpg"
          }
        ],
        funFacts: [
          "De Pieterskerk in Utrecht is een van de best bewaarde voorbeelden van Romaanse architectuur in Nederland en dateert uit 1048.",
          "Romaanse kerken hadden vaak een kruisvormige plattegrond, wat het christelijke kruis symboliseerde.",
          "De term 'Romaans' werd pas in de 19e eeuw bedacht om deze stijl te beschrijven en verwijst naar de Romeinse invloeden."
        ]
    },
    {
        id: "gotisch",
        title: "Gotische Architectuur",
        period: "Middeleeuwen",
        year: "1200-1500",
        shortDescription: "Gotische architectuur kenmerkt zich door grote ramen, spitsbogen en verticale lijnen.",
        fullDescription: `
          De Gotische architectuur volgde op de Romaanse periode en bloeide in Europa van de 12e tot de 16e eeuw. In Utrecht is de Domkerk het belangrijkste voorbeeld van deze stijl.
          
          Deze stijl streefde naar hoogte en licht. Technische innovaties zoals kruisribgewelven, spitsbogen en luchtbogen maakten het mogelijk om veel hogere gebouwen te bouwen met grotere ramen, wat resulteerde in lichtere interieurs.
          
          Typisch Gotische kenmerken zijn:
          - Spitsbogen
          - Grote glas-in-loodramen
          - Kruisribgewelven
          - Verticale lijnen die de hoogte benadrukken
          - Luchtbogen en steunberen om de constructie te verstevigen
          - Rijk versierde façades met beeldhouwwerk
        `,
        location: "Domkerk, Utrecht",
        images: [
          "images/gotisch-domkerk.jpg",
          "images/gotisch-interieur.jpg"
        ],
        features: [
          {
            title: "Spitsbogen",
            description: "De spitsboog is kenmerkend voor de Gotiek. Deze boogvorm kon meer gewicht dragen dan de Romaanse rondboog en maakte hogere constructies mogelijk.",
            image: "images/gotisch-spitsbogen.jpg"
          },
          {
            title: "Glas-in-loodramen",
            description: "De Gotische periode bracht enorme, kleurrijke glas-in-loodramen voort. Deze ramen vertelden Bijbelse verhalen aan de (vaak ongeletterde) kerkgangers en zorgden voor een mystieke lichtinval.",
            image: "images/gotisch-ramen.jpg"
          },
          {
            title: "Luchtbogen",
            description: "Luchtbogen zijn een van de meest herkenbare elementen van Gotische architectuur. Deze bogen vangen de zijwaartse druk van de gewelven op en leiden deze naar de grond, wat dunnere muren en grotere ramen mogelijk maakte.",
            image: "images/gotisch-luchtbogen.jpg"
          }
        ],
        funFacts: [
          "De Domtoren in Utrecht is met 112,5 meter de hoogste kerktoren van Nederland.",
          "In 1674 verwoestte een tornado het schip van de Domkerk, waardoor de Domtoren en het koor gescheiden werden. Het Domplein dat hierdoor ontstond is nog steeds een open ruimte.",
          "De bouw van de Domkerk duurde bijna 300 jaar, van 1254 tot 1517."
        ]
    },
    {
        id: "renaissance",
        title: "Nederlandse Renaissance",
        period: "Renaissance",
        year: "1500-1630",
        shortDescription: "De Nederlandse Renaissance combineerde klassieke elementen met lokale bouwtradities.",
        fullDescription: `
          De Nederlandse Renaissance ontwikkelde zich in de 16e en vroege 17e eeuw, toen de Noordelijke Nederlanden economisch floreerden tijdens de Gouden Eeuw. 
          
          In Utrecht zie je nog verschillende gebouwen uit deze periode, vaak herkenbaar aan hun gevels met horizontale banden van natuursteen afgewisseld met baksteen. De architectuur van deze periode combineerde klassieke elementen uit de Italiaanse Renaissance met lokale bouwtradities.
          
          Typisch Nederlandse Renaissance kenmerken zijn:
          - Trapgevels of halsgevel
          - Afwisseling van baksteen met natuursteen (speklagen)
          - Symmetrische opbouw
          - Klassieke ornamenten zoals pilasters en frontons
          - Kruiskozijnen 
          - Decoratieve elementen zoals obelisken en klauwstukken
        `,
        location: "Centraal Museum, Utrecht",
        images: [
          "images/renaissance-centraal-museum.jpg",
          "images/renaissance-gevel.jpg"
        ],
        features: [
          {
            title: "Trapgevels",
            description: "Trapgevels zijn typerend voor de Nederlandse Renaissance. Deze decoratieve gevels waren niet alleen esthetisch maar hadden ook een praktisch doel: ze maakten het gemakkelijker om de daken te onderhouden.",
            image: "images/renaissance-trapgevel.jpg"
          },
          {
            title: "Speklagen",
            description: "De afwisseling van rode baksteen met horizontale banden van lichte natuursteen (speklagen) gaf een kenmerkend uiterlijk aan gebouwen uit deze periode.",
            image: "images/renaissance-speklagen.jpg"
          },
          {
            title: "Kruiskozijnen",
            description: "Kruiskozijnen, met een verticale en horizontale middenstijl, waren kenmerkend voor de Renaissance. De bovenste vakken waren vaak voorzien van glas-in-lood, terwijl de onderste luiken hadden.",
            image: "images/renaissance-kruiskozijnen.jpg"
          }
        ],
        funFacts: [
          "Het huidige Centraal Museum in Utrecht is gevestigd in het voormalige Agnes Klooster, dat enkele kenmerken van de Nederlandse Renaissance vertoont.",
          "De Nederlandse Renaissance architectuur verschilt sterk van de Italiaanse Renaissance door de voorkeur voor baksteen en voor specifiek Nederlandse elementen zoals trapgevels.",
          "In tegenstelling tot de religieuze gebouwen uit eerdere perioden, werden in de Renaissance veel burgerlijke gebouwen zoals stadhuizen, woonhuizen en waaggebouwen in deze stijl gebouwd."
        ]
    },
    {
        id: "grachtenpanden",
        title: "Hollands Classicisme",
        period: "Hollands Classicisme",
        year: "1648",
        shortDescription: "Janskerkhof 13 is een prachtig voorbeeld van Hollands Classicisme, gebouwd in 1648.",
        fullDescription: `
          Janskerkhof 13 is een bijzonder pand dat perfect de stijl van het Hollands Classicisme vertegenwoordigt. Het pand werd in 1648 gebouwd en heeft een bewogen geschiedenis. Het diende onder andere als kantongerecht en heeft verschillende verbouwingen ondergaan, maar behield zijn karakteristieke classicistische gevel.
          
          Het pand toont de typische kenmerken van het Hollands Classicisme:
          - Symmetrische gevel met centraal geplaatste ingang
          - Klassieke pilasters en fronton
          - Strikte ordening van vensters
          - Gebruik van natuursteen voor decoratieve elementen
          - Rustige, evenwichtige verhoudingen
        `,
        location: "Janskerkhof 13, Utrecht",
        images: [
          "images/classicisme-janskerkhof.jpg",
          "images/classicisme-janskerkhof-details.jpg"
        ],
        features: [
            {
                title: "Symmetrische gevel",
                description: "De gevel is perfect symmetrisch opgebouwd met een centraal geplaatste ingang.",
                image: "images/classicisme-symmetrie.jpg"
            },
            {
                title: "Klassieke pilasters",
                description: "Decoratieve pilasters flankeren de ingang en dragen bij aan de statige uitstraling.",
                image: "images/classicisme-pilasters.jpg"
            },
            {
                title: "Fronton",
                description: "Een driehoekig fronton bekroont de gevel en benadrukt de symmetrie.",
                image: "images/classicisme-fronton.jpg"
            },
            {
                title: "Natuurstenen details",
                description: "Natuursteen wordt gebruikt voor decoratieve elementen zoals de pilasters en het fronton.",
                image: "images/classicisme-natuursteen.jpg"
            }
        ],
        funFacts: [
            "Het pand werd in 1648 gebouwd, hetzelfde jaar als de Vrede van Münster.",
            "Het diende lange tijd als kantongerecht.",
            "De gevel is een van de best bewaarde voorbeelden van Hollands Classicisme in Utrecht.",
            "Het pand heeft verschillende verbouwingen ondergaan maar behield zijn karakteristieke uitstraling."
        ]
    },
    {
        id: "jugendstil",
        title: "Jugendstil / Art Nouveau",
        period: "Jugendstil",
        year: "1900-1910",
        shortDescription: "De voormalige apotheek aan de Voorstraat 2 is een prachtig voorbeeld van Jugendstil architectuur in Utrecht.",
        fullDescription: `
          De voormalige apotheek aan de Voorstraat 2 is een prachtig voorbeeld van Jugendstil architectuur in Utrecht. Het pand toont de karakteristieke sierlijke vormen en organische motieven die zo typerend zijn voor deze stijl.
          
          Typische Jugendstil kenmerken zijn:
          - Sierlijke, organische vormen
          - Gebogen lijnen en golvende gevels
          - Decoratieve tegels en mozaïeken
          - Natuurstenen details
          - Asymmetrische gevels
          - Grote ramen met decoratief glas
        `,
        location: "Voorstraat 2, Utrecht",
        images: [
          "images/jugendstil-pand.jpg",
          "images/jugendstil-pand.jpg"
        ],
        features: [
          {
            title: "Golvende lijnen",
            description: "De beroemde 'zweepslaglijn' (coup de fouet) is kenmerkend voor Jugendstil: een elegante, golvende lijn die doet denken aan de beweging van een zweep. Deze lijn zie je terug in ijzerwerk, houtsnijwerk en decoratieve motieven.",
            image: "images/jugendstil-lijnen.jpg"
          },
          {
            title: "Glas-in-lood",
            description: "Jugendstil bracht prachtige glas-in-loodramen voort met organische patronen. Deze ramen waren niet alleen decoratief maar zorgden ook voor een spel van gekleurd licht in het interieur.",
            image: "images/jugendstil-glas.jpg"
          },
          {
            title: "Tegeldecoraties",
            description: "Kleurrijke keramische tegels met bloemen- en plantenmotieven werden veel gebruikt als geveldecoratie. De Nederlandse versie van Jugendstil staat bekend om zijn rijke tegelwerk.",
            image: "images/jugendstil-tegels.jpg"
          }
        ],
        funFacts: [
          "In Nederland werd de Jugendstil ook wel 'slaoliestijl' genoemd vanwege de golvende, organische vormen die doen denken aan druipende olie.",
          "Jugendstil had verschillende namen in verschillende landen: Art Nouveau in Frankrijk en België, Modernisme in Spanje, en Sezessionstil in Oostenrijk.",
          "Hoewel Jugendstil een korte bloeiperiode had van slechts ongeveer 20 jaar, heeft de stijl een blijvende invloed gehad op de moderne kunst en architectuur."
        ]
    },
    {
        id: "amsterdamse-school",
        title: "Amsterdamse School",
        period: "Interbellum",
        year: "1910-1930",
        shortDescription: "De Amsterdamse School kenmerkt zich door expressieve baksteenarchitectuur met decoratieve metselwerkpatronen.",
        fullDescription: `
          De Amsterdamse School was een expressionistische architectuurstroming die tussen 1910 en 1930 bloeide in Nederland. Hoewel de naam verwijst naar Amsterdam, vind je ook in Utrecht verschillende voorbeelden van deze stijl.
          
          De Amsterdamse School ontwikkelde zich als reactie op eerdere architectuurstijlen en legde sterk de nadruk op vakmanschap en handwerk. De architecten experimenteerden met baksteenmetselwerk en schiepen gebouwen met een zeer plastische, soms bijna sculpturale uitstraling.
          
          Typisch Amsterdamse School kenmerken zijn:
          - Expressief gebruik van baksteen in verschillende patronen en verbanden
          - Plastische, organische vormen
          - Verticale elementen die de horizon doorbreken
          - Decoratief smeedijzerwerk
          - Sierlijke dakvormen
          - Kleuraccenten in houtwerk en andere details
        `,
        location: "De Inktpot (ProRail), Utrecht",
        images: [
          "images/amsterdamse-school.jpg",
          "images/amsterdamse-school-details.jpg"
        ],
        features: [
          {
            title: "Expressief metselwerk",
            description: "Het meest kenmerkende aspect van de Amsterdamse School is het bijzondere metselwerk. Bakstenen werden in verschillende verbanden geplaatst om patronen en texturen te creëren, soms zelfs uitstekend uit het gevelvlak.",
            image: "images/amsterdamse-school-metselwerk.jpg"
          },
          {
            title: "Laddervensters",
            description: "Laddervensters, verticale ramen met horizontale roeden die doen denken aan een ladder, zijn typisch voor de Amsterdamse School. Ze benadrukken de verticale lijnen in de gevel.",
            image: "images/amsterdamse-school-vensters.jpg"
          },
          {
            title: "Siersmeedwerk",
            description: "Fraai bewerkt smeedijzeren hekwerk, brievenbussen en andere details waren belangrijke elementen. Deze werden vaak ontworpen als integraal onderdeel van het gebouw.",
            image: "images/amsterdamse-school-smeedwerk.jpg"
          }
        ],
        funFacts: [
          "De Amsterdamse School werd ook wel 'arbeiderspaleis-stijl' genoemd omdat veel sociale woningbouwprojecten in deze stijl werden uitgevoerd.",
          "Michel de Klerk, een van de belangrijkste architecten van de Amsterdamse School, overleed op 40-jarige leeftijd, maar heeft een enorme invloed gehad op de Nederlandse architectuur.",
          "In Utrecht zijn hele wijken zoals Tuindorp en delen van Zuilen gebouwd met invloeden van de Amsterdamse School."
        ]
    },
    {
        id: "modernisme",
        title: "Modernisme",
        period: "Modern",
        year: "1920-1940",
        shortDescription: "Het Modernisme kenmerkt zich door functionalisme, strakke lijnen en het gebruik van moderne materialen zoals beton en staal.",
        fullDescription: `
          Het Modernisme, ook bekend als het Nieuwe Bouwen in Nederland, was een belangrijke architectuurstroming in de 20e eeuw. Deze internationale stijl brak radicaal met historische stijlen en benadrukte functionaliteit, eerlijke materiaalexpressie en industriële bouwtechnieken.
          
          In Utrecht vind je verschillende gebouwen in deze stijl, waaronder het beroemde Rietveld Schröderhuis, een UNESCO Werelderfgoed dat als een van de belangrijkste voorbeelden van modernistische architectuur ter wereld wordt beschouwd.
          
          Typisch Modernistische kenmerken zijn:
          - Strakke, geometrische vormen
          - Platte daken
          - Grote raampartijen
          - Open plattegronden
          - Gebruik van moderne materialen zoals beton, staal en glas
          - Afwezigheid van decoratie
          - Focus op functionaliteit ("form follows function")
        `,
        location: "Rietveld Schröderhuis, Utrecht",
        images: [
          "images/modernisme-rietveld.jpg",
          "images/modernisme-interieur.jpg"
        ],
        features: [
          {
            title: "Primaire kleuren",
            description: "Gerrit Rietveld, een van de belangrijkste modernistische architecten in Nederland, gebruikte primaire kleuren (rood, geel, blauw) in combinatie met wit, zwart en grijs om de verschillende elementen van het gebouw te accentueren.",
            image: "images/modernisme-kleuren.jpg"
          },
          {
            title: "Open plattegronden",
            description: "Modernistische gebouwen hadden vaak open, flexibele plattegronden. Het Rietveld Schröderhuis had schuifwanden waarmee de bewoners de ruimte naar behoefte konden indelen.",
            image: "images/modernisme-plattegrond.jpg"
          },
          {
            title: "Grote raampartijen",
            description: "Grote ramen zorgen voor veel natuurlijk licht en verbinden het interieur met de buitenomgeving. In het Modernisme werden ramen gezien als functionele elementen, niet als decoratieve.",
            image: "images/modernisme-ramen.jpg"
          }
        ],
        funFacts: [
          "Het Rietveld Schröderhuis in Utrecht werd in 2000 op de UNESCO Werelderfgoedlijst geplaatst als uitzonderlijk voorbeeld van de Stijl-beweging.",
          "Gerrit Rietveld was oorspronkelijk meubelmaker en ontwierp eerst meubels (waaronder de beroemde Rood-blauwe stoel) voordat hij architect werd.",
          "In tegenstelling tot eerdere stijlen, streefde het Modernisme naar universaliteit in plaats van nationale of regionale expressies in architectuur."
        ]
    },
    {
        id: "wederopbouw",
        title: "Wederopbouwarchitectuur",
        period: "Naoorlogs",
        year: "1945-1965",
        shortDescription: "Wederopbouwarchitectuur kenmerkt zich door functionaliteit, soberheid en moderne materialen in een tijd van woningnood.",
        fullDescription: `
          De wederopbouwperiode na de Tweede Wereldoorlog was gekenmerkt door woningnood en een dringende behoefte aan nieuwe kantoren, winkels en andere voorzieningen. Dit leidde tot een functionele, sobere architectuur die snel en efficiënt gebouwd kon worden.
          
          In Utrecht resulteerde dit in verschillende wijken en gebouwen in een typische naoorlogse stijl. De stationsbuurt onderging in deze periode een grote transformatie, waarbij historische panden plaats maakten voor moderne gebouwen.
          
          Typisch Wederopbouw kenmerken zijn:
          - Functionele, rechthoekige vormen
          - Systeembouw en prefab-elementen
          - Sobere detaillering
          - Gebruik van beton, glas en staal
          - Portiek- en galerijflats
          - Scheiding van functies (wonen, werken, winkelen)
        `,
        location: "Hoog Catharijne (oorspronkelijke versie), Utrecht",
        images: [
          "images/wederopbouw-catharijne.jpg",
          "images/wederopbouw-flats.jpg"
        ],
        features: [
          {
            title: "Betonconstructies",
            description: "Betonnen skeletconstructies maakten snelle bouw mogelijk en gaven vorm aan de naoorlogse gebouwen. Beton werd niet verborgen maar juist getoond als eerlijk bouwmateriaal.",
            image: "images/wederopbouw-beton.jpg"
          },
          {
            title: "Strokenbouw",
            description: "Woongebouwen uit deze periode werden vaak in parallelle 'stroken' geplaatst voor optimale zonlichttoetreding en ventilatie, gebaseerd op functionalistische principes.",
            image: "images/wederopbouw-stroken.jpg"
          },
          {
            title: "Kunst-integratie",
            description: "Een bijzonder kenmerk van de wederopbouwperiode was de integratie van kunst in architectuur. Veel gebouwen kregen reliëfs, muurschilderingen of sculpturen die verwezen naar de functie van het gebouw of naar wederopbouw-idealen.",
            image: "images/wederopbouw-kunst.jpg"
          }
        ],
        funFacts: [
          "Het oorspronkelijke Hoog Catharijne in Utrecht, geopend in 1973, was een van de eerste grote overdekte winkelcentra in Europa.",
          "Tijdens de wederopbouwperiode werd de Utrechtse binnenstad doorsneden door de aanleg van de Catharijnebaan, die later weer is omgevormd tot water in het project 'Utrecht weer aan de singel'.",
          "Veel gebouwen uit de wederopbouwperiode worden tegenwoordig gesloopt of grondig gerenoveerd, maar er is ook groeiende waardering voor het erfgoed uit deze periode."
        ]
    },
    {
        id: "hedendaags",
        title: "Hedendaagse Architectuur",
        period: "Hedendaags",
        year: "2000-heden",
        shortDescription: "Hedendaagse architectuur in Utrecht kenmerkt zich door duurzaamheid, innovatie en een dialoog met de historische context.",
        fullDescription: `
          De hedendaagse architectuur in Utrecht toont een spannende mix van innovatie en respect voor de historische context. Nieuwe gebouwen moeten voldoen aan hoge duurzaamheidseisen en tegelijkertijd bijdragen aan de levendigheid en identiteit van de stad.
          
          Een van de meest indrukwekkende voorbeelden van moderne architectuur in Utrecht is TivoliVredenburg, een multifunctioneel muziekpaleis dat verschillende concertzalen onder één dak verenigt. Het gebouw is een meesterwerk van moderne architectuur dat perfect illustreert hoe nieuwe gebouwen kunnen bijdragen aan de stedelijke identiteit.
          
          Typisch Hedendaagse kenmerken zijn:
          - Duurzame materialen en technieken
          - Innovatieve constructies
          - Multifunctionaliteit
          - Grote transparantie met veel glas
          - Integratie van groen en openbare ruimte
          - Dialoog met de historische context
          - Hoge mate van personalisatie en flexibiliteit
        `,
        location: "TivoliVredenburg, Utrecht",
        images: [
          "images/hedendaags-tivoli.jpg",
          "images/hedendaags-tivoli-interieur.jpg"
        ],
        features: [
          {
            title: "Duurzaamheid",
            description: "Moderne gebouwen in Utrecht zijn vaak voorbeelden van duurzame architectuur, met kenmerken zoals zonnepanelen, groene daken, warmtepompen en slimme klimaatsystemen.",
            image: "images/hedendaags-duurzaam.jpg"
          },
          {
            title: "Transparantie",
            description: "Hedendaagse architectuur kenmerkt zich door een grote mate van transparantie, met glazen gevels die de grens tussen binnen en buiten vervagen en interactie bevorderen tussen het gebouw en de stedelijke omgeving.",
            image: "images/hedendaags-transparant.jpg"
          },
          {
            title: "Herbestemming",
            description: "Een belangrijk fenomeen in de moderne Utrechtse architectuur is de herbestemming van oude gebouwen, zoals de transformatie van het oude postkantoor tot winkelcentrum en bibliotheek.",
            image: "images/hedendaags-herbestemming.jpg"
          }
        ],
        funFacts: [
          "Het dak van Utrecht Centraal Station bevat ongeveer 8.000 m² aan zonnepanelen, wat het een van de meest duurzame stations van Nederland maakt.",
          "TivoliVredenburg bevat vijf concertzalen met elk hun eigen akoestiek en architectonische uitstraling, allemaal binnen één gebouw.",
          "De nieuwe Singel door het hart van Utrecht, waar voorheen de Catharijnebaan lag, is een voorbeeld van hoe de stad terugkeert naar historische structuren met moderne inzichten."
        ]
    },
    {
        id: "springhaver",
        title: "Springhaver",
        period: "Historisch",
        year: "1909",
        shortDescription: "Springhaver is een historisch pand dat oorspronkelijk als bioscoop diende. Nu is het een gezellig café waar je de tour kunt afsluiten met een Josje.",
        fullDescription: `
          Springhaver is een bijzonder pand met een rijke geschiedenis. Het werd in 1909 gebouwd als bioscoop en is een van de oudste bioscopen van Utrecht. Het pand heeft verschillende verbouwingen ondergaan maar behield zijn karakteristieke uitstraling.
          
          Tegenwoordig is Springhaver een gezellig café waar je de architectuurtour kunt afsluiten met een verfrissende Josje. Het pand combineert historische elementen met een moderne functie.
        `,
        location: "Springhaver, Utrecht",
        images: [
          "images/springhaver.jpg",
          "images/springhaver-interieur.jpg"
        ],
        features: [
            {
                title: "Historische gevel",
                description: "De gevel toont nog steeds de grandeur van de voormalige bioscoop.",
                image: "images/springhaver-gevel.jpg"
            },
            {
                title: "Interieur",
                description: "Het interieur combineert historische elementen met moderne inrichting.",
                image: "images/springhaver-interieur.jpg"
            }
        ],
        funFacts: [
            "Springhaver is een van de oudste bioscopen van Utrecht.",
            "Het pand werd in 1909 gebouwd als bioscoop.",
            "De naam 'Springhaver' verwijst naar een oude bioscopebrand.",
            "Het is een perfecte plek om de architectuurtour af te sluiten met een Josje.",
            "Het pand combineert historische architectuur met een moderne horecafunctie."
        ]
    }
]; 