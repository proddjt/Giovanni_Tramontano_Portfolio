import { useState } from "react";
import { useTranslation } from "react-i18next";
import CloseBtn from "./CloseBtn";
import ModalLinkBtn from "./ModalLinkBtn";
import ModalSwiper from "./ModalSwiper";
import ModalSwiperModeBtn from "./ModalSwiperModeBtn";
function Modal ({name = ""}){
    const { t } = useTranslation();
    const [galleryMode, setGalleryMode] = useState("desktop");
    const projects = [
        {
            name: "Lootly",
            has_mobile: true,
            desktop_gallery: ["lootlydesk1", "lootlydesk2", "lootlydesk3", "lootlydesk4", "lootlydesk5", "lootlydesk6", "lootlydesk7"],
            mobile_gallery: ["lootlymob1", "lootlymob2", "lootlymob3", "lootlymob4", "lootlymob5", "lootlymob6"],
            is_online: true,
            link: "https://lootly.vercel.app",
            desc_name: "lootly_desc",
        },
        {
            name: "GTimer",
            has_mobile: false,
            desktop_gallery: [""],
            mobile_gallery: [],
            is_online: false,
            link: "https://github.com/proddjt/GTimer_project",
            desc_name: "gtimer_desc",
        },
        {
            name: "JPTattoo",
            has_mobile: true,
            desktop_gallery: [""],
            mobile_gallery: [""],
            is_online: false,
            link: "",
            desc_name: "jptattoo_desc",
        },
        {
            name: "Presto by SudHub",
            has_mobile: true,
            desktop_gallery: [""],
            mobile_gallery: [""],
            is_online: false,
            link: "",
            desc_name: "presto_desc",
        },
        {
            name: "GennAIrino",
            has_mobile: false,
            desktop_gallery: [""],
            mobile_gallery: [],
            is_online: false,
            link: "",
            desc_name: "gennairino_desc",
        },
        {
            name: "Vestiti Matti-a",
            has_mobile: true,
            desktop_gallery: [""],
            mobile_gallery: [""],
            is_online: false,
            link: "",
            desc_name: "vestiti_desc",
        },
        {
            name: "WCAQuiz",
            has_mobile: false,
            desktop_gallery: [""],
            mobile_gallery: [],
            is_online: false,
            link: "https://github.com/proddjt/WCAQuiz",
            desc_name: "wcaquiz_desc",
        },
    ]


    const project = projects.find((project) => project.name === name)

    return (
        <dialog id="project_modal" className="modal">
            <div className="modal-box bg-black rounded-lg w-11/12 lg:max-w-5xl max-w-2xl">
                <h3 className="font-bold text-4xl text-center lg:text-7xl font-thunder uppercase pb-4">{project.name}</h3>
                <p className="py-2 text-start font-commit">{t(project.desc_name+"_1")}</p>
                <div className="pt-2 flex justify-end">
                    { project.has_mobile && <ModalSwiperModeBtn setGalleryMode={setGalleryMode} galleryMode={galleryMode}/>}
                </div>
                { galleryMode === "desktop" ? <ModalSwiper images={project.desktop_gallery} /> : <ModalSwiper images={project.mobile_gallery} /> }
                <p className="py-2 text-end font-commit">{t(project.desc_name+"_2")}</p>
                <p className="py-2 text-start font-commit">{t(project.desc_name+"_3")}</p>
                <p className="py-2 text-end font-commit">{t(project.desc_name+"_4")}</p>
                <p className="py-2 text-start font-commit">{t(project.desc_name+"_5")}</p>
                <div className="py-4 flex justify-center">
                    {project.is_online ? <ModalLinkBtn text={t("online")} link={project.link} /> : <ModalLinkBtn text={t("repo")} link={project.link} />}
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <CloseBtn />
                    </form>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default Modal