import { useSelector } from 'react-redux';
import { allDishes, filterDish } from '../../redux/selector';
import { CreatedMarkup } from '../CreatedMarkup/CreatedMarkup';
import { FilterSection } from './FilterForm.styled';
import { Container } from '../../globalStyle';

export const Filter = () => {
  const allDish = useSelector(allDishes);
  const filter = useSelector(filterDish);

  const filteredProducts = allDish.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <FilterSection>
      <CreatedMarkup dishes={filteredProducts} />
      {filteredProducts.length === 0 && (
        <Container>
          <p>Not found</p>
        </Container>
      )}
    </FilterSection>
  );
};
