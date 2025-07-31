import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import { FaSquareInstagram } from "react-icons/fa6";


const InstagramCard = () => {
    const { t } = useTranslation();
    
    return (
        <StyledWrapper>
        <a href="https://www.instagram.com/prod.djt/" target='_blank'>
            <div className="card font-commit floatReverse border-2 border-[#e4405f]">
                <div className="icon">
                    <FaSquareInstagram className='text-5xl text-[#e4405f]'/>  
                </div>
                <strong> Instagram </strong>
                <div className="card__body">{t("instagram_text")}</div>
                <span>{t("instagram_follow")}</span>
            </div>
        </a>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
    --bg: #f7f7f8;
    --hover-bg: #f9d2d9;
    --hover-text: #e4405f;
    max-width: 23ch;
    text-align: center;
    background: var(--bg);
    padding: 1.5em;
    padding-block: 1.8em;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    transition:
      0.3s cubic-bezier(0.6, 0.4, 0, 1),
      transform 0.15s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    color: black;
  }

  .card__body {
    color: #464853;
    line-height: 1.5em;
    font-size: 1em;
  }

  .card > :not(span) {
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1);
  }

  .card > strong {
    display: block;
    font-size: 1.4rem;
    letter-spacing: -0.035em;
  }

  .card span {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--hover-text);
    border-radius: 5px;
    font-weight: bold;
    top: 100%;
    transition: all 0.3s cubic-bezier(0.6, 0.4, 0, 1);
  }

  .card:hover span {
    top: 0;
    font-size: 1.2em;
  }

  .card:hover {
    background: var(--hover-bg);
  }

  .card:hover > div,
  .card:hover > strong {
    opacity: 0;
  }
  
  @keyframes floatReverse {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }

  20% {
    transform: translate(-6px, 6px) rotate(-1.5deg);
  }

  50% {
    transform: translate(5px, 9px) rotate(1deg);
  }

  80% {
    transform: translate(-4px, -7px) rotate(-0.5deg);
  }

  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

.floatReverse {
  animation: floatReverse 6s ease-in-out infinite;
}

  `;

export default InstagramCard;
