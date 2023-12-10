import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import {
  SelectItem,
  SelectLink,
  SelectList,
  SelectWrapper,
  Title,
} from './Select.styled';
import { useLocation } from 'react-router-dom';
import { specificsDish } from '../../helpers/specifics_dish';

const options = [
  {
    name: 'Main Dishes',
    to: `/hot_dishes#${specificsDish.MAIN}`,
  },
  {
    name: 'Grilled Dishes',
    to: `/hot_dishes#${specificsDish.GRILLED}`,
  },
  {
    name: 'Khinkali',
    to: `/hot_dishes#${specificsDish.KHINKALI}`,
  },
];

export const Select = (prop) => {
  const { onClick } = prop;

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('Hoot Dishes');
  const { pathname, hash } = useLocation();
  const timeoutRef = useRef(null);
  const selectRef = useRef();

  useEffect(() => {
    const location = options.every(({ to }) => to !== pathname);
    if (location) {
      setSelected('Hot Dishes');
    }
  }, [pathname]);

  const handleClick = (dish) => {
    if (window.location.hash === dish) {
      window.location.hash = '#';
      timeoutRef.current = setTimeout(() => {
        window.location.hash = dish;
      }, 300);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <SelectWrapper ref={selectRef}>
      <Title
        onClick={() => {
          setIsActive(!isActive);
        }}
        data-active={isActive.toString()}
      >
        {selected}
        <span>
          <GoChevronDown />
        </span>
      </Title>
      <SelectList
        data-show={isActive.toString()}
        onClick={(ev) => {
          if (ev.target !== ev.currentTarget) {
            setSelected(ev.target.textContent);
            setIsActive(false);

            onClick();
          }
        }}
      >
        {options.map(({ name, to }) => (
          <SelectItem key={name} onClick={() => handleClick(hash)}>
            <SelectLink to={to}>{name}</SelectLink>
          </SelectItem>
        ))}
      </SelectList>
    </SelectWrapper>
  );
};

Select.propTypes = {
  onClick: PropTypes.func.isRequired,
};
