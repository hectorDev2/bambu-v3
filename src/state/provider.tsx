import { initializeData } from 'pages/rooms/RoomSlice'
import { ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'

import { store } from './store'

export function Providers({ children }: { children: ReactNode }) {
  // useEffect(() => {
  //   dispatch(initializeData(payload))
  // }, [dispatch, payload])

  return <Provider store={store}>{children}</Provider>
}
