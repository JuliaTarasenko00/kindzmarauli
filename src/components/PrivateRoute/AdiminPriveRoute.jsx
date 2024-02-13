import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authorized, role } from '../../redux/selector';
import { ROLES } from '../../helpers/rolesUser';

const AdminPrivateRoute = ({ children, redirectedTo = '/login' }) => {
  const auth = useSelector(authorized);
  const admin = useSelector(role);

  return auth || admin === ROLES.ADMIN ? (
    children
  ) : (
    <Navigate to={redirectedTo} />
  );
};

export default AdminPrivateRoute;

AdminPrivateRoute.propTypes = {
  children: PropTypes.node,
  redirectedTo: PropTypes.string,
};
