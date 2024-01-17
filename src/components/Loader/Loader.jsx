import { GrRestaurant } from 'react-icons/gr';
import { Section, Title, Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Section>
      <Wrapper>
        <Title>
          <span>
            <GrRestaurant />
          </span>
          Kindzmarauli
        </Title>
      </Wrapper>
    </Section>
  );
};
