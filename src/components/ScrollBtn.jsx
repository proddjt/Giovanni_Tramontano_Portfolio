import styles from '../css/ScrollBtn.module.css'
import { useTranslation } from 'react-i18next';

function ScrollBtn(){
    const { t } = useTranslation();
    return (
        <div className='pt-10'>
            <span className={styles.mouseBtn}>
                <span className={styles.mouseScroll}></span>
            </span>
            <span className='font-commit'>{t("scroll")}</span>
        </div>
    )
}

export default ScrollBtn