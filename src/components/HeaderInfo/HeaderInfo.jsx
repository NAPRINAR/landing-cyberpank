import './HeaderInfo.scss';

export const HeaderInfo = () => {
  return (
    <div className="headerInfo">
      <div className="headerInfo__wrapper">
        <div className="headerInfo__item">
          <h1 className="headerInfo__headText">
            Доступно на
            <br /> всех платформах
          </h1>
          <div className="headerInfo__buttonSection">
            <button className="headerInfo__button">Узнать больше</button>
          </div>
        </div>
      </div>
    </div>
  );
};
