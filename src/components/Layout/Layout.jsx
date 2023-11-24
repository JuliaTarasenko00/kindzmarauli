import { Outlet } from 'react-router-dom';
import { TbUser } from 'react-icons/tb';
import { FaBasketShopping } from 'react-icons/fa6';
import { GrRestaurant } from 'react-icons/gr';
import { GrFavorite } from 'react-icons/gr';
import { Suspense } from 'react';
import { Container } from '../../globalStyle';
import {
  Button,
  Header,
  Item,
  Link,
  List,
  Logo,
  Nav,
  Wrapper,
} from './Layout.style';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <Logo to="/">
              <GrRestaurant /> Kindzmarauli
            </Logo>
            <List>
              <Item></Item>
              <Item>
                <Link activeclassname="active" to="appetizer">
                  Appetizer
                </Link>
              </Item>
              <Item>
                <Link activeclassname="active" to="desserts">
                  Desserts
                </Link>
              </Item>
              <Item>
                <Link activeclassname="active" to="drinks">
                  Drinks
                </Link>
              </Item>
            </List>
            <Wrapper>
              <Button>
                <GrFavorite />
              </Button>
              <Button>
                <TbUser />
              </Button>
              <Button>
                <FaBasketShopping />
              </Button>
            </Wrapper>
          </Nav>
        </Container>
      </Header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
