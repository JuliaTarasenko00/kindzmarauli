import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { authorized, role } from '../../redux/selector';
import { Navigate } from 'react-router-dom';

const AuthRout = ({ children }) => {
  const auth = useSelector(authorized);
  const roles = useSelector(role);

  const redirectedTo = roles === 'Admin' ? '/admin' : '/user_account';

  return !auth ? children : <Navigate to={redirectedTo} />;
};

export default AuthRout;

AuthRout.propTypes = {
  children: PropTypes.node,
  redirectedTo: PropTypes.string,
};
