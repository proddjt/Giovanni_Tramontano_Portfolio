import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CloseBtn from "./CloseBtn";
import ModalLinkBtn from "./ModalLinkBtn";
import ModalSwiper from "./ModalSwiper";
import ModalSwiperModeBtn from "./ModalSwiperModeBtn";
function Modal ({name = ""}){
    const { t } = useTranslation();
    const [galleryDeskMode, setGalleryDeskMode] = useState(true);
    const [resetTrigger, setResetTrigger] = useState(true);
    const projects = [
        {
            name: "WCAQuiz 2",
            has_mobile: true,
            gallery_folder: "wcaquiz2",
            desktop_gallery: ["wcaquiz2desk1", "wcaquiz2desk2", "wcaquiz2desk3", "wcaquiz2desk4", "wcaquiz2desk5"],
            mobile_gallery: ["wcaquiz2mob1", "wcaquiz2mob2", "wcaquiz2mob3", "wcaquiz2mob4", "wcaquiz2mob5"],
            is_online: true,
            link: "https://wcaquiz.vercel.app",
            desc_name: "wcaquiz2_desc",
        },
        {
            name: "Lootly",
            has_mobile: true,
            gallery_folder: "lootly",
            desktop_gallery: ["lootlydesk1", "lootlydesk2", "lootlydesk3", "lootlydesk4", "lootlydesk5", "lootlydesk6", "lootlydesk7"],
            mobile_gallery: ["lootlymob1", "lootlymob2", "lootlymob3", "lootlymob4", "lootlymob5", "lootlymob6"],
            is_online: true,
            link: "https://lootly.vercel.app",
            desc_name: "lootly_desc",
        },
        {
            name: "GTimer",
            has_mobile: false,
            gallery_folder: "gtimer",
            desktop_gallery: ["gtimerdesk1", "gtimerdesk2", "gtimerdesk3", "gtimerdesk4"],
            mobile_gallery: [""],
            is_online: false,
            link: "https://github.com/proddjt/GTimer_project",
            desc_name: "gtimer_desc",
        },
        {
            name: "JPTattoo",
            has_mobile: true,
            gallery_folder: "jptattoo",
            desktop_gallery: ["jptattoodesk1", "jptattoodesk2", "jptattoodesk3", "jptattoodesk4", "jptattoodesk5"],
            mobile_gallery: ["jptattoomob1", "jptattoomob2", "jptattoomob3", "jptattoomob4", "jptattoomob5"],
            is_online: false,
            link: "https://github.com/proddjt/JPTattoo",
            desc_name: "jptattoo_desc",
        },
        {
            name: "Presto by SudHub",
            has_mobile: true,
            gallery_folder: "presto",
            desktop_gallery: ["prestodesk1", "prestodesk2", "prestodesk3", "prestodesk4", "prestodesk5"],
            mobile_gallery: ["prestomob1", "prestomob2", "prestomob3", "prestomob4", "prestomob5", "prestomob6"],
            is_online: false,
            link: "https://github.com/proddjt/Presto_by_SudHub",
            desc_name: "presto_desc",
        },
        {
            name: "GennAIrino",
            has_mobile: false,
            gallery_folder: "gennairino",
            desktop_gallery: ["gennairinodesk1", "gennairinodesk2"],
            mobile_gallery: [""],
            is_online: false,
            link: "https://github.com/proddjt/GennAIrino",
            desc_name: "gennairino_desc",
        },
        {
            name: "Vestiti Matti-a",
            has_mobile: true,
            gallery_folder: "vestiti",
            desktop_gallery: ["vestitidesk1", "vestitidesk2", "vestitidesk3", "vestitidesk4"],
            mobile_gallery: ["vestitimob1", "vestitimob2", "vestitimob3"],
            is_online: false,
            link: "https://github.com/proddjt/Vestiti_Matti-a",
            desc_name: "vestiti_desc",
        },
        {
            name: "WCAQuiz",
            has_mobile: false,
            gallery_folder: "wcaquiz",
            desktop_gallery: ["wcaquizdesk1", "wcaquizdesk2", "wcaquizdesk3", "wcaquizdesk4", "wcaquizdesk5"],
            mobile_gallery: [""],
            is_online: false,
            link: "https://github.com/proddjt/WCAQuiz",
            desc_name: "wcaquiz_desc",
        },
    ]

    useEffect(() => {
        setGalleryDeskMode(true);
        setResetTrigger(!resetTrigger);
    }, [name])

    useEffect(() => {
        setResetTrigger(!resetTrigger);
    }, [galleryDeskMode])

    const project = projects.find((project) => project.name === name)

    return (
        <dialog id="project_modal" className="modal">
            <div className="modal-box bg-black rounded-lg w-11/12 lg:max-w-5xl max-w-2xl h-21/22">
                <h3 className="font-bold text-4xl text-center lg:text-7xl font-thunder uppercase pb-4">{project.name}</h3>
                <p className="py-2 text-start font-commit">{t(project.desc_name+"_1")}</p>
                <div className="py-1 flex justify-between items-center">
                    <p className="font-thunder uppercase text-3xl">{t("gallery")}</p>
                    { project.has_mobile && <ModalSwiperModeBtn setGalleryDeskMode={setGalleryDeskMode} galleryDeskMode={galleryDeskMode}/>}
                </div>
                { galleryDeskMode === true ? <ModalSwiper images={project.desktop_gallery} folder={project.gallery_folder} resetTrigger={resetTrigger}/> : <ModalSwiper images={project.mobile_gallery} folder={project.gallery_folder} resetTrigger={resetTrigger}/> }
                <p className="py-2 text-end font-commit">{t(project.desc_name+"_2")}</p>
                <p className="py-2 text-start font-commit">{t(project.desc_name+"_3")}</p>
                <p className="py-2 text-end font-commit">{t(project.desc_name+"_4")}</p>
                <p className="py-2 text-start font-commit">{t(project.desc_name+"_5")}</p>
                <div className="py-4 flex justify-center">
                    {project.is_online ? <ModalLinkBtn text={t("online")} link={project.link} /> : <ModalLinkBtn text={t("repo")} link={project.link} />}
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <CloseBtn/>
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