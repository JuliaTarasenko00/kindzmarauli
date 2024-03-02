import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loading } from '../../../redux/selector';
import { useRequestDataSpecifics } from '../../../helpers/hooks/useRequestDataSpecifics';
import { specificsDish } from '../../../helpers/specifics_dish';
import { useSpecificsFilter } from '../../../helpers/hooks/useSpecificsFilter';
import { RenderUserComponent } from '../../../components/user/RenderUserComponent';
import { Loader } from '../../../components/Loader/Loader';

const DessertsPage = () => {
  const isLoading = useSelector(loading);
  const { pathname } = useLocation();

  const { value } = useRequestDataSpecifics(pathname, specificsDish.DESSERT);

  const iceCream = useSpecificsFilter(value.ICECREAM);

  const cake = useSpecificsFilter(value.CAKE);

  const options = [
    { title: 'Ice Cream', specifics: iceCream },
    { title: 'Cake', specifics: cake },
  ];

  return (
    <>
      {isLoading && <Loader />}
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

export default DessertsPage;
