import React from 'react';
import { Input } from './Answer.style';
type Props = {
  size: string;
};
const style = {
  fontSize: '10px',
};
export const Answer = ({ size }: Props) => {
  if (size === 'lg') {
    style.fontSize = '20px';
  }
  return <Input style={style} type="radio" />;
};
