import type { InputHTMLAttributes } from 'react'
import type { ControllerProps } from 'react-hook-form'
import { useController } from 'react-hook-form'

import { InputProps } from '@/components/Atoms/Input'

import InputFormStyled from './InputForm.style'

export type InputFormProps = React.PropsWithChildren<
  {
    name: string
  } & InputProps &
    InputHTMLAttributes<HTMLInputElement> &
    Omit<ControllerProps, 'render'>
>

const InputForm = (props: InputFormProps) => {
  const { name, control, rules, defaultValue } = props
  const {
    field: { ...inputProps }
  } = useController({
    name,
    control,
    rules,
    defaultValue
  })

  return <InputFormStyled {...props} {...inputProps} />
}

export default InputForm
