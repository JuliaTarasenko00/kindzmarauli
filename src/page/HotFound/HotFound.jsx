import { useNavigate } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import notFound from '../../assets/img/not_found.png';
import {
  Button,
  Description,
  Section,
  Title,
  Wrapper,
  WrapperDescription,
} from './HotFound.styled';
import { Container } from '../../globalStyle';

const HotFound = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <Wrapper>
          <div>
            <img src={notFound} alt="This page not found" />
          </div>
          <WrapperDescription>
            <Title>Page Not Found</Title>
            <Description>
              This page doesn’t exist or was removed! We suggest you go back to
              home.
            </Description>
            <Button type="button" onClick={() => navigate('/')}>
              Go back home <GoArrowRight />
            </Button>
          </WrapperDescription>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default HotFound;
