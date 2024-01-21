import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
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
  WrapperButton,
  WrapperNav,
} from './Layout.style';
import { Select } from '../Select/Select';
import { Footer } from '../Footer/Footer';
import { FilterForm } from '../Filter/FilterForm';
import { dishWithBasket, getToken } from '../../redux/selector';
import { Loader } from '../Loader/Loader';
import { useModal } from '../../helpers/hooks/useModal';
import { ModalComponent } from '../Modal/Modal';
import { RenderForm } from '../AuthForm/RenderForm';

const Layout = () => {
  const [visibility, setVisibility] = useState(false);
  const { toggleModal, open } = useModal();
  const basket = useSelector(dishWithBasket);
  const token = useSelector(getToken);
  const navigate = useNavigate();

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
            <Logo to="/">
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
                <WrapperButton>
                  <Button
                    type="button"
                    className="user_button"
                    onClick={() =>
                      token === '' ? toggleModal() : navigate('user_account')
                    }
                  >
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
                </WrapperButton>
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
      {open && (
        <ModalComponent onClose={toggleModal}>
          <RenderForm onClose={toggleModal} />
        </ModalComponent>
      )}
    </>
  );
};

export default Layout;
