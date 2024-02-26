import { useEffect, useMemo } from 'react';
import { getSpecificsDishes } from '../../redux/dishes/operation';
import { useDispatch } from 'react-redux';

export const useRequestDataSpecifics = (pathname, specificsDish) => {
  const dispatch = useDispatch();

  const name = useMemo(() => pathname.split('/'), [pathname]);
  const nameForRequest = name[1] === 'admin' ? name[2] : name[1];
  const { value } = specificsDish;

  useEffect(() => {
    dispatch(getSpecificsDishes(nameForRequest));
  }, [name, dispatch, nameForRequest]);

  return { value };
};
