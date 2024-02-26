import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Section } from './HotDishesPage.styled';
import { loading } from '../../../redux/selector';
import { Loader } from '../../../components/Loader/Loader';
import { CreatedMarkup } from '../../../components/user/CreatedMarkup/CreatedMarkup';
import { useSpecificsFilter } from '../../../helpers/hooks/useSpecificsFilter';
import { useRequestDataSpecifics } from '../../../helpers/hooks/useRequestDataSpecifics';
import { specificsDish } from '../../../helpers/specifics_dish';

const HotDishes = () => {
  const isLoading = useSelector(loading);
  const mainRef = useRef(null);
  const grilledRef = useRef(null);
  const khinkaliRef = useRef(null);
  const { hash, pathname } = useLocation();

  const { value } = useRequestDataSpecifics(pathname, specificsDish.HOTDISHES);

  const grill = useSpecificsFilter(value.GRILLED);

  const mainDishes = useSpecificsFilter(value.MAIN);

  const khinkali = useSpecificsFilter(value.KHINKALI);

  useEffect(() => {
    if (isLoading) return;

    switch (hash) {
      case `#${value.MAIN}`:
        return mainRef.current?.scrollIntoView({ behavior: 'smooth' });

      case `#${value.GRILLED}`:
        return grilledRef.current?.scrollIntoView({ behavior: 'smooth' });

      case `#${value.KHINKALI}`:
        return khinkaliRef.current?.scrollIntoView({ behavior: 'smooth' });

      default:
        return;
    }
  }, [hash, isLoading, value]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Section ref={mainRef}>
            <CreatedMarkup titleDishes={'Main Dishes'} dishes={mainDishes} />
          </Section>
          <Section ref={grilledRef}>
            <CreatedMarkup titleDishes={'Grilled Dishes'} dishes={grill} />
          </Section>
          <Section ref={khinkaliRef}>
            <CreatedMarkup titleDishes={'Khinkali'} dishes={khinkali} />
          </Section>
        </>
      )}
    </>
  );
};

export default HotDishes;
