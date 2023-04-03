import { UserProps } from '@/Utils/Props'
import { Dispatch, createContext, useState, FC, ReactNode } from 'react'

const INITIAL_STATE: UserProps = {
  id: '',
  email: '',
  profiles: []
}

export const UserContext = createContext<{
  userState: UserProps
  setUserState: Dispatch<any>
}>({
  userState: { ...INITIAL_STATE },
  setUserState: () => {}
})

export const UserProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [userState, setUserState] = useState<UserProps>({
    ...INITIAL_STATE
  })

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      <>{children}</>
    </UserContext.Provider>
  )
}
