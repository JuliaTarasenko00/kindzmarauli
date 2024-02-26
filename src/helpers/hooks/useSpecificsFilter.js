import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { specificsDishes } from '../../redux/selector';

export const useSpecificsFilter = (specificsValue) => {
  const specifics = useSelector(specificsDishes);

  const specificsFilter = useMemo(
    () =>
      specifics.filter(
        (dish) =>
          Object.values(dish.specificsDish).join(' ') === specificsValue,
      ),
    [specifics, specificsValue],
  );

  return specificsFilter;
};
