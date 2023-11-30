import { Outlet } from 'react-router-dom';
import { TbUser } from 'react-icons/tb';
import { GrBasket } from 'react-icons/gr';
import { GrRestaurant } from 'react-icons/gr';
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
import { Select } from '../Select/Select';
import { Footer } from '../Footer/Footer';
import { FilterForm } from '../Filter/FilterForm';

const Layout = () => {
  const pagesMenu = [
    { name: 'Appetizer', to: 'appetizer' },
    { name: 'Desserts', to: 'desserts' },
    { name: 'Drinks', to: 'drinks' },
  ];

  return (
    <>
      <Header>
        <Container>
          <Nav>
            <Logo to="/">
              <GrRestaurant /> Kindzmarauli
            </Logo>
            <List>
              <Item>
                <Select />
              </Item>
              {pagesMenu.map(({ name, to }) => (
                <Item key={name}>
                  <Link activeclassname="active" to={to}>
                    {name}
                  </Link>
                </Item>
              ))}
            </List>
            <Wrapper>
              <FilterForm />
              <Button type="button">
                <TbUser />
              </Button>
              <Link activeclassname="active" to="basket">
                <GrBasket />
              </Link>
            </Wrapper>
          </Nav>
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
