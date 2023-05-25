import { HeaderWrapper } from './Header.styled';
import { NavBar } from "../Navigation/NavBar/NavBar";
// import { Container } from 'components/Container/Container';

export const Header = () => {
  return (
    <HeaderWrapper>
       {/* <Container> */}
          <NavBar />
        {/* </Container>      */}
    </HeaderWrapper>
  );
};
