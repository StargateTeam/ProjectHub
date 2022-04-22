import React from 'react'

import {
  InfoCircle,
  TitleText,
  UserInfoCircleWrap
} from './UserInfoCircle.style'

type circlePropsType = {
  count: number
  idx: number
}

export default function UserInfoCircle({ count, idx }: circlePropsType) {
  return (
    <UserInfoCircleWrap
      direction="column"
      hAlign="center"
      vAlign="middle"
      pt={12}
      px={6}
    >
      <TitleText color="white" fontWeight="bold">
        {idx === 0
          ? '총 면접 수'
          : idx === 1
          ? '총 면접자 수'
          : '채점 면접자 수'}
      </TitleText>
      <InfoCircle>{count}</InfoCircle>
    </UserInfoCircleWrap>
  )
}
