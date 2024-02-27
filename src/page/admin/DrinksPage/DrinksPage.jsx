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

  const options = [
    {
      title: 'Alcoholic Cocktails',
      dataSpecifics: alcoholicCocktails,
      valueSpecifics: value.ALCOHOLICCOCKTAILS,
    },
    {
      title: 'Non Alcoholic Cocktails',
      dataSpecifics: nonAlcoholicCocktails,
      valueSpecifics: value.NONALCOHOLICCOCKTAILS,
    },
    {
      title: 'Hot Drinks',
      dataSpecifics: hotDrinks,
      valueSpecifics: value.HOTDRINKS,
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

export default DrinksPage;
