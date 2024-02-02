import imageHot from '../../../assets/img/image_17.png';
import imageHotDishes from '../../../assets/img/image_18.png';
import imgSoups from '../../../assets/img/image_19.png';
import imgSoup from '../../../assets/img/image_20.png';
import imgKhinkali from '../../../assets/img/image_21.png';
import imgKhinkalis from '../../../assets/img/image_22.png';
import imgSalad from '../../../assets/img/image_23.png';
import imgSalads from '../../../assets/img/image_24.png';
import imgColdS from '../../../assets/img/image_25.png';
import imgCold from '../../../assets/img/image_26.png';
import { MenuSlider } from './components/MenuSlider';
import { MenuList } from './components/MenuList';

export const Menu = () => {
  const options = [
    { name: 'Discount', first: '20%', last: '30%' },
    {
      name: 'Hot Dishes',
      first: imageHotDishes,
      last: imageHot,
      navig: '/hot_dishes',
    },
    { name: 'Soups', first: imgSoup, last: imgSoups },
    { name: 'Khinkali', first: imgKhinkali, last: imgKhinkalis },
    { name: 'Cold Snacks', first: imgCold, last: imgColdS },
    { name: 'Salads', first: imgSalad, last: imgSalads },
  ];

  return (
    <>
      <MenuSlider options={options} />
      <MenuList options={options} />
    </>
  );
};
