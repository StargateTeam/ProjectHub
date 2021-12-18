import React from 'react';

type Props = {
  size: 'lg' | 'md' | 'sm';
};
const style = {
  fontSize: '10px',
};
export const Answer = ({ size }: Props) => {
  if (size === 'lg') {
    style.fontSize = '20px';
  }
  return <input style={style} type="radio" />;
};
