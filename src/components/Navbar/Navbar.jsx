import './Navbar.scss';
import logo from '../../assets/logo__cyberpank.png';
import { icons } from '../../assets';

export const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="navbar__logoSection">
        <img src={logo} alt="" />
      </div>
      <ul className="navbar__iconsSection">
        {icons.map((el, i) => {
          return (
            <li key={`${el.name}_${i}`}>
              <a href="javascript:void(0)">
                <img src={el.src} alt={el.name} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
