import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loading } from '../../../redux/selector';
import { Section } from './Appetizer.styled';
import { CreatedMarkup } from '../../../components/user/CreatedMarkup/CreatedMarkup';
import { Loader } from '../../../components/Loader/Loader';
import { useSpecificsFilter } from '../../../helpers/hooks/useSpecificsFilter';
import { useRequestDataSpecifics } from '../../../helpers/hooks/useRequestDataSpecifics';
import { specificsDish } from '../../../helpers/specifics_dish';

const AppetizerPage = () => {
  const isLoading = useSelector(loading);
  const { pathname } = useLocation();

  const { value } = useRequestDataSpecifics(pathname, specificsDish.APPETIZER);

  const salad = useSpecificsFilter(value.SALAD);

  const hotSnack = useSpecificsFilter(value.HOTSNACK);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Section>
            <CreatedMarkup titleDishes={'Salads'} dishes={salad} />
          </Section>
          <Section>
            <CreatedMarkup titleDishes={'Hot Appetizers'} dishes={hotSnack} />
          </Section>
        </>
      )}
    </>
  );
};

export default AppetizerPage;
