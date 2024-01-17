import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { GrilledDishesSection } from '../../components/GrilledDishes/GrilledDishes';
import { KhinkaliSection } from '../../components/Khinkali/Khinkali';
import { MainDishesSection } from '../../components/MainDishes/MainDishes';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMenu } from '../../redux/dishes/operation';
import { specificsDish } from '../../helpers/specifics_dish';
import { Section } from './HotDishesPage.styled';
import { loading } from '../../redux/selector';
import { Loader } from '../../components/Loader/Loader';

const HotDishes = () => {
  const isLoading = useSelector(loading);
  const mainRef = useRef(null);
  const grilledRef = useRef(null);
  const khinkaliRef = useRef(null);
  const { hash } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    switch (hash) {
      case `#${specificsDish.MAIN}`:
        return mainRef.current?.scrollIntoView({ behavior: 'smooth' });

      case `#${specificsDish.GRILLED}`:
        return grilledRef.current?.scrollIntoView({ behavior: 'smooth' });

      case `#${specificsDish.KHINKALI}`:
        return khinkaliRef.current?.scrollIntoView({ behavior: 'smooth' });

      default:
        return;
    }
  }, [hash]);

  useEffect(() => {
    dispatch(getAllMenu());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Section ref={mainRef}>
            <MainDishesSection />
          </Section>
          <Section ref={grilledRef}>
            <GrilledDishesSection />
          </Section>
          <Section ref={khinkaliRef}>
            <KhinkaliSection />
          </Section>
        </>
      )}
    </>
  );
};

export default HotDishes;
