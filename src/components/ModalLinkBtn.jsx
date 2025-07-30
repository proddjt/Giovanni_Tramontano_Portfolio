import styles from '../css/ModalLinkBtn.module.css'

const ModalLinkBtn = ({text, link}) => {
  return (
    <a href={link} target="_blank">
        <button className={styles.btn17}>
            <span className={styles.textContainer}>
                <span className={styles.text}>{text}</span>
            </span>
        </button>
    </a>
  );
}

export default ModalLinkBtn;
