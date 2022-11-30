import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Box from '@/components/Atoms/Box'

const DefaultHeader = () => {
  return (
    <Box
      h={10}
      css={{
        backgroundColor: 'rgb(40 41 54)',
        paddingRight: '1rem'
      }}
      hAlign="right"
      vAlign="middle"
    >
      <FontAwesomeIcon
        icon={faUserAlt as any}
        size="2x"
        width="22px"
        height="22px"
        color="white"
      />
    </Box>
  )
}

export default DefaultHeader
