import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../globalStyle';
import { userLogOut } from '../../redux/auth/operation';
import { dataUser } from '../../redux/selector';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(dataUser);

  return (
    <Container>
      <p> UserAccount</p>
      <p>{user?.fullName}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(userLogOut());
          navigate('/');
        }}
      >
        Log out
      </button>
    </Container>
  );
};

export default UserAccount;
