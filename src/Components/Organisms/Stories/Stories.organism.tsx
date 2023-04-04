import { FC, useContext, useEffect, useState } from 'react'

import { UserProfileContext } from '@/Contexts'

import { ProfileProps } from '@/Utils/Props'

import { ButtonAtom, PictureAtom } from '@/Components/Atoms'

import { ProfileMock } from '@/Assets/Mocks/Profile.mock'
import * as Styled from './Stories.style'

export const StoriesOrganism: FC = () => {
  const { userProfileState } = useContext(UserProfileContext)

  const [storiesList, setStoriesList] = useState<Array<ProfileProps>>([])

  useEffect(() => {
    setStoriesList([
      ...ProfileMock.filter(
        (profileItem) => profileItem.id !== userProfileState.id
      )
    ])
  }, [userProfileState])

  if (!userProfileState.id) {
    return <></>
  }

  return (
    <Styled.Stories>
      <Styled.UserProfileStory>
        <ButtonAtom round transparent>
          <PictureAtom
            w={60}
            squared
            src={userProfileState.picture}
            alt={userProfileState.name}
          />
        </ButtonAtom>
      </Styled.UserProfileStory>

      {storiesList.map((profileItem) => (
        <ButtonAtom key={profileItem.id} round transparent>
          <PictureAtom
            w={60}
            squared
            src={profileItem.picture}
            alt={profileItem.name}
          />
        </ButtonAtom>
      ))}
    </Styled.Stories>
  )
}
