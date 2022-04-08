import { useRef, useState } from 'react'

import { AnswerWrapper, Input, Label } from './Answer.style'

export type AnswerProps = {
  answerList: Array<Record<'id' | 'text', string>>
  maxCount: number
}
export type StyleProps = {
  fontSize: 'small' | 'medium' | 'large'
}
export type Props = AnswerProps & StyleProps
const Answer = ({ answerList, maxCount, ...rest }: Props) => {
  const [isCheck, setIsCheck] = useState(Array(answerList.length).fill(false))
  const checkCount = useRef(0)

  const checkHandle = (e: any, idx: number) => {
    if (e.target.checked)
      if (checkCount.current < maxCount) {
        checkCount.current += 1
        const temp = [...isCheck]
        temp[idx] = true
        setIsCheck(temp)
      } else e.preventDefault()
    else {
      checkCount.current -= 1
      const temp = [...isCheck]
      temp[idx] = false
      setIsCheck(temp)
    }
  }

  return (
    <div className=".div">
      {answerList.map(({ text }, idx) => (
        <AnswerWrapper key={idx} id={'Wrapper'}>
          <Input
            {...rest}
            type="checkbox"
            id={'checkbox' + idx}
            onClick={(e) => checkHandle(e, idx)}
          />
          <Label isCheck={isCheck[idx]} {...rest} htmlFor={'checkbox' + idx}>
            {text}
          </Label>
        </AnswerWrapper>
      ))}
    </div>
  )
}
export default Answer
