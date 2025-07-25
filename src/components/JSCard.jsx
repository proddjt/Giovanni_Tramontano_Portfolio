import styles from '../css/JSCard.module.css'
import { useTranslation } from 'react-i18next';

function JSCard (){
    const { t } = useTranslation();

    const birthDate = new Date("2000-10-17");
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const isBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    const currentAge = isBirthdayPassed ? age : age - 1;
    return (
        <div id="card" className={`${styles.card} md:w-[300px] w-[200px] md:ms-0 ms-20`}>
            <div className={styles.content}>
                <div className={styles.cardBody}>
                <div className={`${styles.codeContainer} ${styles.floatAnimation}`}>
                    <span className={`${styles.line} md:text-[14px] text-[12px]`}><span className={styles.codeComment}>// {t("presentation_function")}</span></span>
                    <span className={`${styles.line} md:text-[14px] text-[12px]`}><span className={styles.codeKeyword}>function</span> <span className={styles.codeFunction}>presentation</span>{"()"}</span>
                    <span className={`${styles.line} md:text-[14px] text-[12px]`}>{"{"}</span>
                    <span className={`${styles.line} md:text-[14px] text-[12px] ${styles.indent}`}><span className={styles.codeKeyword}>const</span> <span className={styles.codeVariable}>name</span> {"="} <span className={styles.codeString}>"Giovanni"</span>{";"}</span>
                    <span className={`${styles.line} md:text-[14px] text-[12px] ${styles.indent}`}><span className={styles.codeKeyword}>const</span> <span className={styles.codeVariable}>surname</span> {"="} <span className={styles.codeString}>"Tramontano"</span>{";"}</span>
                    <span className={`${styles.line} md:text-[14px] text-[12px] ${styles.indent}`}><span className={styles.codeKeyword}>const</span> <span className={styles.codeVariable}>age</span> {"="} <span className={styles.codeString}>"{currentAge}"</span>{";"}</span>
                    <span className={`${styles.line} md:text-[14px] text-[12px] ${styles.indent}`}><span className={styles.codeKeyword}>const</span> <span className={styles.codeVariable}>qualification</span> {"="} <span className={styles.codeString}>"full-stack developer"</span>{";"}</span>
                    <span className={`${styles.line} md:text-[14px] text-[12px] ${styles.indent}`}>console.log(<span className={styles.codeString}>{`\`Ciao, sono \${name} \${surname}, ho \${age} anni e sono un \${qualification}\``}</span>);</span>
                    <span className={`${styles.line} md:text-[14px] text-[12px]`}>{"}"}</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default JSCard