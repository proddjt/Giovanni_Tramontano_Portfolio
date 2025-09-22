import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    it: {
        translation: {
            "top_button" : "Torna su",

            "landing_page1" : "Giovanni, web developer full-stack.",
            "landing_page2" : "Creo soluzioni digitali moderne e funzionali.",
            "landing_page3" : "Passione per il codice e il design.",
            "presentation_function" : "Funzione di presentazione",
            "scroll" : "Scorri in basso",

            "navbar_home" : "Home",
            "navbar_about" : "Su di me",
            "navbar_projects" : "Progetti",
            "navbar_contact" : "Contatti",

            "who" : "Chi sono?",
            "who_text" : "Mi chiamo Giovanni Tramontano, ho 24 anni e risiedo nella provincia di Napoli. Dopo il diploma in Informatica all’ITIS F. Giordani di Caserta nel 2019, ho intrapreso un percorso lavorativo in un settore diverso da quello dello sviluppo, che mi ha permesso di acquisire competenze trasversali come problem solving, lavoro in team e orientamento agli obiettivi. Dal 2024 ho avviato la mia formazione come full-stack developer, specializzandomi soprattutto nello sviluppo front-end.",
            "tecnologies" : "Quali tecnologie ho studiato e utilizzo?",
            "tecnologies_text" : "Nel mio percorso formativo ho approfondito diverse tecnologie, tra cui HTML, CSS, Bootstrap, Tailwind CSS, JavaScript e React.js per lo sviluppo front-end. Per il back-end ho lavorato con PHP, Laravel, MySQL e SQLite. Queste competenze mi permettono di gestire l’intero ciclo di sviluppo di un'applicazione, dall’interfaccia utente alla logica lato server. Attualmente sto studiando TypeScript e Next.js, con l’obiettivo di ampliare le mie competenze in ambito full-stack e adottare soluzioni moderne e scalabili nei miei progetti. Inoltre, ho familiarità con Adobe Photoshop e Figma, strumenti che utilizzo per progettare grafiche ed interfacce personalizzate e curare ancora meglio la parte grafica dei miei progetti.",
            "technologies_utilized" : "Tecnologie utilizzate",
            "see_more" : "Scopri di più",
            "passion" : "Altri hobby e passioni",
            "passion_text" : "Oltre alla passione per l’informatica e lo sviluppo web, coltivo da anni interessi in ambiti molto diversi tra loro. Sono uno speedcuber professionista: pratico lo speedcubing, ovvero la risoluzione di cubi di Rubik e simili nel minor tempo possibile, disciplina in cui partecipo attivamente a gare ufficiali e ambisco a diventare delegato WCA per l’Italia. Produco musica da quasi dieci anni, con progetti pubblicati sia in formato digitale che fisico. Mi dedico inoltre al video editing, realizzando occasionalmente spot per eventi e produzioni private.",
            "wca" : "Profilo WCA",
            "spotify" : "Profilo Spotify",

            "my_projects" : "I miei progetti",
            "swipe" : "Scorri per navigare",
            "my_projects_text" : "In questa sezione presento alcuni dei miei progetti più completi e curati, frutto di un lavoro approfondito e continuo miglioramento. La raccolta è in costante aggiornamento, con nuove idee e sviluppi che verranno aggiunti regolarmente.",
            "gallery" : "Galleria",
            "online" : "Link al progetto online",
            "repo" : "Link al progetto GitHub",
            "chiudi" : "Chiudi",

            "gtimer_desc_1" : "GTimer è un'applicazione web ideata e sviluppata da me, Giovanni Tramontano, pensata per gli appassionati di speedcubing. Interamente costruita in Laravel, GTimer si propone come alternativa moderna ai timer WCA già esistenti, ispirandosi a soluzioni come CSTimer e QQTimer, ma con funzionalità originali e un'interfaccia completamente personalizzata.",
            "gtimer_desc_2" : "La logica del timer è interamente gestita in JavaScript, mentre il layout front-end è costruito con HTML e Bootstrap. Per offrire un’esperienza utente fluida e dinamica, ho integrato Livewire, mentre l’autenticazione è affidata al sistema Laravel Fortify. Il backend è sviluppato in PHP e sfrutta Laravel per garantire performance e scalabilità.",
            "gtimer_desc_3" : "Una delle caratteristiche principali è l’integrazione con TNoodle CLI, lo strumento ufficiale WCA per la generazione degli scramble. Il sistema viene avviato in background tramite Symfony Process, permettendo il caricamento asincrono dei dati e riducendo notevolmente i tempi di attesa.",
            "gtimer_desc_4" : "L’interazione con il timer simula l’esperienza reale dello Stackmat: per avviare e fermare il tempo è necessario premere contemporaneamente i due tasti CTRL, un dettaglio pensato per chi cerca precisione e fedeltà rispetto alle competizioni ufficiali.",
            "gtimer_desc_5" : "Il progetto è attualmente in fase di sviluppo attivo, con l’obiettivo di migliorare ulteriormente il front-end e renderlo sempre più intuitivo, performante e adatto sia all’allenamento personale che alla simulazione di gare. Il codice è open source e completamente accessibile per chiunque voglia contribuire o proporre miglioramenti.",

            "presto_desc_1" : "Presto è un marketplace open-source progettato da SudHub, un team composto da quattro sviluppatori del Sud Italia: Davide Giarrusso, Davide Matta, Salvatore Lombardi e me, Giovanni Tramontano. Il progetto è nato come lavoro finale del corso Hackademy+161 di Aulab ed è stato concepito con l’obiettivo di offrire una piattaforma accessibile, moderna e multilingua per la pubblicazione e consultazione di annunci.",
            "presto_desc_2" : "L’applicazione consente agli utenti di caricare e cercare annunci in diverse categorie, dai prodotti elettronici agli articoli d'arredamento. L’esperienza utente è pensata per essere semplice, fluida e adatta sia da desktop che da dispositivi mobili. Ogni annuncio può essere filtrato per parola chiave o categoria, e chiunque può registrarsi e diventare revisore dei contenuti tramite un'apposita sezione dedicata.",
            "presto_desc_3" : "Un aspetto tecnico rilevante è la gestione avanzata delle immagini: il sistema esegue crop automatico, censura dei volti e aggiunta di watermark per proteggere contenuti sensibili. Inoltre, le immagini vengono analizzate attraverso Google Vision API per rilevare contenuti inappropriati come nudità o violenza. Queste funzionalità, unite a un sistema di revisione e notifica automatica via email, garantiscono un ambiente sicuro e controllato.",
            "presto_desc_4" : "Il progetto è basato su Laravel e integra tecnologie come Livewire per l’interattività, Fortify per la sicurezza, Laravel Scout per la ricerca veloce e Outhebox Languages per la gestione delle lingue. Il front-end è sviluppato con Bootstrap e arricchito da icone via FontAwesome e Bootstrap Icons. Tutto è costruito con attenzione alla scalabilità, semplicità e mantenibilità del codice.",
            "presto_desc_5" : "Presto non è solo un esercizio tecnico, ma una dimostrazione di come collaborazione e passione possano generare soluzioni concrete. SudHub rappresenta il nostro impegno per un web più accessibile e aperto, e siamo sempre disponibili a ricevere feedback, idee o contributi per migliorare ulteriormente la piattaforma.",

            "gennairino_desc_1" : "GennAIrino è un progetto sperimentale e divertente che nasce dalla volontà di esplorare l’integrazione dell’intelligenza artificiale in Laravel. Realizzato durante il corso Hackademy+ di Aulab, il progetto consiste in una chat interattiva con un AI personalizzata e volutamente stereotipata in stile napoletano, in omaggio alla mia città natale, Napoli. Il risultato è un assistente digitale ironico, familiare e coinvolgente.",
            "gennairino_desc_2" : "L’obiettivo dell’applicazione è quello di guidare l’utente nella scelta di prodotti all’interno di un catalogo precaricato. GennAIrino fornisce suggerimenti e consigli personalizzati, combinando una logica conversazionale con un tono caratteristico e folkloristico, capace di rendere l’interazione leggera e piacevole. La sua personalità è stata scritta per intrattenere pur mantenendo una funzione utile e concreta.",
            "gennairino_desc_3" : "Dal punto di vista tecnico, l’app si basa su Laravel per la gestione del backend e delle rotte, e sfrutta le API di OpenAI per generare risposte in tempo reale. La struttura conversazionale è progettata per interpretare le richieste dell’utente e offrire suggerimenti coerenti con le categorie e i prodotti disponibili, il tutto in una lingua che richiama l’espressività e il calore del dialetto napoletano.",
            "gennairino_desc_4" : "Il catalogo prodotti è gestito localmente e consultabile dall’AI durante la conversazione. GennAIrino riesce quindi a combinare capacità di elaborazione linguistica con accesso a dati strutturati, offrendo un’interazione intelligente, dinamica e culturalmente contestualizzata. La scelta stilistica dell’assistente dimostra come l’intelligenza artificiale possa anche essere personalizzata e creativa.",
            "gennairino_desc_5" : "GennAIrino rappresenta un esperimento riuscito che unisce tecnologia, territorio e ironia. È un progetto che ha dimostrato come Laravel possa integrare servizi esterni come OpenAI per creare esperienze utente originali e su misura. Lo spirito del progetto è quello di rendere la tecnologia accessibile e anche, perché no, divertente.",

            "jptattoo_desc_1" : "JPTattoo è un progetto work in progress che sto sviluppando per lo studio di tatuaggi di Joseph Pacilio. Si tratta di una single page application realizzata in React e Tailwind CSS, pensata per offrire una vetrina digitale moderna, dinamica e visivamente coinvolgente per uno studio artistico. L’obiettivo è creare uno spazio web che valorizzi l’identità del tatuatore e ne comunichi al meglio lo stile.",
            "jptattoo_desc_2" : "Il sito presenta diverse sezioni dedicate, tra cui gallerie video e fotografiche dei lavori, descrizioni dei servizi offerti, una presentazione del tatuatore e una sezione social per connettersi con il pubblico. La navigazione fluida e il design responsive permettono di esplorare i contenuti in modo naturale, sia da desktop che da smartphone, offrendo un’esperienza utente curata e immediata.",
            "jptattoo_desc_3" : "Al momento, il progetto si concentra sull’aspetto promozionale: un sito statico pensato come vetrina professionale. Tuttavia, è prevista una fase di sviluppo futura in cui il sito verrà ampliato con funzionalità avanzate, tra cui la possibilità di richiedere informazioni, ricevere consigli sui tatuaggi e prenotare appuntamenti direttamente online o tramite app mobile.",
            "jptattoo_desc_4" : "Dal punto di vista tecnico, l’uso combinato di React e Tailwind CSS ha permesso di creare un’interfaccia pulita, modulare e facilmente estendibile. Ogni componente è progettato per essere riutilizzabile e orientato alla performance, in vista dell’integrazione di funzionalità interattive e collegamenti a servizi esterni.",
            "jptattoo_desc_5" : "JPTattoo è un progetto che fonde estetica e funzionalità in un contesto artistico, ed è un esempio di come il web design possa adattarsi alle esigenze di uno studio creativo. L’intento è quello di valorizzare il lavoro dell’artista attraverso una piattaforma curata e tecnologicamente solida, pronta per evolversi in un'applicazione completa.",

            "lootly_desc_1" : "Lootly è una web app che ho ideato e sviluppato per offrire agli appassionati di videogiochi un punto di riferimento ricco e accessibile. L’interfaccia, realizzata con React, consente di esplorare oltre 800.000 titoli, dai classici più antichi fino alle novità più recenti. Il progetto nasce dal desiderio di creare un archivio moderno, personalizzabile e interattivo, che metta in risalto la varietà e la storia del mondo videoludico.",
            "lootly_desc_2" : "L'app permette di navigare il catalogo tramite filtri dinamici e sistemi di ordinamento per data, genere, piattaforma, rating e nome. Ogni gioco dispone di una pagina dedicata con descrizione, trailer, immagini, valutazioni e piattaforme disponibili. Registrandosi, l’utente può creare un profilo personale e salvare i titoli preferiti, rendendo l’esperienza più personalizzata e coinvolgente.",
            "lootly_desc_3" : "Lootly include sezioni aggiuntive dedicate agli store digitali e agli editori, offrendo panoramiche dettagliate e la possibilità di confrontare offerte e produzioni. Un elemento distintivo è la chat in tempo reale associata a ciascun gioco: uno spazio pensato per il confronto tra utenti, dove scambiare opinioni come fosse una moderna sala giochi online.",
            "lootly_desc_4" : "A livello tecnico, l'applicazione integra diverse librerie e strumenti per garantire prestazioni elevate: DaisyUI e Swiper per lo styling, AutoAnimate e Motion per le animazioni, Zustand per la gestione dello stato, Zod per la validazione, e Tanstack Query per le chiamate asincrone. Il backend si basa su Supabase, mentre l'intero database videoludico è alimentato da RAWG.io..",
            "lootly_desc_5" : "Lootly rappresenta una sintesi tra innovazione e passione. È un progetto che unisce funzionalità avanzate con un’estetica curata, pensato per rendere la cultura videoludica accessibile, navigabile e condivisa. L’app è già disponibile online e continuerà a evolversi grazie al feedback degli utenti e alla volontà di spingerne i confini.",

            "wcaquiz_desc_1" : "WCAQuiz è un progetto sviluppato in Laravel che ho realizzato per esplorare in chiave ludica il vasto database di cubers iscritti alla World Cube Association. L’idea nasce dalla passione per lo speedcubing e si traduce in una web app che sfida l’utente a indovinare il profilo di un cuber a partire dalle sue statistiche pubbliche, come nazionalità, anno di iscrizione, record personali e piazzamenti ufficiali.",
            "wcaquiz_desc_2" : "La dinamica del gioco è basata su tentativi successivi: ad ogni errore, viene svelato un nuovo dettaglio del profilo, fino a portare l’utente a individuare il nome corretto oppure a completare la scheda senza riuscire nell’identificazione. L’interfaccia è semplice e intuitiva, ma le meccaniche richiedono attenzione e conoscenza del mondo WCA, rendendo l’esperienza stimolante per appassionati e curiosi.",
            "wcaquiz_desc_3" : "WCAQuiz offre diverse modalità di gioco, permettendo di filtrare i cubers per area geografica (Italia, Europa, Africa, mondo intero) e scegliere il livello di difficoltà. Questo consente di adattare l’esperienza sia ai neofiti sia agli utenti più esperti, offrendo un grado di sfida proporzionato e una migliore accessibilità.",
            "wcaquiz_desc_4" : "Per la raccolta dei dati, il gioco si appoggia all’API WCA REST di Robin Ingelbrecht, che garantisce un accesso rapido e affidabile alle informazioni ufficiali. L’integrazione è gestita completamente lato server, e la logica di gioco è scritta in PHP all’interno del framework Laravel. La scelta di Laravel ha permesso una gestione ottimizzata delle sessioni, dei flussi di gioco e del routing interno.",
            "wcaquiz_desc_5" : "WCAQuiz è un esperimento riuscito di gamification su dati reali. Dimostra come sia possibile trasformare informazioni pubbliche in uno strumento educativo e coinvolgente, pur mantenendo una struttura semplice e accessibile. È un progetto che unisce passione personale, curiosità tecnica e attenzione all’esperienza utente.",

            "vestiti_desc_1" : "Vestiti Matti-a è il primo progetto strutturato che ho realizzato durante l’Hackademy insieme a tre colleghi: Sofia Vidotto, Gabriele Digiorgio e Lorenzo Martini. È stata l’occasione per uscire dai semplici esercizi HTML ed entrare nel mondo dello sviluppo web, esplorando tecnologie e approcci nuovi in un contesto collaborativo.",
            "vestiti_desc_2" : "Il sito nasce da un template grafico condiviso su Figma, il cui layout è stato fedelmente ricostruito e poi esteso con funzionalità aggiuntive. L’idea era creare una sorta di e-commerce giocoso, in cui visualizzare una selezione di abiti e accessori. Abbiamo integrato una sezione 'catalogo' dinamica, con possibilità di filtrare i prodotti per categoria o cercare per nome.",
            "vestiti_desc_3" : "Tutto è stato sviluppato con tecnologie 'vanilla' (HTML, CSS, JavaScript), affiancate da Bootstrap per la gestione responsiva e alcune animazioni leggere in JS che rendono l'interfaccia più viva. La scelta di mantenere il codice pulito e senza framework complessi ci ha permesso di concentrarci sull’apprendimento delle fondamenta.",
            "vestiti_desc_4" : "Questo progetto ha rappresentato per me il primo vero contatto con il front-end moderno: dallo studio delle UI alla logica del DOM, passando per la strutturazione di una pagina web articolata. Ha segnato un passaggio importante nella mia crescita da curioso del web a sviluppatore consapevole.",
            "vestiti_desc_5" : "Vestiti Matti-a è più di un esercizio accademico: è il ricordo di un primo slancio creativo condiviso, dove passione, impegno e voglia di mettersi in gioco hanno costruito qualcosa di reale e funzionante.",
        
            "contacts" : "Contatti",
            "download_cv" : "Scarica CV",
            "write_email" : "Scrivi email",
            "mail_href" : "mailto:giovanni.tramontano.gt@gmail.com?subject=Richiesta%20di%20contatto&body=Ciao%20Giovanni,%20Ho%20visitato%20il%20tuo%20portfolio%20e%20vorrei%20contattarti...",
            "instagram_text" : "Dove condivido la mia vita e le mie passioni",
            "instagram_follow" : "Seguimi",
            "linkedin_text" : "Dove puoi trovare la mia carriera professionale e le mie competenze",
            "linkedin_follow" : "Collegati con me",
            "whatsapp_text" : "Dove puoi scrivermi e chiedermi informazioni",
            "whatsapp_follow" : "Scrivimi",
            "github_text" : "Dove puoi trovare i miei progetti e il mio codice",
            "github_follow" : "Seguimi",
        }
    },
    us: {
        translation: {
            "top_button" : "Back to top",

            "landing_page1" : "Giovanni, full-stack web developer.",
            "landing_page2" : "I create modern and functional digital solutions.",
            "landing_page3" : "Passion for code and design.",
            "presentation_function" : "Presentation function",
            "scroll" : "Scroll down",
            
            "navbar_home" : "Home",
            "navbar_about" : "About me",
            "navbar_projects" : "Projects",
            "navbar_contact" : "Contact",
            
            "who" : "Who am I?",
            "who_text" : "I'm Giovanni Tramontano, I'm 24 years old and I'm from the Naples province, in Italy. After my IT graduation at ITIS F.Giordani in Caserta in 2019, I choose a different carreer path compared to developement, which allowed me to acquire soft skills such as problem solving, teamwork and goal orientation. Since 2024 I started my full-stack developer training, specializing in front-end development.",
            "tecnologies" : "What technologies have I studied and used?",
            "tecnologies_text" : "Throughout my training path, I have explored various technologies, including HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React.js for front-end development. On the back-end side, I have worked with PHP, Laravel, MySQL and SQLite. These skills allow me to manage the entire development cycle of an application, from the user interface to server-side logic. I am currently studying TypeScript and Next.js to further expand my full-stack capabilities and adopt modern, scalable solutions in my projects. Additionally, I am familiar with Adobe Photoshop and Figma, tools I use to design custom graphics and interfaces, enhancing the visual quality of my work.",
            "technologies_utilized" : "Technologies used",
            "see_more" : "See more",
            "passion" : "More hobbies and things I love",
            "passion_text" : "As well as my passion for IT and developement, I've been into a lot of other things for year. I'm a professional speedcuber: I practice speedcubing, that is about solving Rubik's Cube and similars in the shortest time possible, where I'm quite active into official competitions and where I'm aspiring to become a WCA delegate for Italy. I produce music for almost 10 years, with published works both in digital and physical format. I also dedicate myself to video editing, making occasional spots for events and private productions.",
            "wca" : "WCA profile",
            "spotify" : "Spotify profile",

            "my_projects" : "My projects",
            "swipe" : "Swipe to navigate",
            "my_projects_text" : "Here you'll find a selection of my most refined and in-depth projects—each the result of thoughtful design and continuous iteration. This section is regularly updated as I add new ideas and ongoing work.",
            "gallery" : "Gallery",
            "online" : "Online project link",
            "repo" : "GitHub project link",
            "chiudi" : "Close",

            "gtimer_desc_1" : "GTimer is a web application conceived and developed by me, Giovanni Tramontano, designed for speedcubing enthusiasts. Fully built with Laravel, GTimer aims to be a modern and customized alternative to existing WCA timers, drawing inspiration from tools such as CSTimer and QQTimer while introducing original features and a tailored interface.",
            "gtimer_desc_2" : "The timer logic is powered entirely by JavaScript, with the front-end layout constructed using HTML and Bootstrap. To ensure a dynamic and responsive user experience, I’ve integrated Livewire, and user authentication is handled through Laravel Fortify. The backend, written in PHP, leverages Laravel’s framework to offer scalability and reliable performance.",
            "gtimer_desc_3" : "A distinctive feature of GTimer is its integration with TNoodle CLI, the official WCA tool for generating scrambles. It runs asynchronously in the background via Symfony Process, drastically improving loading times and eliminating unnecessary delays.",
            "gtimer_desc_4" : "Interaction with the timer emulates the real-world Stackmat experience: the timer is started and stopped by simultaneously pressing both CTRL keys, a design choice aimed at providing precision and authenticity for competitive cubers.",
            "gtimer_desc_5" : "The project is under active development, with the goal of continually refining the front-end to make it more intuitive, efficient, and suitable for both practice sessions and simulated competitions. The source code is open to the public, and contributions, feedback, or ideas from the community are welcome and encouraged.",
        
            "presto_desc_1" : "Presto is an open-source marketplace developed by SudHub, a team of four web developers from Southern Italy: Davide Giarrusso, Davide Matta, Salvatore Lombardi, and myself, Giovanni Tramontano. The project was created as the final assignment for the Hackademy+161 course by Aulab, designed to deliver a user-friendly, modern, and multilingual platform for browsing and posting classified ads.",
            "presto_desc_2" : "Users can explore or publish listings across a wide range of categories, from electronics to furniture. The interface is fully responsive and optimized for both desktop and mobile use. Listings can be filtered by keywords or categories, and users can register to become content reviewers through a dedicated form, making the moderation process more collaborative and inclusive.",
            "presto_desc_3" : "One of the standout features is advanced image handling: the platform applies automatic cropping, face blurring for privacy, and watermarking for content protection. Images are also scanned via Google Vision API to detect potentially inappropriate content such as nudity or violence. Combined with manual and automated moderation tools and email notifications, Presto ensures a safe and reliable environment.",
            "presto_desc_4" : "Technically, Presto is built on Laravel and integrates tools like Livewire for interactivity, Fortify for secure authentication, Laravel Scout for fast search, and Outhebox Languages for multilingual support. The front-end relies on Bootstrap and is enhanced with FontAwesome and Bootstrap Icons, all developed with scalability, clarity, and maintainability in mind.",
            "presto_desc_5" : "Presto is more than a technical project—it’s a testament to how teamwork and passion can create impactful, real-world solutions. SudHub embodies our commitment to making the web more inclusive and community-driven, and we're always open to feedback, collaboration, or ideas to improve the platform further.",
        
            "gennairino_desc_1" : "GennAIrino is a lighthearted experimental project created to explore AI integration within Laravel. Developed during the Hackademy+ course by Aulab, the app features a chat interface with a custom AI assistant intentionally styled with Napoletan stereotypes—as a playful tribute to my hometown, Naples. The result is an engaging and witty digital companion.",
            "gennairino_desc_2" : "The application helps users choose items from a preloaded product catalog. GennAIrino provides personalized suggestions and advice, responding in a lively and culturally rich tone designed to entertain while remaining practically helpful. The assistant’s character gives the entire experience a warm and humorous twist.",
            "gennairino_desc_3" : "Technically, the project is powered by Laravel, which manages routing and backend logic, while real-time responses are generated using OpenAI’s API. The conversational engine interprets user queries and offers recommendations based on product categories and available listings, all delivered in expressive, dialect-inspired language that adds personality to the interaction.",
            "gennairino_desc_4" : "The product catalog is locally stored and accessed by the AI during conversations. GennAIrino merges structured data handling with natural language processing, resulting in a dynamic and smart user experience with cultural flavor. The assistant’s stylization highlights the creative potential of customizing AI interfaces.",
            "gennairino_desc_5" : "GennAIrino is a successful blend of technology, culture, and humor. It showcases how Laravel can be used to integrate external AI services like OpenAI and build tailored conversational experiences. The project captures the idea that innovation can be both useful and genuinely fun.",
        
            "jptattoo_desc_1" : "JPTattoo is a work-in-progress project I'm developing for the tattoo studio of Joseph Pacilio. It’s a single page application built with React and Tailwind CSS, designed to serve as a modern and visually engaging online showcase for an independent tattoo artist. The aim is to create a digital space that reflects the personality and artistic style of the studio.",
            "jptattoo_desc_2" : "The website includes distinct sections featuring image and video galleries of past work, service descriptions, an introduction to the artist, and social media links for community engagement. With a smooth navigation experience and fully responsive layout, users can explore the studio’s content seamlessly across desktop and mobile devices.",
            "jptattoo_desc_3" : "Currently, JPTattoo focuses on the promotional aspect—a static showcase that highlights the studio’s portfolio and presence. In the next development phase, the site will evolve to include advanced features such as an integrated contact form, tattoo consultation, and online appointment booking, possibly as a mobile app.",
            "jptattoo_desc_4" : "From a technical standpoint, the use of React and Tailwind CSS enabled the creation of a clean, modular, and performance-oriented interface. Each component is built with scalability in mind, ensuring that future enhancements and integrations can be implemented smoothly.",
            "jptattoo_desc_5" : "JPTattoo combines visual storytelling with functional design in the context of artistic branding. It demonstrates how web development can adapt to the needs of creative professionals, offering a platform that’s well-crafted and technically robust, ready to grow into a full digital service.",
        
            "lootly_desc_1" : "Lootly is a web app I designed and developed to serve as a rich, accessible resource for video game enthusiasts. Built with React, the interface allows users to explore a catalog of over 800,000 titles—from early classics to the latest AAA releases. The project aims to offer a modern, customizable and interactive archive that celebrates the diversity and evolution of video games.",
            "lootly_desc_2" : "Users can browse the game list using advanced filters and sorting options by release date, genre, platform, rating, and title. Each game has a dedicated page containing a full description, trailers, images, platform availability, and ratings. Registered users can create a personalized profile, save favorite games, and enjoy a tailored experience.",
            "lootly_desc_3" : "Lootly also features sections focused on digital storefronts and publishers, with detailed insights and comparison tools. A standout element is the real-time chat available for each game, enabling users to comment, discuss, and connect—recreating the atmosphere of a shared arcade, online.",
            "lootly_desc_4" : "Technically, the app integrates several libraries to ensure high performance and elegant interactions: DaisyUI and Swiper for styling, AutoAnimate and Motion for animations, Zustand for state management, Zod for form validation, and Tanstack Query for asynchronous data handling. Supabase powers the backend and authentication, while game data is sourced from RAWG.io..",
            "lootly_desc_5" : "Lootly is a blend of innovation and personal passion. It combines advanced features with a refined aesthetic, designed to make gaming culture accessible, immersive, and communal. The app is live and ready to explore, with future improvements driven by community feedback and the ambition to expand its reach.",
        
            "wcaquiz_desc_1" : "WCAQuiz is a project I developed using Laravel that transforms public WCA data into a playful and interactive guessing game. Inspired by my interest in speedcubing, the application challenges users to identify registered cubers based on their official statistics, including nationality, WCA ID year, records, and competition results.",
            "wcaquiz_desc_2" : "The gameplay revolves around multiple attempts: with each incorrect guess, the app reveals an additional clue about the cuber’s profile. The objective is to guess the person before the entire profile is exposed—if not, the game ends in defeat. Although the interface is intentionally simple, the underlying challenge appeals to fans familiar with the competitive Rubik’s Cube scene.",
            "wcaquiz_desc_3" : "WCAQuiz offers multiple game modes, allowing users to filter cubers by region (Italy, Europe, Africa, worldwide) and select difficulty levels. This makes the game accessible to both newcomers and experienced players, adding versatility and replayability to the experience.",
            "wcaquiz_desc_4" : "To gather data, the app relies on Robin Ingelbrecht’s WCA REST API, providing fast and reliable access to official cubing profiles. The backend is built with Laravel, which handles session management, game logic, and routing with precision and stability. The implementation highlights Laravel’s strengths in building interactive web applications.",
            "wcaquiz_desc_5" : "WCAQuiz is a successful gamification exercise based on real-world data. It demonstrates how structured information can be transformed into an educational and engaging tool. The project combines technical curiosity, a passion for puzzles, and thoughtful design to deliver something both niche and surprisingly fun.",
        
            "vestiti_desc_1" : "Vestiti Matti-a was the first structured project I tackled during Hackademy, developed in collaboration with three fellow students: Sofia Vidotto, Gabriele Digiorgio, and Lorenzo Martini. It marked a turning point from basic HTML exercises to a more complete approach to front-end development, combining design and interactivity.",
            "vestiti_desc_2" : "We started from a Figma layout and faithfully reproduced the design, building a playful e-commerce concept to showcase a fictional collection of clothing and accessories. The project features a catalog section where users can browse items, filter by category, or search by name.",
            "vestiti_desc_3" : "The entire site was developed using vanilla technologies (HTML, CSS, JavaScript), with Bootstrap included for responsive design and some lightweight JS animations to enhance the user experience. By avoiding complex frameworks, we focused on mastering the essentials of front-end architecture.",
            "vestiti_desc_4" : "This was my first real dive into modern UI development—learning to work with the DOM, understanding layout composition, and organizing a multi-section page with purposeful structure. It helped me shift from theory to practice in a way that felt tangible and rewarding.",
            "vestiti_desc_5" : "Vestiti Matti-a stands as more than just a school project: it's the result of a creative spark shared among peers, where teamwork and curiosity came together to produce something functional, clean, and genuinely fun to build.",
        
            "contacts" : "Contacts",
            "download_cv" : "Download CV",
            "write_email" : "Send email",
            "mail_href" : "mailto:giovanni.tramontano.gt@gmail.com?subject=Contact%20request&body=Hello%20Giovanni,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20contact%20you...",
            "instagram_text" : "Where I share my life and hobbies",
            "instagram_follow" : "Follow me",
            "linkedin_text" : "Where you can find my professional career and skills",
            "linkedin_follow" : "Connect with me",
            "whatsapp_text" : "Where you can write me and ask me information",
            "whatsapp_follow" : "Message me",
            "github_text" : "Where I share my projects and code",
            "github_follow" : "Follow me",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "it",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;