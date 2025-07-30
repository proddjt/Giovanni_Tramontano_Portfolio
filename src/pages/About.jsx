import { useTranslation } from "react-i18next";

import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaPhp, FaLaravel, FaSpotify } from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { DiSqllite } from "react-icons/di";

function About (){
    const { t } = useTranslation();
    return (
        <div className="md:px-30 px-5 py-30 text-center z-1" id="about">
            <div className="md:min-h-screen flex flex-col justify-center items-center md:gap-80 gap-30 overflow-y-auto">
                <div className="flex justify-center items-center flex-col gap-10 md:min-h-screen">
                    <div className="font-thunder md:text-8xl text-5xl font-bold uppercase">{t("who")}</div>
                    <div className="text-lg md:text-3xl font-commit">{t("who_text")}</div>
                </div>
                <div className="flex justify-center items-center flex-col gap-10 lg:h-screen">
                    <div className="font-thunder md:text-8xl text-5xl font-bold uppercase">{t("tecnologies")}</div>
                    <div className="text-lg md:text-3xl font-commit">{t("tecnologies_text")}</div>
                    <div className="mt-6 text-center">
                        <h2 className="text-5xl uppercase font-thunder font-semibold mb-4">{t("technologies_utilized")}</h2>
                        <div className="grid grid-cols-3 lg:grid-cols-9 gap-4">
                            <div className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300">
                                <FaHtml5 className="text-4xl m-0 text-orange-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">HTML</span>
                            </div>
                            <div className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300">
                                <FaCss3 className="text-4xl m-0 text-blue-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">CSS</span>
                            </div>
                            <div className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300">
                                <FaBootstrap className="text-4xl m-0 text-purple-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">Bootstrap</span>
                            </div>
                            <div className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300">
                                <RiTailwindCssFill className="text-4xl m-0 text-sky-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">Tailwind</span>
                            </div>
                            <div className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300">
                                <RiJavascriptFill className="text-4xl m-0 text-yellow-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">JavaScript</span>
                            </div>
                            <div className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300">
                                <FaReact className="text-4xl m-0 text-cyan-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">React.js</span>
                            </div>
                            <div className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300">
                                <DiSqllite className="text-4xl m-0 text-green-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">SQLite</span>
                            </div>
                            <div className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300">
                                <FaPhp className="text-4xl m-0 text-violet-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">PHP</span>
                            </div>
                            <div className="flex items-center justify-center flex-col space-x-2 bg-white/10 rounded-sm py-3 px-2 backdrop-blur-md outline-1 outline-white/20 hover:bg-white/20 transition duration-300">
                                <FaLaravel className="text-4xl m-0 text-red-500"/>
                                <span className="font-commit 2xl:text-2xl md:text-base text-md">Laravel</span>
                            </div>
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