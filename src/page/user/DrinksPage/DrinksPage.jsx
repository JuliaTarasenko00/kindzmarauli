import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loading } from '../../../redux/selector';
import { useRequestDataSpecifics } from '../../../helpers/hooks/useRequestDataSpecifics';
import { useSpecificsFilter } from '../../../helpers/hooks/useSpecificsFilter';
import { specificsDish } from '../../../helpers/specifics_dish';
import { RenderUserComponent } from '../../../components/user/RenderUserComponent';
import { LoaderForPage } from '../../../components/LoaderForPage';

const DrinksPage = () => {
  const isLoading = useSelector(loading);
  const { pathname } = useLocation();

  const { value } = useRequestDataSpecifics(pathname, specificsDish.DRINKS);

  const alcoholicCocktails = useSpecificsFilter(value.ALCOHOLICCOCKTAILS);

  const nonAlcoholicCocktails = useSpecificsFilter(value.NONALCOHOLICCOCKTAILS);

  const hotDrinks = useSpecificsFilter(value.HOTDRINKS);

  const options = [
    { title: 'Alcoholic Cocktails', specifics: alcoholicCocktails },
    { title: 'Non Alcoholic Cocktails', specifics: nonAlcoholicCocktails },
    { title: 'Hot Drinks', specifics: hotDrinks },
  ];

  return (
    <>
      {isLoading && <LoaderForPage />}
      {!isLoading && (
        <>
          {options.map(({ title, specifics }) => (
            <section style={{ padding: '20px 0' }} key={title}>
              <RenderUserComponent title={title} specifics={specifics} />
            </section>
          ))}
        </>
      )}
    </>
  );
};

export default DrinksPage;
