import styled from 'styled-components';
import { StyleProps } from './Answer';

const fontSizeHandle = (fontSize: StyleProps['fontSize']) => {
  switch (fontSize) {
    case 'small':
      return '20px';
    case 'medium':
      return '30px';
    case 'large':
      return '40px';
  }
};
export const AnswerWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const Input = styled.input<StyleProps>`
  width: ${(prop) => fontSizeHandle(prop.fontSize)};
  height: ${(prop) => fontSizeHandle(prop.fontSize)};
  margin-right: 8px;
  cursor: pointer;
  ::after {
    background-color: red;
  }
`;

type LabelProps = { isCheck: number };
type AllLabelProps = LabelProps & StyleProps;
export const Label = styled.label<AllLabelProps>`
  font-size: ${(prop) => fontSizeHandle(prop.fontSize)};
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
  color: ${({ isCheck }) => (isCheck ? 'red' : 'black')};
`;
