import {
  StyledModalTitle,
  StyledModalDescr,
  AnotherStyledModalTitle,
  StyledModalDescrBold,
  AnotherStyledModalDescr,
} from './ModalApproveActionContent.styled';

export const ModalTitle = ({ children }) => {
  return <StyledModalTitle>{children}</StyledModalTitle>;
};
export const AnotherModalTitle = ({ children }) => {
  return <AnotherStyledModalTitle>{children}</AnotherStyledModalTitle>;
};
export const ModalDescr = ({ children }) => {
  return <StyledModalDescr>{children}</StyledModalDescr>;
};
export const ModalDescrBold = ({ children }) => {
  return <StyledModalDescrBold>{children}</StyledModalDescrBold>;
};
export const AnotherModalDescr = ({ children }) => {
  return <AnotherStyledModalDescr>{children}</AnotherStyledModalDescr>;
};
