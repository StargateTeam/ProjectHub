import { RefObject, useCallback, useLayoutEffect, useState } from 'react'
import * as rcTab from 'react-tabs'

type TabType = {
  key: string
  title: string
  render: () => React.ReactElement
}

export type TabRefMethods = {
  changeSelectedIndex: (index: string) => void
}

type TabProps = {
  tabList: TabType[]
  fowardedRef?: RefObject<TabRefMethods> | null
}

const Tab = ({ tabList, fowardedRef }: TabProps) => {
  const [tabIndex, setTabIndex] = useState(0)

  const changeSelectedIndexHandler = useCallback((index: number) => {
    setTabIndex(index)
  }, [])

  const changeSelectedIndex = useCallback(
    (key: string) => {
      const index = tabList.findIndex(({ key: tabKey }) => tabKey === key)

      if (index !== -1) {
        changeSelectedIndexHandler(index)
      }
    },
    [changeSelectedIndexHandler, tabList]
  )

  useLayoutEffect(() => {
    if (fowardedRef) {
      ;(fowardedRef.current as any) = {
        changeSelectedIndex
      }
    }
  }, [changeSelectedIndex, fowardedRef])

  return (
    <rcTab.Tabs selectedIndex={tabIndex} onSelect={changeSelectedIndexHandler}>
      <rcTab.TabList
        style={{
          textAlign: 'center'
        }}
      >
        {tabList.map(({ title, key }, index) => (
          <rcTab.Tab
            key={key}
            css={{
              display: 'inline-flex',
              margin: '10px',
              padding: '10px 12px',
              cursor: 'pointer',

              borderBottomWidth: '3px',
              borderBottomStyle: 'solid',
              borderBottomColor: tabIndex === index ? '#1480FF' : 'transparent',
              fontSize: '20px',
              color: tabIndex === index ? '#1480FF' : '#666666',
              '&:focus': {}
            }}
          >
            {title}
          </rcTab.Tab>
        ))}
      </rcTab.TabList>

      <>
        {tabList.map(({ render: RenderComponent, key }) => (
          <rcTab.TabPanel key={key}>
            <RenderComponent />
          </rcTab.TabPanel>
        ))}
      </>
    </rcTab.Tabs>
  )
}

export default Tab
