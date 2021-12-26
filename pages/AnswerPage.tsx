import React from 'react';
import Answer from '../src/components/Answer';

const answerList = [
  { id: '0', text: '문제1' },
  { id: '1', text: '문제2' },
  { id: '2', text: '문제3' },
  { id: '3', text: '문제4' },
  { id: '4', text: '문제5' },
];

export const AnswerPage = () => {
  return (
    <div>
      <Answer answerList={answerList} maxCount={2} fontSize="small" />
    </div>
  );
};
