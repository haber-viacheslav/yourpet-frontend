import styled from "styled-components";

import { theme } from "theme/theme";

//контейнер всіх тварин + заголовок
export const PetListExtraWrapper = styled.div`
  display flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 0;
  border: none;  

  @media screen and ${theme.media.md} {
    gap: 22px;
  };

  @media screen and ${theme.media.lg} {
    gap: 24px;
  };
`;