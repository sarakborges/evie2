import { ProfileProps } from './Profile.props'

export interface UserProps {
  id: string
  email: string
  profiles: Array<ProfileProps>
}
