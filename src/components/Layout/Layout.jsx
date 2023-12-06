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
  LinkNavigate,
  List,
  Logo,
  MainNavigate,
  Nav,
  Span,
  WrapperAction,
  WrapperNav,
} from './Layout.style';
import { Select } from '../Select/Select';
import { Footer } from '../Footer/Footer';
import { FilterForm } from '../Filter/FilterForm';
import { filterDish } from '../../redux/selector';
import { filterDishes } from '../../redux/filter/slice';

const Layout = () => {
  const filter = useSelector(filterDish);
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);

  const pagesMenu = [
    { name: 'Appetizer', to: 'appetizer' },
    { name: 'Desserts', to: 'desserts' },
    { name: 'Drinks', to: 'drinks' },
  ];

  const onClickButton = () => {
    setVisibility(!visibility);

    !visibility
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
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
              onClick={onClickButton}
            >
              <CiMenuFries />
            </Button>
            <WrapperNav data-visibility={visibility.toString()}>
              <Nav>
                <Button
                  className="close_mobil_menu"
                  type="button"
                  onClick={onClickButton}
                >
                  <TfiClose />
                </Button>
                <List>
                  <Item>
                    <Select />
                  </Item>
                  {pagesMenu.map(({ name, to }) => (
                    <Item key={name}>
                      <MainNavigate activeclassname="active" to={to}>
                        {name}
                      </MainNavigate>
                    </Item>
                  ))}
                </List>
              </Nav>
              <WrapperAction>
                <FilterForm />
                <Button type="button" className="user_button">
                  <TbUser />
                </Button>
                <LinkNavigate
                  to="basket"
                  preventScrollReset={true}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  <GrBasket />
                </LinkNavigate>
              </WrapperAction>
            </WrapperNav>
          </HeaderContainer>
        </Container>
      </Header>
      <main style={{ flexGrow: 1 }}>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
