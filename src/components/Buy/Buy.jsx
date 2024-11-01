import { buyIcons } from '../../assets';
import './Buy.scss';
export const Buy = () => {
  return (
    <div className="buy">
      <div className="buy__wrapper ">
        <div className="buy__imgSection">
          <img src={buyIcons.buyImg.src} alt={buyIcons.buyImg.name} />
        </div>
        <div className="buy__contentSection">
          <h2 className="buy__headerText">Купить игру Cyberpunk 2077</h2>
          <div className="buy__complitation">
            <span>В комплект входит:</span>
            <ul className="buy__list">
              <li className="buy__listItem">
                <img src={buyIcons.diskIcon.src} alt={buyIcons.diskIcon.name} />
                <p>Футляр с игровыми дисками</p>
              </li>
              <li className="buy__listItem">
                <img src={buyIcons.blankIcon.src} alt={buyIcons.blankIcon.name} />
                <p>Футляр с кодом для загрузки игры и дисками {`(pc)`}</p>
              </li>
              <li className="buy__listItem">
                <img src={buyIcons.imgIcon.src} alt={buyIcons.imgIcon.name} />
                <p>Справочник с информацией об игровом мире</p>
              </li>
            </ul>
          </div>
          <div className="buy__platform">
            <span>Выберите платформу։</span>
            <div className="buy__platformIcons">
              <div className="buy__platformIconsSectionOne">
                <img src={buyIcons.pcIcon.src} alt={buyIcons.pcIcon.name} />
                <img src={buyIcons.xboxIcon.src} alt={buyIcons.xboxIcon.name} />
              </div>
              <div className="buy__platformIconsSectionTwo">
                <img src={buyIcons.stadiaIcon.src} alt={buyIcons.stadiaIcon.name} />
                <img src={buyIcons.ps4Icon.src} alt={buyIcons.ps4Icon.name} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
