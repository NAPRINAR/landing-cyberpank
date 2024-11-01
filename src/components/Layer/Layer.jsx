import { Navbar } from '../Navbar/Navbar';
import './Layer.scss';
import backgroundOne from '../../assets/images/bg_1.jpg';
import backGroundTwo from '../../assets/images/bg_2.jpg';
import backGroundThree from '../../assets/images/bg_3.jpg';
import { useEffect, useState } from 'react';
import { HeaderInfo } from '../HeaderInfo/HeaderInfo';

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

const imagesArray = [backgroundOne, backGroundTwo, backGroundThree];

export const Layer = () => {
  const [bgImage, setBgImage] = useState(backgroundOne);
  useEffect(() => {
    const bgChange = setInterval(() => {
      setBgImage(imagesArray[getRandomNumber()]);
    }, 5000);

    return () => {
      clearInterval(bgChange);
    };
  }, []);

  return (
    <div className="Layer" style={{ backgroundImage: `url(${bgImage})` }}>
      <Navbar />
      <HeaderInfo />
    </div>
  );
};
