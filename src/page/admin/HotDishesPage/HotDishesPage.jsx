import { useSelector } from 'react-redux';
import { loading } from '../../../redux/selector';
import { useLocation } from 'react-router-dom';
import { useRequestDataSpecifics } from '../../../helpers/useRequestDataSpecifics';
import { specificsDish } from '../../../helpers/specifics_dish';
import { useSpecificsFilter } from '../../../helpers/useSpecificsFilter';
import { LoaderForPage } from '../../../components/LoaderForPage';
import { MarkupComponent } from '../../../components/admin/MarkupComponent/MarkupComponent';
import { Container } from '../../../globalStyle';

const HotDishesPageAdmin = () => {
  const isLoading = useSelector(loading);
  const { pathname } = useLocation();

  const { value } = useRequestDataSpecifics(pathname, specificsDish.HOTDISHES);

  const grill = useSpecificsFilter(value.GRILLED);

  const mainDishes = useSpecificsFilter(value.MAIN);

  const khinkali = useSpecificsFilter(value.KHINKALI);

  return (
    <>
      {isLoading && <LoaderForPage />}
      {!isLoading && (
        <>
          <section style={{ padding: '20px 0' }}>
            <Container>
              <MarkupComponent title={'Main Dishes'} list={grill} />
            </Container>
          </section>
          <section style={{ padding: '20px 0' }}>
            <Container>
              <MarkupComponent title={'Grilled Dishes'} list={mainDishes} />
            </Container>
          </section>
          <section style={{ padding: '20px 0' }}>
            <Container>
              <MarkupComponent title={'Khinkali'} list={khinkali} />
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default HotDishesPageAdmin;
