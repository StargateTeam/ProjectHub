import { SubmitHandler, useForm } from 'react-hook-form'

import { LoginPage } from '@/components/Templetes/LoginPage'

export type Inputs = {
  idRequired: string
  passwordRequired: string
}
export default function Login() {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<Inputs>()

  const onFormSubmit: SubmitHandler<Inputs> = ({
    idRequired,
    passwordRequired
  }) => {
    console.log('id', idRequired)
    console.log('pw', passwordRequired)
  }
  return (
    <LoginPage
      onFormSubmit={onFormSubmit}
      handleSubmit={handleSubmit}
      errors={errors}
      control={control}
    />
  )
}
