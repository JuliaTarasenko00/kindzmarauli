import { useSelector } from 'react-redux';
import { loading } from '../../../redux/selector';
import { useLocation } from 'react-router-dom';
import { useRequestDataSpecifics } from '../../../helpers/hooks/useRequestDataSpecifics';
import { specificsDish } from '../../../helpers/specifics_dish';
import { useSpecificsFilter } from '../../../helpers/hooks/useSpecificsFilter';
import { LoaderForPage } from '../../../components/LoaderForPage';
import { Container } from '../../../globalStyle';
import { RenderComponent } from '../../../components/admin/RenderComponent';

const AppetizerPage = () => {
  const isLoading = useSelector(loading);
  const { pathname } = useLocation();

  const { value } = useRequestDataSpecifics(pathname, specificsDish.APPETIZER);

  const salad = useSpecificsFilter(value.SALAD);

  const hotSnack = useSpecificsFilter(value.HOTSNACK);

  const options = [
    {
      title: 'Salads',
      dataSpecifics: salad,
      valueSpecifics: value.SALAD,
    },
    {
      title: 'Hot Appetizers',
      dataSpecifics: hotSnack,
      valueSpecifics: value.HOTSNACK,
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

export default AppetizerPage;
