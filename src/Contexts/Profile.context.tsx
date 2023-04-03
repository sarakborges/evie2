import { ProfileProps } from '@/Utils/Props'
import { Dispatch, createContext, useState, FC, ReactNode } from 'react'

const INITIAL_STATE: ProfileProps = {
  id: '',
  name: '',
  picture: ''
}

export const ProfileContext = createContext<{
  profileState: ProfileProps
  setProfileState: Dispatch<any>
}>({
  profileState: { ...INITIAL_STATE },
  setProfileState: () => {}
})

export const ProfileProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [profileState, setProfileState] = useState<ProfileProps>({
    ...INITIAL_STATE
  })

  return (
    <ProfileContext.Provider value={{ profileState, setProfileState }}>
      <>{children}</>
    </ProfileContext.Provider>
  )
}
