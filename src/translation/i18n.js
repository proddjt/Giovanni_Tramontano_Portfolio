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
            "tecnologies_text" : "Nel mio percorso formativo ho approfondito diverse tecnologie, tra cui HTML, CSS, Bootstrap, Tailwind CSS, JavaScript e React.js per lo sviluppo front-end. Per il back-end ho lavorato con PHP, Laravel e SQLite. Queste competenze mi permettono di gestire l’intero ciclo di sviluppo di un'applicazione, dall’interfaccia utente alla logica lato server. Inoltre, ho familiarità con Adobe Photoshop e Figma, strumenti che utilizzo per progettare grafiche ed interfacce personalizzate e curare ancora meglio la parte grafica dei miei progetti.",
            "technologies_utilized" : "Tecnologie utilizzate",
            "passion" : "Altri hobby e passioni",
            "passion_text" : "Oltre alla passione per l’informatica e lo sviluppo web, coltivo da anni interessi in ambiti molto diversi tra loro. Sono uno speedcuber professionista: pratico lo speedcubing, ovvero la risoluzione di cubi di Rubik e simili nel minor tempo possibile, disciplina in cui partecipo attivamente a gare ufficiali e ambisco a diventare delegato WCA per l’Italia. Produco musica da quasi dieci anni, con progetti pubblicati sia in formato digitale che fisico. Mi dedico inoltre al video editing, realizzando occasionalmente spot per eventi e produzioni private.",
            "wca" : "Profilo WCA",
            "spotify" : "Profilo Spotify",

            "my_projects" : "I miei progetti",
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
            "tecnologies_text" : "During my learning journey I explored various technologies, which are HTML, CSS, Bootstrap, Tailwind CSS, JavaScript and React.js for front-end developement. For the back-end I worked with PHP, Laravel e SQLite. These skills allow me to manage the whole developement cycle of an application, from the user interface to the server-side logic. In addition, I have familiarity with Adobe Photoshop and Figma, tools that I use to design custom graphics and interfaces and care even better for the graphic part of my projects.",
            "technologies_utilized" : "Technologies used",
            "passion" : "More hobbies and things I love",
            "passion_text" : "As well as my passion for IT and developement, I've been into a lot of other things for year. I'm a professional speedcuber: I practice speedcubing, that is about solving Rubik's Cube and similars in the shortest time possible, where I'm quite active into official competitions and where I'm aspiring to become a WCA delegate for Italy. I produce music for almost 10 years, with published works both in digital and physical format. I also dedicate myself to video editing, making occasional spots for events and private productions.",
            "wca" : "WCA profile",
            "spotify" : "Spotify profile",

            "my_projects" : "My projects",
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