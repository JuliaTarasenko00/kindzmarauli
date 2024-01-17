import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { TbUser } from 'react-icons/tb';
import { GrBasket } from 'react-icons/gr';
import { GrRestaurant } from 'react-icons/gr';
import { CiMenuFries } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';
import { Suspense, useState } from 'react';
import { Container } from '../../globalStyle';
import {
  Button,
  Header,
  HeaderContainer,
  Item,
  List,
  Logo,
  MainNavigate,
  Nav,
  NumberOrders,
  Span,
  WrapperAction,
  WrapperBasket,
  WrapperNav,
} from './Layout.style';
import { Select } from '../Select/Select';
import { Footer } from '../Footer/Footer';
import { FilterForm } from '../Filter/FilterForm';
import { dishWithBasket, filterDish } from '../../redux/selector';
import { filterDishes } from '../../redux/filter/slice';
import { Loader } from '../Loader/Loader';

const Layout = () => {
  const filter = useSelector(filterDish);
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const basket = useSelector(dishWithBasket);
  const numberOrders = basket.reduce((sum, obj) => {
    return obj.count + sum;
  }, 0);

  const pagesMenu = [
    { name: 'Appetizer', to: 'appetizer' },
    { name: 'Desserts', to: 'desserts' },
    { name: 'Drinks', to: 'drinks' },
  ];

  const openMenu = () => {
    setVisibility(true);

    if (!visibility) {
      return (document.body.style.overflow = 'hidden');
    }
  };

  const closeMenu = () => {
    setVisibility(false);

    if (visibility) {
      return (document.body.style.overflow = 'auto');
    }
  };

  return (
    <>
      <Header>
        <Container>
          <HeaderContainer>
            <Logo
              to="/"
              onClick={() => {
                if (filter) {
                  dispatch(filterDishes(''));
                }
              }}
            >
              <Span>
                <GrRestaurant />
              </Span>
              Kindzmarauli
            </Logo>
            <Button
              type="button"
              className="open_mobil_menu"
              onClick={openMenu}
            >
              <CiMenuFries />
            </Button>
            <WrapperNav data-visibility={visibility.toString()}>
              <Nav>
                <Button
                  className="close_mobil_menu"
                  type="button"
                  onClick={closeMenu}
                >
                  <TfiClose />
                </Button>
                <List>
                  <Item>
                    <Select onClick={closeMenu} />
                  </Item>
                  {pagesMenu.map(({ name, to }) => (
                    <Item key={name}>
                      <MainNavigate
                        activeclassname="active"
                        to={to}
                        onClick={closeMenu}
                      >
                        {name}
                      </MainNavigate>
                    </Item>
                  ))}
                </List>
              </Nav>
              <WrapperAction>
                <FilterForm onClick={closeMenu} />
                <Button type="button" className="user_button">
                  <TbUser />
                </Button>
                <WrapperBasket>
                  <MainNavigate to="basket" onClick={closeMenu}>
                    <GrBasket />
                  </MainNavigate>
                  {numberOrders > 0 && (
                    <NumberOrders>{numberOrders}</NumberOrders>
                  )}
                </WrapperBasket>
              </WrapperAction>
            </WrapperNav>
          </HeaderContainer>
        </Container>
      </Header>
      <main style={{ flexGrow: 1 }}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
