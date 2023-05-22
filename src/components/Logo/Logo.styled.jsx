// import styled from 'styled-components';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 50;
`;

const LogoIcon = styled.img`
@media screen and (min-width: 481px){
 display:initial;   
}
display:none; 

`;

const LogoIconsm = styled.img`
@media screen and (max-width: 480px){
  display:initial;  
}
display:none`
;
    

export { LogoWrapper,LogoIcon,LogoIconsm};