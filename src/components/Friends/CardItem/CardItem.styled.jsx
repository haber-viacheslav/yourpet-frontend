import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 12px;

  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.clearWhite};
  box-shadow: ${props => props.theme.shadows.mainShadow};

  border-radius: 40px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  /* @media screen and (${props => props.theme.media.lg}) {
    gap: 20px;
  } */
`;

export const DayWrapper = styled.div`
  width: 101px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 3px;
  border-radius: 5px;
  gap: 12px;
  background-color: ${props => {
    if (props['data-time'][0] === props['data-day']) {
      return props.theme.colors.blueLight;
    } else {
      return props.theme.colors.transparent;
    }
  }};
  color: ${props => {
    const minHour = Number(
      props.children[1].props.children[0].props.children.replace(/:/, '.')
    );
    const maxHour = Number(
      props.children[1].props.children[2].props.children.replace(/:/, '.')
    );
    const inTime =
      props['data-time'][1] > minHour && props['data-time'][1] < maxHour;

    if (inTime && props['data-time'][0] === props['data-day']) {
      return props.theme.colors.green;
    } else if (!inTime && props['data-time'][0] === props['data-day']) {
      return props.theme.colors.red;
    } else if (['data-time'][0] !== props['data-day']) {
      return props.theme.colors.black;
    }
  }};
`;

export const Day = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: ${props => props.theme.fontWeights.medium};
`;
export const DayTime = styled.span`
  display: flex;
  font-size: 12px;
  line-height: 16px;
  font-weight: ${props => props.theme.fontWeights.medium};
`;

export const MaxTime = styled.span``;

export const MinTime = styled.span``;

export const LogoWrapper = styled.div`
  width: 68px;

  @media screen and (${props => props.theme.media.md}) {
    width: 88px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    width: 104px;
  }
`;
export const ScheduleWrapper = styled.div`
  position: relative;
`;

export const Schedule = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 126px;
  height: 160px;

  background: ${props => props.theme.colors.clearWhite};
  border: 1px solid ${props => props.theme.colors.blue};
  box-shadow: ${props => props.theme.shadows.mainShadow};
  border-radius: 8px;
`;
export const LogoContent = styled.img`
  object-fit: cover;
`;

export const CardTitle = styled.a`
  text-decoration: none;

  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 20px;
  line-height: 27px;
  line-height: 1.35;
  color: ${props => props.theme.colors.blue};
  margin-bottom: 16px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  &:hover,
  &:focus-visible {
    color: ${props => props.theme.colors.blue};
  }
  cursor: pointer;
`;

export const ScheduleBtn = styled.button`
  outline: ${props => props.theme.colors.transparent};
  padding: 0;
  background-color: ${props => props.theme.colors.transparent};
  text-decoration: none;
  color: ${props => {
    if (props['data-schedule']) {
      return props.theme.colors.blue;
    } else {
      return props.theme.colors.black;
    }
  }};

  border: none;

  &:hover,
  &:focus-visible,
  :active {
    color: ${props => props.theme.colors.blue};
  }
  cursor: pointer;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;

  @media screen and (${props => props.theme.media.md}) {
    font-size: 20px;
  }
`;

export const Title = styled.p`
  text-align: left;
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: 1.33;
  @media screen and (${props => props.theme.media.md}) {
    font-size: 14px;
    line-height: 1.35;
  }
  @media screen and (${props => props.theme.media.md}) {
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const Text = styled.p`
  text-align: left;
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 1.33;
  @media screen and (${props => props.theme.media.md}) {
    font-size: 14px;
    line-height: 1.35;
  }
  @media screen and (${props => props.theme.media.md}) {
    font-size: 16px;
    line-height: 1.375;
  }
`;
