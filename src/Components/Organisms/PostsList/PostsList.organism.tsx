import { FC, useContext, useEffect, useState } from 'react'

import { UserProfileContext } from '@/Contexts'

import { ProfileProps } from '@/Utils/Props'
import {
  CONTACTS_OPTIONS,
  CONTACTS_OPTIONS_PLACEHOLDER
} from '@/Utils/Constants'
import { FEED_TITLE } from '@/Utils/Texts'

import { TextAtom } from '@/Components/Atoms'
import { FieldMolecule, PostItemMolecule } from '@/Components/Molecules'

import { ProfileMock } from '@/Assets/Mocks/Profile.mock'
import * as Styled from './PostsList.style'

export const PostsListOrganism: FC = () => {
  const { userProfileState } = useContext(UserProfileContext)

  const [profilesList, setProfilesList] = useState<Array<ProfileProps>>([])

  useEffect(() => {
    setProfilesList(
      ProfileMock.filter(
        (profileItem) => profileItem.id !== userProfileState.id
      )
    )
  }, [userProfileState])

  return (
    <div>
      <Styled.PostsListHeader>
        <TextAtom fc="link">{FEED_TITLE}</TextAtom>

        <FieldMolecule
          type="select"
          placeholder={CONTACTS_OPTIONS_PLACEHOLDER}
          options={CONTACTS_OPTIONS}
          small
        />
      </Styled.PostsListHeader>

      <Styled.PostsList>
        {profilesList.map((profileItem) => (
          <PostItemMolecule key={profileItem.id} senderProfile={profileItem} />
        ))}
      </Styled.PostsList>
    </div>
  )
}
