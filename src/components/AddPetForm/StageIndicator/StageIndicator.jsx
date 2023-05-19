import {
  Stage,
  StageWrapper,
  Indicator,
  Wrapper,
} from './StageIndicator.styled';

export const StageIndicator = ({ stage }) => {
  return (
    <Wrapper>
      <StageWrapper>
        <Stage stage={stage} datastage={1}>
          Choose option
        </Stage>
        <Indicator stage={stage} datastage={1}></Indicator>
      </StageWrapper>
      <StageWrapper>
        <Stage stage={stage} datastage={2}>
          Personal details
        </Stage>
        <Indicator stage={stage} datastage={2}></Indicator>
      </StageWrapper>
      <StageWrapper>
        <Stage stage={stage} datastage={3}>
          More info
        </Stage>
        <Indicator stage={stage} datastage={3}></Indicator>
      </StageWrapper>
    </Wrapper>
  );
};
