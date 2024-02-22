import { Aside, Link } from './SideBar.styled';

export const SideBar = () => {
  const options = [
    {
      to: '/admin',
      name: 'Kindzmarauli',
      classLogo: 'logo',
    },
    {
      to: 'add_newDish',
      name: 'Add a new dish',
    },
    {
      to: 'hot_dishes',
      name: 'Hot Dishes',
    },
    {
      to: 'appetizer',
      name: 'Appetizer',
    },
    {
      to: 'desserts',
      name: 'Desserts',
    },
    {
      to: 'drinks',
      name: 'Drinks',
    },
  ];

  return (
    <Aside>
      {options.map(({ to, name, classLogo }) => (
        <Link to={to} key={to} className={classLogo} activeclassname="active">
          {name}
        </Link>
      ))}
    </Aside>
  );
};
