import React from 'react'

import { Input } from './Input.style'
import { SwitchStyle } from './Switch.style'

type Props = React.PropsWithChildren<{
  check: boolean
  onChangeToggle: any
  color: string
}>

const style = {
  background: '#ffe96d'
}

const Switch = ({ check, onChangeToggle, color }: Props) => {
  if (color != '') {
    style.background = color
  }
  return (
    <div>
      <Input
        type="checkbox"
        style={style}
        checked={check}
        onChange={onChangeToggle}
      />
      <SwitchStyle />
    </div>
  )
}

export default Switch
