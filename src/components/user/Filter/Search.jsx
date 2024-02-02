import { useSelector } from 'react-redux';
import { filterDish, loading } from '../../../redux/selector';
import { CreatedMarkup } from '../CreatedMarkup/CreatedMarkup';
import { FilterSection } from './FilterForm.styled';
import { Container } from '../../../globalStyle';

const Search = () => {
  const isLoading = useSelector(loading);

  const filteredProducts = useSelector(filterDish);

  return (
    <>
      <FilterSection>
        {isLoading && <p style={{ color: '#fff' }}>Loading...</p>}
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
