import { useEffect, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { GoChevronUp } from 'react-icons/go';
import {
  SelectItem,
  SelectLink,
  SelectList,
  SelectWrapper,
  Title,
} from './Select.styled';
import { useLocation } from 'react-router-dom';

const options = [
  {
    name: 'Main Dishes',
    to: '/hoot_dishes_main',
  },
  {
    name: 'Grilled Dishes',
    to: '/hoot_dishes_grilled',
  },
  {
    name: 'Khinkali',
    to: '/hoot_dishes_khinkali',
  },
];

export const Select = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('Hoot Dishes');
  const { pathname } = useLocation();

  useEffect(() => {
    const location = options.every(({ to }) => to !== pathname);
    if (location) {
      setSelected('Hoot Dishes');
    }
  }, [pathname]);

  return (
    <SelectWrapper>
      <Title
        onClick={() => {
          setIsActive(!isActive);
        }}
        data-active={isActive.toString()}
      >
        {selected} {!isActive ? <GoChevronDown /> : <GoChevronUp />}
      </Title>
      {isActive && (
        <SelectList
          onClick={(ev) => {
            if (ev.target !== ev.currentTarget) {
              setSelected(ev.target.textContent);
              setIsActive(false);
            }
          }}
        >
          {options.map(({ name, to }) => (
            <SelectItem key={name}>
              <SelectLink to={to}>{name}</SelectLink>
            </SelectItem>
          ))}
        </SelectList>
      )}
    </SelectWrapper>
  );
};
