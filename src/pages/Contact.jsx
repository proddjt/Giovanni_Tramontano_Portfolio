import { useTranslation } from "react-i18next";
import ContactsCard from "../components/ContactsCard";

function Contact (){
    const { t } = useTranslation();
    return (
        <div id="contact" className="py-30 md:px-5 px-10 justify-center items-center flex-col">
            <h2 className="font-thunder md:text-8xl text-6xl font-bold uppercase text-center mb-15 z-1">{t("contacts")}</h2>
            <div className="flex justify-center">
                <ContactsCard />
            </div>
        </div>
    )
}

export default Contact