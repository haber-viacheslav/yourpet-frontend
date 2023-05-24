import styled from 'styled-components';

import { theme } from '../../../theme/theme';
import { SvgDelete } from '../../buttons/buttons';

export const PetImage = styled.img`
  width: 240px;
  height: 240px;
  margin-bottom: 20px;

  @media screen and ((${theme.media.md})) {
    width: 161px;
    height: 161px;
    margin-bottom: auto;
  }

  @media screen and (${theme.media.lg}) {
    width: 128px;
    height: 128px;
  }
`;

export const DeletePetBtn = () => {
  return (
    <>
      <button type="button">
        <SvgDelete />
      </button>
    </>
  );
};

export const PetsItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 16px 20px 40px;
  border-radius: 20px;

  @media screen and (${theme.media.md}) {
    padding: 20px;
    border-radius: 40px;
  }
`;

export const PetsInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding: 0;
  border: none;

  @media screen and (${theme.media.md}) {
    gap: 22px;
  }

  @media screen and (${theme.media.lg}) {
    gap: 24px;
  }
`;

export const InfoTitle = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 4%;

  @media screen and (${theme.media.md}) {
    font-weight: 600;
  }
  @media screen and (${theme.media.lg}) {
    font-size: 16px;
  }
`;

export const InfoContent = styled(InfoTitle)`
  font-weight: 400;

  @media screen and (${theme.media.md}) {
    font-weight: 600;
  }
`;

export const InfoTitleComments = styled(InfoTitle)`
  line-height: 22px;

  @media screen and (${theme.media.md}) {
    font-weight: 600;
    line-height: 18px;
    font-size: 16px;

    @media screen and (${theme.media.lg}) {
      line-height: 22px;
    }
  }
`;

export const InfoContentComments = styled(InfoTitleComments)`
  font-weight: 400;
`;
