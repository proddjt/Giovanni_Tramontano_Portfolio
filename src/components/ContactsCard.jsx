import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import { FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CVDropdown from './CVDropdown';

const ContactsCard = () => {
    const { t } = useTranslation();
  return (
    <StyledWrapper>
      <div className="card font-commit">
        <div className="card__img overflow-hidden"><img src="/media/img/card_bg.jpeg" alt="" className='w-full scale-400'/></div>
        <div className="card__avatar"><img src="/media/img/card_avatar.png" alt="" /></div>
        <div className="card__title">Giovanni Tramontano</div>
        <div className="card__subtitle">Full-stack development</div>
        <div className="card__wrapper flex justify-around gap-5">
            <CVDropdown/>
            <a href={t("mail_href")} target='_blank'>
                <button className="card__btn card__btn-solid flex justify-center items-center gap-1"><MdEmail /> {t("write_email")}</button>
            </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    --main-color: #000;
    --submain-color: #78858F;
    --bg-color: #fff;
    position: relative;
    width: 300px;
    height: 384px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background: var(--bg-color);
  }

  .card__img {
    height: 192px;
    width: 100%;
  }

  .card__img svg {
    height: 100%;
    border-radius: 20px 20px 0 0;
  }

  .card__avatar {
    position: absolute;
    width: 114px;
    height: 114px;
    background: var(--bg-color);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc(50% - 57px);
  }

  .card__avatar svg {
    width: 100px;
    height: 100px;
  }

  .card__title {
    margin-top: 60px;
    font-weight: 500;
    font-size: 18px;
    color: var(--main-color);
  }

  .card__subtitle {
    margin-top: 10px;
    font-weight: 400;
    font-size: 15px;
    color: var(--submain-color);
  }

  .card__btn {
    margin-top: 15px;
    width: 100px;
    height: 31px;
    border: 2px solid var(--main-color);
    border-radius: 4px;
    font-weight: 700;
    font-size: 11px;
    color: var(--main-color);
    background: var(--bg-color);
    text-transform: uppercase;
    transition: all 0.3s;
  }

  .card__btn-solid {
    background: var(--main-color);
    color: var(--bg-color);
  }

  .card__btn:hover {
    background: var(--main-color);
    color: var(--bg-color);
  }

  .card__btn-solid:hover {
    background: var(--bg-color);
    color: var(--main-color);
  }`;

export default ContactsCard;
