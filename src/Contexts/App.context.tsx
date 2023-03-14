import { Dispatch, createContext, useState, FC, ReactNode } from 'react'

const INITIAL_STATE = {}

type AppProps = {}

export const AppContext = createContext<{
  appState: AppProps
  setAppState: Dispatch<any> | null
}>({
  appState: { ...INITIAL_STATE },
  setAppState: null
})

export const AppProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [appState, setAppState] = useState<AppProps>({
    ...INITIAL_STATE
  })

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <>{children}</>
    </AppContext.Provider>
  )
}
