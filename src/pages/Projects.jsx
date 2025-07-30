import { useTranslation } from "react-i18next";

import '../css/embla.css'
import Carousel from "../components/Carousel";

const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Projects (){
    const { t } = useTranslation();
    return (
        <div id="projects" className="py-30 px-20 justify-center items-center flex-col">
            <div className="font-thunder md:text-8xl text-5xl font-bold uppercase text-center mb-30 z-1">{t("my_projects")}</div>
            <Carousel slides={SLIDES} options={OPTIONS} />
        </div>
    )
}

export default Projects