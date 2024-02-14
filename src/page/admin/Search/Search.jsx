import { useSelector } from 'react-redux';
import { filterDish } from '../../../redux/selector';
import { MarkupComponent } from '../../../components/admin/MarkupComponent/MarkupComponent';
import { useNavigate } from 'react-router-dom';
import { Button } from './Search.styled';
import { Container } from '../../../globalStyle';

const SearchPage = () => {
  const list = useSelector(filterDish);
  const navigate = useNavigate();

  return (
    <section style={{ padding: '30px 0' }}>
      <Container>
        <Button type="button" onClick={() => navigate('/admin')}>
          Return to thr entire menu
        </Button>
        {list.length === 0 ? <p>Not Found</p> : <MarkupComponent list={list} />}
      </Container>
    </section>
  );
};

export default SearchPage;
