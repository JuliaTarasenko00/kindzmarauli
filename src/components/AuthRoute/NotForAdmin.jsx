import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { authorized, role } from '../../redux/selector';
import { Navigate } from 'react-router-dom';
import { ROLES } from '../../helpers/rolesUser';

const NotForAdmin = ({ children, redirectedTo = '/admin' }) => {
  const auth = useSelector(authorized);
  const roles = useSelector(role);

  return !auth || (auth && roles === ROLES.USER) ? (
    children
  ) : (
    <Navigate to={redirectedTo} />
  );
};

export default NotForAdmin;

NotForAdmin.propTypes = {
  children: PropTypes.node,
  redirectedTo: PropTypes.string,
};
