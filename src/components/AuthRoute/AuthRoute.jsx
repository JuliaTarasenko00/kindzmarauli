import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { authorized, role } from '../../redux/selector';
import { Navigate } from 'react-router-dom';
import { ROLES } from '../../helpers/rolesUser';

const AuthRout = ({ children }) => {
  const auth = useSelector(authorized);
  const roles = useSelector(role);

  const redirectedTo = roles === ROLES.USER ? '/user_account' : '/admin';

  return !auth ? children : <Navigate to={redirectedTo} />;
};

export default AuthRout;

AuthRout.propTypes = {
  children: PropTypes.node,
  redirectedTo: PropTypes.string,
};
