// import { StyledInput, StyledLabel } from './UserData.styled';
import styled from 'styled-components';
import { FlexContainer } from 'components/FlexContainer/FlexContainer';
import { UserDataItem } from '../UserDataItem/UserDataItem';

const StyledProfileTitle = styled.h2`
  font-family: Manrope;
  font-style: Medium;
  font-size: 20px;
  line-height: calc(27/20);
  letter-spacing: 4%;
  color: rgba(0, 0, 0, 1);
  align: left;
`;

export const UserData = () => {
  return (
    <FlexContainer>
      <StyledProfileTitle>My information:</StyledProfileTitle>
      <UserDataItem />
    </FlexContainer>
  );
};
