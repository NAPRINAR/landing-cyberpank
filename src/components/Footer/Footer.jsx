import logoMain from '../../assets/logo__cyberpank.png';
import logoCD from '../../assets/logo__cdproject.png';
import './Footer.scss';
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper ">
        <div className="footer__main">
          <img src={logoMain} alt="mainLogo" />
          <img src={logoCD} alt="cdLogo" />
          <a href="#">Лицензия</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
        <div className="footer__subFooter">CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</div>
      </div>
    </div>
  );
};
