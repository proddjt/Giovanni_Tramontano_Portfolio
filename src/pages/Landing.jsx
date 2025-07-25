import { useTranslation } from 'react-i18next';

import JSCard from "../components/JSCard";
import TextType from "../components/reactbits-components/TextType"

import styles from '../css/Landing.module.css'
import ScrollBtn from '../components/ScrollBtn';
function Landing () {
    const { t } = useTranslation();
    return (
        <div className="md:h-screen min-h-screen flex md:justify-center justify-start items-center flex-col md:gap-5 gap-0 2xl:mt-0 mt-30" id="home">
            <TextType 
                text={[t("landing_page1"), t("landing_page2"), t("landing_page3")]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                cursorBlinkDuration={0.5}
                cursorClassName=""
                className="text-white uppercase font-thunder font-bold lg:text-8xl text-5xl lg:h-auto h-[6rem] lg:text-start text-center"
            />
            <div className="flex justify-center items-center md:flex-row flex-col md:gap-50 gap-10">
                <img src="/media/img/landing-img.png" alt="Immagine Giovanni Tramontano" className={`${styles.floatRandom} md:w-1/4 w-1/2 md:me-0 me-20`}/>
                <JSCard />
            </div>
            <ScrollBtn />
        </div>
    )
}

export default Landing