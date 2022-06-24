import React, { useMemo } from 'react'

import Box from '@/components/Atoms/Box'
import Text from '@/components/Atoms/Text'
import DefaultHeader from '@/components/Oraganisms/Headers/DefaultHeader'
import type { overInterviewInfo } from '@/types/interview'

export default function InterviewOverPage({
  title,
  time,
  intervieweeEmail
}: overInterviewInfo) {
  const interviewTime = useMemo<string>(() => {
    return time.getHours() + ':' + time.getMinutes()
  }, [time])

  return (
    <Box direction="column" w="full" h="full">
      <DefaultHeader />
      <Box direction="column" hAlign="center" w="full" h="70vh">
        <Box my="120px" direction="column" hAlign="center">
          <Text fontWeight="bold" fontSize="3xl">
            {title}
          </Text>
        </Box>
        <Box direction="column" hAlign="center">
          <Text fontWeight="bold" fontSize="3xl">
            고생하셨습니다.
          </Text>
        </Box>
        <Box my="xl" direction="column" hAlign="center">
          <Text fontWeight="bold" fontSize="3xl">
            면접이 종료되었습니다.
          </Text>
        </Box>

        <Box my="56px" mx="xl" hAlign="center">
          <Box mx="xl" direction="column" hAlign="center">
            <Box my="xl">
              <Text fontWeight="medium" fontSize="xl">
                면접 시간
              </Text>
            </Box>
            <Box my="xl">
              <Text fontWeight="medium" fontSize="xl">
                면접자 이메일
              </Text>
            </Box>
          </Box>
          <Box mx="xl" direction="column" hAlign="center">
            <Box my="xl">
              <Text fontWeight="medium" fontSize="xl">
                {interviewTime}
              </Text>
            </Box>
            <Box my="xl">
              <Text fontWeight="medium" fontSize="xl">
                {intervieweeEmail}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
