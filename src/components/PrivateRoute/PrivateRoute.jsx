import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { authorized, role } from '../../redux/selector';
import { Navigate } from 'react-router-dom';
import { ROLES } from '../../helpers/rolesUser';

const PrivateRoute = ({ children, redirectedTo = '/login' }) => {
  const auth = useSelector(authorized);
  const admin = useSelector(role);

  return auth && admin === ROLES.USER ? (
    children
  ) : (
    <Navigate to={redirectedTo} />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
  redirectedTo: PropTypes.string,
};
