import { useSelector } from 'react-redux';
import { allDishes, filterDish, loading } from '../../redux/selector';
import { CreatedMarkup } from '../CreatedMarkup/CreatedMarkup';
import { FilterSection } from './FilterForm.styled';
import { Container } from '../../globalStyle';

const Search = () => {
  const allDish = useSelector(allDishes);
  const filter = useSelector(filterDish);
  const isLoading = useSelector(loading);

  const filteredProducts = allDish.filter((product) =>
    product.name.toLowerCase().includes(filter?.toLowerCase()),
  );

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
