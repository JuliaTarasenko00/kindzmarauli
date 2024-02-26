import { useLocation } from 'react-router-dom';
import { loading } from '../../../redux/selector';
import { useSelector } from 'react-redux';
import { specificsDish } from '../../../helpers/specifics_dish';
import { useRequestDataSpecifics } from '../../../helpers/hooks/useRequestDataSpecifics';
import { useSpecificsFilter } from '../../../helpers/hooks/useSpecificsFilter';
import { LoaderForPage } from '../../../components/LoaderForPage';
import { Container } from '@mui/material';
import { RenderComponent } from '../../../components/admin/RenderComponent';

const DrinksPage = () => {
  const { pathname } = useLocation();
  const isLoading = useSelector(loading);

  const { value } = useRequestDataSpecifics(pathname, specificsDish.DRINKS);

  const alcoholicCocktails = useSpecificsFilter(value.ALCOHOLICCOCKTAILS);

  const nonAlcoholicCocktails = useSpecificsFilter(value.NONALCOHOLICCOCKTAILS);

  const hotDrinks = useSpecificsFilter(value.HOTDRINKS);

  return (
    <>
      {isLoading && <LoaderForPage />}
      {!isLoading && (
        <>
          <section style={{ padding: '20px 0' }}>
            <Container>
              <RenderComponent
                specifics={alcoholicCocktails}
                title={'Alcoholic Cocktails'}
              />
            </Container>
          </section>
          <section style={{ padding: '20px 0' }}>
            <Container>
              <RenderComponent
                specifics={nonAlcoholicCocktails}
                title={'Non Alcoholic Cocktails'}
              />
            </Container>
          </section>{' '}
          <section style={{ padding: '20px 0' }}>
            <Container>
              <RenderComponent specifics={hotDrinks} title={'Hot Drinks'} />
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default DrinksPage;
