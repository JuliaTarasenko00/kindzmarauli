import { useSelector } from 'react-redux';
import { loading } from '../../../redux/selector';
import { useLocation } from 'react-router-dom';
import { useRequestDataSpecifics } from '../../../helpers/useRequestDataSpecifics';
import { specificsDish } from '../../../helpers/specifics_dish';
import { useSpecificsFilter } from '../../../helpers/useSpecificsFilter';
import { LoaderForPage } from '../../../components/LoaderForPage';
import { MarkupComponent } from '../../../components/admin/MarkupComponent/MarkupComponent';
import { Container } from '../../../globalStyle';

const AppetizerPage = () => {
  const isLoading = useSelector(loading);
  const { pathname } = useLocation();

  const { value } = useRequestDataSpecifics(pathname, specificsDish.APPETIZER);

  const salad = useSpecificsFilter(value.SALAD);

  const hotSnack = useSpecificsFilter(value.HOTSNACK);

  return (
    <>
      {isLoading && <LoaderForPage />}
      {!isLoading && (
        <>
          <section style={{ padding: '20px 0' }}>
            <Container>
              <MarkupComponent title={'Salads'} list={salad} />
            </Container>
          </section>
          <section style={{ padding: '20px 0' }}>
            <Container>
              <MarkupComponent title={'Hot Appetizers'} list={hotSnack} />
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default AppetizerPage;
