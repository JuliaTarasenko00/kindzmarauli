import { useLocation } from 'react-router-dom';
import { useRequestDataSpecifics } from '../../../helpers/hooks/useRequestDataSpecifics';
import { specificsDish } from '../../../helpers/specifics_dish';
import { useSpecificsFilter } from '../../../helpers/hooks/useSpecificsFilter';
import { useSelector } from 'react-redux';
import { loading } from '../../../redux/selector';
import { Container } from '../../../globalStyle';
import { RenderComponent } from '../../../components/admin/RenderComponent';
import { LoaderForPage } from '../../../components/LoaderForPage';

const DessertsPage = () => {
  const { pathname } = useLocation();
  const isLoading = useSelector(loading);

  const { value } = useRequestDataSpecifics(pathname, specificsDish.DESSERT);

  const iceCream = useSpecificsFilter(value.ICECREAM);

  const cake = useSpecificsFilter(value.CAKE);

  return (
    <>
      {isLoading && <LoaderForPage />}
      {!isLoading && (
        <>
          <section style={{ padding: '20px 0' }}>
            <Container>
              <RenderComponent specifics={iceCream} title={'Ice-cream'} />
            </Container>
          </section>
          <section style={{ padding: '20px 0' }}>
            <Container>
              <RenderComponent specifics={cake} title={'Cake'} />
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default DessertsPage;
