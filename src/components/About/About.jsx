import { aboutImages } from '../../assets';
import './About.scss';
export const About = () => {
  return (
    <div className="about container">
      <div className="about__infoSection">
        <h2 className="about__subHeader">Найт-Сити изменит тебя навсегда!</h2>
        <p className="about__paragraph">
          <span>Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в
          мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты
          играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь
          менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где
          твои поступки влияют на ход сюжета и всё, что тебя окружает.
        </p>
      </div>
      <div className="about__imageSection">
        <div className="about__imageCouple">
          <img className="about__imageFirst" src={aboutImages[0].src} alt={aboutImages[0].name} />
          <img className="about__imageSecond" src={aboutImages[1].src} alt={aboutImages[1].name} />
        </div>
        <div className="about__imageSolo">
          <img src={aboutImages[2].src} alt={aboutImages[2].name} />
        </div>
      </div>
    </div>
  );
};
