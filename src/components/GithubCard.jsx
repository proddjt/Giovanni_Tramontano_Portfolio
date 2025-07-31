import styled from 'styled-components';
import { FaGithubSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const GitHubCard = () => {
    const { t } = useTranslation();
    
    return (
        <StyledWrapper>
        <a href="https://github.com/proddjt" target='_blank'>
            <div className="card font-commit floatBreeze border-2 border-[#24292e]">
                <div className="icon">
                    <FaGithubSquare className='text-5xl text-[#24292e]'/>
                </div>
                <strong> GitHub </strong>
                <div className="card__body">{t("github_text")}</div>
                <span>{t("github_follow")}</span>
            </div>
        </a>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
    --bg: #f7f7f8;
    --hover-bg: #e2e6e9;
    --hover-text: #24292e;
    width: 23ch;
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
  
  @keyframes floatBreeze {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }

  25% {
    transform: translate(-5px, -5px) rotate(-2deg);
  }

  50% {
    transform: translate(7px, 7px) rotate(2deg);
  }

  75% {
    transform: translate(-6px, 3px) rotate(-1deg);
  }

  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

.floatBreeze {
  animation: floatBreeze 6s ease-in-out infinite;
}
  `;

export default GitHubCard;
