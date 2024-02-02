import { GrRestaurant } from 'react-icons/gr';
import {
  Link,
  NameRestaurant,
  Policy,
  SectionFooter,
  TitleOfficial,
  WrapperContact,
  WrapperOfficial,
  WrapperPolicy,
} from './Footer.styled';
import { Container } from '../../../globalStyle';

export const Footer = () => {
  return (
    <SectionFooter>
      <Container>
        <WrapperContact>
          <NameRestaurant>
            <GrRestaurant /> Kindzmarauli
          </NameRestaurant>
          <div>
            <Link href="tel:+38(099)900-00-00">+38(099)900-00-00</Link>
            <Link className="email" href="mailto:kindzmarauli@gmail.com">
              kindzmarauli@gmail.com
            </Link>
          </div>
        </WrapperContact>
        <WrapperOfficial>
          <TitleOfficial>© 2023, official site</TitleOfficial>
          <WrapperPolicy>
            <Policy href="#">Privacy Policy and Offer</Policy>
            <Policy href="#">Terms of use</Policy>
          </WrapperPolicy>
        </WrapperOfficial>
      </Container>
    </SectionFooter>
  );
};
