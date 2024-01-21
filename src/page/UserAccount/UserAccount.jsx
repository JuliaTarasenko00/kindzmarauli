import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../globalStyle';
import { userLogOut } from '../../redux/auth/operation';
import { dataUser } from '../../redux/selector';

const UserAccount = () => {
  const dispatch = useDispatch();
  const user = useSelector(dataUser);

  return (
    <Container>
      <p> UserAccount</p>
      <p>{user?.fullName}</p>
      <button type="button" onClick={() => dispatch(userLogOut())}>
        Log out
      </button>
    </Container>
  );
};

export default UserAccount;
