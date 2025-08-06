import { useTranslation } from "react-i18next";
import Flag from "react-world-flags"
import { useContext, useEffect, useRef, useState } from "react";
import i18next from "i18next";

import LangContext from "./context/LangContext";
import GooeyNav from "./reactbits-components/GooeyNav";

function Navbar (){
    const { lang, setLang } = useContext(LangContext);
    const { t } = useTranslation();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const changeLanguage = (code) => {
        setLang(code);
        i18next.changeLanguage(code, (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            t(code);
            setDropdownOpen(false);
        });
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const items = [
        {
            label: t("navbar_home"),
            href: "#home",
        },
        {
            label: t("navbar_about"),
            href: "#about",
        },
        {
            label: t("navbar_projects"),
            href: "#projects",
        },
        {
            label: t("navbar_contact"),
            href: "#contact",
        },
    ]
    return (
        <nav className="fixed lg:top-10 top-3 left-1/2 transform -translate-x-1/2 lg:w-6/12 w-11/12 lg:rounded-full rounded-xl outline-1 outline-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5 py-3 px-3 font-commit gap-2 z-2 text-[0.53rem] md:text-base lg:text-lg select-none">
            <GooeyNav
                items={items}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
            <div ref={dropdownRef} className="relative cursor-pointer">
                <div tabIndex={0} role="button" className="flex items-center gap-1 uppercase" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                    <Flag code={lang} height="30" width="24"/> <span className="hidden lg:inline">{lang}</span>
                </div>
                {isDropdownOpen && 
                <ul tabIndex={0} className="absolute mt-2 bg-white/10 backdrop-blur rounded-box z-1 w-35 p-2 shadow-sm">
                    <li className="lg:text-base text-xs" onClick={() => changeLanguage("it")}><a className="flex items-center gap-2 hover:bg-white/20 transition duration-300 p-1"><Flag code="IT" height="30" width="24"/> IT</a></li>
                    <li className="lg:text-base text-xs" onClick={() => changeLanguage("us")}><a className="flex items-center gap-2 hover:bg-white/20 transition duration-300 p-1"><Flag code="US" height="30" width="24"/> US</a></li>
                </ul>
                } 
            </div>
        </nav>
    )
}

export default Navbar