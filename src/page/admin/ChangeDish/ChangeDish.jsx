import { useParams } from 'react-router-dom';

const ChangeDishPage = () => {
  const { id } = useParams();

  return <p> {id}</p>;
};

export default ChangeDishPage;
