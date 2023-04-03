import { ProfileProps } from '@/Utils/Props'
import {
  Dispatch,
  createContext,
  useState,
  FC,
  ReactNode,
  useEffect
} from 'react'

const INITIAL_STATE: ProfileProps = {
  id: '',
  name: '',
  picture: ''
}

export const UserProfileContext = createContext<{
  userProfileState: ProfileProps
  setUserProfileState: Dispatch<any>
}>({
  userProfileState: { ...INITIAL_STATE },
  setUserProfileState: () => {}
})

export const UserProfileProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [userProfileState, setUserProfileState] = useState<ProfileProps>({
    ...INITIAL_STATE
  })

  useEffect(() => {}, [])

  return (
    <UserProfileContext.Provider
      value={{ userProfileState, setUserProfileState }}
    >
      <>{children}</>
    </UserProfileContext.Provider>
  )
}
