import { useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { specificsDish } from '../../../helpers/specifics_dish';
import { Section } from './HotDishesPage.styled';
import { loading, specificsDishes } from '../../../redux/selector';
import { Loader } from '../../../components/Loader/Loader';
import { getSpecificsDishes } from '../../../redux/dishes/operation';
import { CreatedMarkup } from '../../../components/user/CreatedMarkup/CreatedMarkup';

const HotDishes = () => {
  const isLoading = useSelector(loading);
  const specifics = useSelector(specificsDishes);
  const mainRef = useRef(null);
  const grilledRef = useRef(null);
  const khinkaliRef = useRef(null);
  const { hash, pathname } = useLocation();
  const dispatch = useDispatch();

  const name = useMemo(() => pathname.split('/'), [pathname]);

  useEffect(() => {
    dispatch(getSpecificsDishes(name[1]));
  }, [name, dispatch]);

  const grill = useMemo(
    () =>
      specifics.filter(
        (dish) =>
          Object.values(dish.specificsDish).join(' ') === specificsDish.GRILLED,
      ),
    [specifics],
  );

  const mainDishes = useMemo(
    () =>
      specifics.filter(
        (dish) =>
          Object.values(dish.specificsDish).join(' ') === specificsDish.MAIN,
      ),
    [specifics],
  );

  const khinkali = useMemo(
    () =>
      specifics.filter(
        (dish) =>
          Object.values(dish.specificsDish).join(' ') ===
          specificsDish.KHINKALI,
      ),
    [specifics],
  );

  useEffect(() => {
    if (isLoading) return;

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
  }, [hash, isLoading]);

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
