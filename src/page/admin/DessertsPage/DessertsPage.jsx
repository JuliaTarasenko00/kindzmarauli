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

  const options = [
    {
      title: 'Ice-cream',
      dataSpecifics: iceCream,
      valueSpecifics: value.ICECREAM,
    },
    {
      title: 'Cake',
      dataSpecifics: cake,
      valueSpecifics: value.CAKE,
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

export default DessertsPage;
