import { useTranslation } from "react-i18next";
import ContactsCard from "../components/ContactsCard";
import InstagramCard from "../components/InstagramCard";
import LinkedinCard from "../components/LinkedinCard";
import WhatsappCard from "../components/WhatsappCard";
import GitHubCard from "../components/GithubCard";

function Contact (){
    const { t } = useTranslation();
    return (
        <div id="contact" className="py-30 md:px-5 px-10 justify-center items-center flex-col min-h-screen">
            <h2 className="font-thunder md:text-8xl text-6xl font-bold uppercase text-center mb-15 z-1">{t("contacts")}</h2>
            <div className="flex justify-center items-center flex-col gap-25">
                <ContactsCard />
                <div className="flex justify-around items-center flex-col md:flex-row w-full md:gap-0 gap-10">
                    <InstagramCard />
                    <LinkedinCard />
                    <WhatsappCard />
                    <GitHubCard />
                </div>
            </div>
        </div>
    )
}

export default Contact