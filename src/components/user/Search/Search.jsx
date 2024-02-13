import { useSelector } from 'react-redux';
import { filterDish, loading } from '../../../redux/selector';
import { CreatedMarkup } from '../../../components/user/CreatedMarkup/CreatedMarkup';
import { FilterSection } from './Search.styled';
import { Container } from '../../../globalStyle';
import { Loader } from '../../../components/Loader/Loader';

const Search = () => {
  const isLoading = useSelector(loading);

  const filteredProducts = useSelector(filterDish);

  return (
    <>
      <FilterSection>
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            {filteredProducts.length === 0 && (
              <Container>
                <p>Not found</p>
              </Container>
            )}
            <CreatedMarkup dishes={filteredProducts} />
          </>
        )}
      </FilterSection>
    </>
  );
};

export default Search;
