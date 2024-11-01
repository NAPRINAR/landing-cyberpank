import { gamesImages } from '../../assets';
import gamesBorder from '../../assets/images/border__games.png';
import './Games.scss';
export const Games = () => {
  const { saleIcon, playstation, xbox, layerAqua, layerYellow } = gamesImages;
  return (
    <>
      <div className="games__border">
        <img src={gamesBorder} alt="games__border" />
      </div>
      <div className="games">
        <div className="games__wrapper container">
          <div className="games__headerSection">
            <div className="games__header">
              <img src={saleIcon.src} alt={saleIcon.name} className="games__saleIcon" />
              <h2 className="games__headerText">Играй и выигрывай!</h2>
            </div>
            <p className="games__desc">
              Играй в <span>Cyberpunk 2077</span> и получи возможность выиграть консоль{' '}
              <span>Xbox Series X </span> или <span>Sony PlayStation 5!</span> Заполни форму ниже и
              приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи!{' '}
              {';)'}
            </p>
          </div>
          <div className="games__contentSection">
            <div className="games__form">
              <div className="games__formInputs">
                <input type="text" placeholder="Как тебя зовут?" />
                <input type="email" placeholder="Твой e-mail" />
              </div>

              <div className="games__dragonDrop">
                <p>Прикрепить скриншот</p>
                <p>.png / .jpg / .pdf</p>
              </div>
              <button className="games__button">Отправить</button>

              <div className="games__checkSection">
                <input type="checkbox" value="asas" />
                <span style={{ color: '#fff' }}>Согласен на обработку персональных данных</span>
              </div>
            </div>
            <div className="games__images">
              <div className="games__xbox">
                <img src={xbox.src} alt="xbox" />
              </div>
              <div className="games__playStation">
                <img src={playstation.src} alt="playstation" />
              </div>
            </div>
          </div>
        </div>
        <div className="games__layerYellow">
          <img src={layerYellow.src} alt="" />
        </div>
        <div className="games__layerBlue">
          <img src={layerAqua.src} alt="" />
        </div>
      </div>
    </>
  );
};
