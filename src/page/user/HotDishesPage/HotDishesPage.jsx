import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loading } from '../../../redux/selector';
import { useSpecificsFilter } from '../../../helpers/hooks/useSpecificsFilter';
import { useRequestDataSpecifics } from '../../../helpers/hooks/useRequestDataSpecifics';
import { specificsDish } from '../../../helpers/specifics_dish';
import { RenderUserComponent } from '../../../components/user/RenderUserComponent';
import { Loader } from '../../../components/Loader/Loader';

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

  const options = [
    { title: 'Main Dishes', specifics: mainDishes, ref: mainRef },
    { title: 'Grill Dishes', specifics: grill, ref: grilledRef },
    { title: 'Khinkali', specifics: khinkali, ref: khinkaliRef },
  ];

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {options.map(({ title, specifics, ref }) => (
            <section style={{ padding: '20px 0' }} key={title} ref={ref}>
              <RenderUserComponent title={title} specifics={specifics} />
            </section>
          ))}
        </>
      )}
    </>
  );
};

export default HotDishes;
