import { useTranslation } from "react-i18next";

import '../css/embla.css'
import Carousel from "../components/Carousel";

const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Projects (){
    const { t } = useTranslation();
    return (
        <div id="projects" className="py-30 md:px-5 px-10 justify-center items-center flex-col">
            <h2 className="font-thunder md:text-8xl text-5xl font-bold uppercase text-center mb-15 z-1">{t("my_projects")}</h2>
            <p className="text-lg xl:text-3xl font-commit text-center mb-30">{t("my_projects_text")}</p>
            <Carousel slides={SLIDES} options={OPTIONS} />
        </div>
    )
}

export default Projects