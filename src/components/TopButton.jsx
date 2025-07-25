import { useTranslation } from 'react-i18next';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import styles from '../css/TopButton.module.css'

function TopButton() {
    const { t } = useTranslation();

    const scrollToTop = () => {
        const smoother = ScrollSmoother.get();
        smoother?.scrollTo(0, true, "top top");
    };
    return (
        <div className='fixed bottom-10 right-10 z-2 font-commit'>
            <button className={`${styles.button} md:w-[50px] md:h-[50px] w-[30px] h-[30px]`} data-content={t("top_button")} onClick={scrollToTop}>
                <svg className={styles.svgIcon} viewBox="0 0 384 512">
                    <path
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>
        </div>
    )
}

export default TopButton

