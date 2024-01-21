import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { authentication } from '../../redux/selector';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectedTo = '/' }) => {
  const auth = useSelector(authentication);

  return auth ? children : <Navigate to={redirectedTo} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
  redirectedTo: PropTypes.string,
};
