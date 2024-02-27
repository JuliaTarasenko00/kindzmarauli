import { useSelector } from 'react-redux';
import { loading } from '../../../redux/selector';
import { useLocation } from 'react-router-dom';
import { useRequestDataSpecifics } from '../../../helpers/hooks/useRequestDataSpecifics';
import { specificsDish } from '../../../helpers/specifics_dish';
import { useSpecificsFilter } from '../../../helpers/hooks/useSpecificsFilter';
import { LoaderForPage } from '../../../components/LoaderForPage';
import { Container } from '../../../globalStyle';
import { RenderComponent } from '../../../components/admin/RenderComponent';

const HotDishesPageAdmin = () => {
  const isLoading = useSelector(loading);
  const { pathname } = useLocation();

  const { value } = useRequestDataSpecifics(pathname, specificsDish.HOTDISHES);

  const grill = useSpecificsFilter(value.GRILLED);

  const mainDishes = useSpecificsFilter(value.MAIN);

  const khinkali = useSpecificsFilter(value.KHINKALI);

  const options = [
    {
      title: 'Main Dishes',
      dataSpecifics: mainDishes,
      valueSpecifics: value.MAIN,
    },
    {
      title: 'Grill Dishes',
      dataSpecifics: grill,
      valueSpecifics: value.GRILLED,
    },
    {
      title: 'khinkali',
      dataSpecifics: khinkali,
      valueSpecifics: value.KHINKALI,
    },
  ];

  return (
    <>
      {isLoading && <LoaderForPage />}
      {!isLoading && (
        <>
          {options.map(({ title, dataSpecifics, valueSpecifics }) => (
            <section style={{ padding: '20px 0' }} key={valueSpecifics}>
              <Container>
                <RenderComponent
                  specifics={dataSpecifics}
                  title={title}
                  value={valueSpecifics}
                />
              </Container>
            </section>
          ))}
        </>
      )}
    </>
  );
};

export default HotDishesPageAdmin;
