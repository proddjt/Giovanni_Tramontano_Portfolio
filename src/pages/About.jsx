import { useTranslation } from "react-i18next";

import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaPhp, FaLaravel, FaSpotify } from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { DiSqllite } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

function About (){
    const { t } = useTranslation();
    return (
        <div className="md:px-30 px-5 py-30 text-center z-1" id="about">
            <div className="md:min-h-screen flex flex-col justify-center items-center md:gap-80 gap-30 overflow-y-auto">
                <div className="flex justify-center items-center flex-col gap-10 md:min-h-screen">
                    <div className="font-thunder md:text-8xl text-6xl font-bold uppercase">{t("who")}</div>
                    <div className="text-lg md:text-3xl font-commit">{t("who_text")}</div>
                </div>
                <div className="flex justify-center items-center flex-col gap-10 lg:h-screen">
                    <div className="font-thunder md:text-8xl text-5xl font-bold uppercase">{t("tecnologies")}</div>
                    <div className="text-lg md:text-3xl font-commit">{t("tecnologies_text")}</div>
                    <div className="mt-6 text-center">
                        <h2 className="text-5xl uppercase font-thunder font-semibold mb-6">{t("technologies_utilized")}</h2>
                        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 gap-y-10">
                            <a className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300 tooltip tooltip-bottom" data-tip={t("see_more")} href="https://html.spec.whatwg.org/multipage/" target="_blank">
                                <FaHtml5 className="text-4xl m-0 text-orange-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">HTML</span>
                            </a>
                            <a className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300 tooltip tooltip-bottom" data-tip={t("see_more")} href="https://www.w3.org/TR/css/" target="_blank">
                                <FaCss3 className="text-4xl m-0 text-blue-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">CSS</span>
                            </a>
                            <a className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300 tooltip tooltip-bottom" data-tip={t("see_more")} href="https://getbootstrap.com/" target="_blank">
                                <FaBootstrap className="text-4xl m-0 text-purple-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">Bootstrap</span>
                            </a>
                            <a className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300 tooltip tooltip-bottom" data-tip={t("see_more")} href="https://tailwindcss.com/" target="_blank">
                                <RiTailwindCssFill className="text-4xl m-0 text-sky-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">Tailwind</span>
                            </a>
                            <a className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300 tooltip tooltip-bottom" data-tip={t("see_more")} href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                                <RiJavascriptFill className="text-4xl m-0 text-yellow-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">JavaScript</span>
                            </a>
                            <a className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300 tooltip tooltip-bottom" data-tip={t("see_more")} href="https://www.typescriptlang.org/" target="_blank">
                                <SiTypescript className="text-4xl m-0 text-blue-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">Typescript</span>
                            </a>
                            <a className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300 tooltip tooltip-bottom" data-tip={t("see_more")} href="https://react.dev/" target="_blank">
                                <FaReact className="text-4xl m-0 text-cyan-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">React.js</span>
                            </a>
                            <a className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300 tooltip tooltip-bottom" data-tip={t("see_more")} href="https://nextjs.org/" target="_blank">
                                <RiNextjsFill className="text-4xl m-0 text-black"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">Next.js</span>
                            </a>
                            <a className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300 tooltip tooltip-bottom" data-tip={t("see_more")} href="https://www.php.net/" target="_blank">
                                <FaPhp className="text-4xl m-0 text-violet-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">PHP</span>
                            </a>
                            <a className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300 tooltip tooltip-bottom" data-tip={t("see_more")} href="https://laravel.com/" target="_blank">
                                <FaLaravel className="text-4xl m-0 text-red-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">Laravel</span>
                            </a>
                            <a className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300 tooltip tooltip-bottom" data-tip={t("see_more")} href="https://www.mysql.com/" target="_blank">
                                <TbBrandMysql className="text-4xl m-0 text-blue-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">MySQL</span>
                            </a>
                            <a className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300 tooltip tooltip-bottom" data-tip={t("see_more")} href="https://sqlite.org/" target="_blank">
                                <DiSqllite className="text-4xl m-0 text-green-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">SQLite</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col gap-10 lg:h-screen">
                    <div className="font-thunder md:text-8xl text-5xl font-bold uppercase">{t("passion")}</div>
                    <div className="text-md md:text-3xl font-commit">{t("passion_text")}</div>
                    <div className="grid grid-cols-2 gap-8">
                            <a className="flex md:flex-row flex-col items-center justify-center space-x-2 gap-3 bg-white/10 rounded-sm py-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300" href="https://www.worldcubeassociation.org/persons/2013TRAM03" target="_blank">
                                <img src="/media/img/wca.png" alt="" className="md:w-1/10 w-1/6"/>
                                <span className="font-commit md:text-2xl text-base">{t("wca")}</span>
                            </a>
                            <a className="flex md:flex-row flex-col items-center justify-center space-x-2 gap-3 bg-white/10 rounded-sm py-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300" href="https://open.spotify.com/intl-it/artist/5YwukRXliqHCDC1sZBQSrl?si=aHnYJR6NS7mEEAIiEoo1FA" target="_blank">
                                <FaSpotify className="md:text-5xl text-2xl m-0 text-green-500"/>
                                <span className="font-commit md:text-2xl text-base">{t("spotify")}</span>
                            </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About