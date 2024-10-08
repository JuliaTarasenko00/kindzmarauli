import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loading } from '../../../redux/selector';
import { useSpecificsFilter } from '../../../helpers/hooks/useSpecificsFilter';
import { useRequestDataSpecifics } from '../../../helpers/hooks/useRequestDataSpecifics';
import { specificsDish } from '../../../helpers/specifics_dish';
import { RenderUserComponent } from '../../../components/user/RenderUserComponent';
import { Loader } from '../../../components/Loader/Loader';
import { Container } from '../../../globalStyle';

const AppetizerPage = () => {
  const isLoading = useSelector(loading);
  const { pathname } = useLocation();

  const { value } = useRequestDataSpecifics(pathname, specificsDish.APPETIZER);

  const salad = useSpecificsFilter(value.SALAD);

  const hotSnack = useSpecificsFilter(value.HOTSNACK);

  const options = [
    { title: 'Salad', specifics: salad },
    { title: 'Hot Appetizers', specifics: hotSnack },
  ];

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {options.map(({ title, specifics }) => (
            <section style={{ padding: '20px 0' }} key={title}>
              <Container>
                <RenderUserComponent title={title} specifics={specifics} />
              </Container>
            </section>
          ))}
        </>
      )}
    </>
  );
};

export default AppetizerPage;
