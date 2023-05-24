import styled from "styled-components";
import { theme } from "theme/theme";
import { ProfileTitle } from "components/UserData/UserData.styled";

export const PetsTitleGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyPetsTitle = styled(ProfileTitle)`
  margin-bottom: 24px;

  @media screen and ${theme.media.mdToLg} {
    margin-bottom: 20px;
  }
`;


