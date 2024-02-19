import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSpecificsDishes } from '../../../redux/dishes/operation';
import { loading, specificsDishes } from '../../../redux/selector';
import { specificsDish } from '../../../helpers/specifics_dish';
import { Section } from './Appetizer.styled';
import { CreatedMarkup } from '../../../components/user/CreatedMarkup/CreatedMarkup';
import { Loader } from '../../../components/Loader/Loader';

const AppetizerPage = () => {
  const specifics = useSelector(specificsDishes);
  const isLoading = useSelector(loading);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const name = useMemo(() => pathname.split('/'), [pathname]);
  const { value } = specificsDish.APPETIZER;

  useEffect(() => {
    dispatch(getSpecificsDishes(name[1]));
  }, [name, dispatch]);

  const salad = useMemo(
    () =>
      specifics.filter(
        (dish) => Object.values(dish.specificsDish).join(' ') === value.SALAD,
      ),
    [specifics, value],
  );

  const hotSnack = useMemo(
    () =>
      specifics.filter(
        (dish) =>
          Object.values(dish.specificsDish).join(' ') === value.HOTSNACK,
      ),
    [specifics, value],
  );

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Section>
            <CreatedMarkup titleDishes={'Salads'} dishes={salad} />
          </Section>
          <Section>
            <CreatedMarkup titleDishes={'Hot Appetizers'} dishes={hotSnack} />
          </Section>
        </>
      )}
    </>
  );
};

export default AppetizerPage;
