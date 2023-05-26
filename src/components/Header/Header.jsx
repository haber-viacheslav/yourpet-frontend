import { HeaderWrapper } from './Header.styled';
import { Container } from '../Container/Container';
import { NavBar } from '../Navigation/NavBar/NavBar';

export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <NavBar />
      </HeaderWrapper>
    </Container>
  );
};
