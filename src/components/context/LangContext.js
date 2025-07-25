import { createContext } from "react";

const LangContext = createContext({
    lang: "",
    setLang: () => {}
});

export default LangContext