import styled from 'styled-components'

import { SwitchStyle } from './Switch.style'

const Input = styled.input`
  opacity: 0;
  position: absolute;
  z-index: 10;

  &:checked + ${SwitchStyle} {
    background: #ffe96d;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`

export { Input }
