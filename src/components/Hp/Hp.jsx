import { hpIcons } from '../../assets';
import logo from '../../assets/logo__cyberpank.png';
import border from '../../assets/images/border__yellow.png';
import './Hp.scss';
export const Hp = () => {
  return (
    <>
      <div className="hp__border">
        <img src={border} alt="yellowBorder" />
      </div>

      <div className="hp">
        <div className="hp__wrapper container">
          <div className="hp__computerBlock">
            <div className="hp__computerImgWrapper">
              <img src={hpIcons.computer.src} alt={hpIcons.computer.name} />
            </div>
            <div className="hp__computerIconsWrapper">
              <img src={hpIcons.hp.src} alt={hpIcons.hp.name} />
              <img src={hpIcons.x.src} alt={hpIcons.x.name} />
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="hp__computerInfo">
            <div className="hp__computerHeader">
              <h2>Полное погружение вместе с HP</h2>
              <p>
                Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с
                диагональю 23,8 дюйма, созданном для отображения максимально насыщенных цветов.
                Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!
              </p>
            </div>
            <ul className="hp__computerIconsList">
              <li>
                <img src={hpIcons.paint.src} alt={hpIcons.paint.name} />
                <p>Яркие насыщенные цвета</p>
              </li>
              <li>
                <img src={hpIcons.shine.src} alt={hpIcons.shine.name} />
                <p>Кристальная четкость изображения</p>
              </li>
              <li>
                <img src={hpIcons.multiple.src} alt={hpIcons.multiple.name} />
                <p>Быстрые движения и плавный геймплей</p>
              </li>
            </ul>
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </>
  );
};
