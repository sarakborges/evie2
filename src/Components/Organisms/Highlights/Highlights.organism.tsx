import { FC, useContext, useEffect, useState } from 'react'

import { UserProfileContext } from '@/Contexts'

import { ProfileProps } from '@/Utils/Props'
import {
  CONTACTS_OPTIONS,
  CONTACTS_OPTIONS_PLACEHOLDER
} from '@/Utils/Constants'
import { HIGHLIGHTS_TITLE } from '@/Utils/Texts'

import { ButtonAtom, PictureAtom, TextAtom } from '@/Components/Atoms'
import { FieldMolecule } from '@/Components/Molecules'

import { ProfileMock } from '@/Assets/Mocks/Profile.mock'
import * as Styled from './Highlights.style'

export const HighlightsOrganism: FC = () => {
  const { userProfileState } = useContext(UserProfileContext)

  const [storiesList, setHighlightsList] = useState<Array<ProfileProps>>([])

  useEffect(() => {
    setHighlightsList([
      ...ProfileMock.filter(
        (profileItem) => profileItem.id !== userProfileState.id
      )
    ])
  }, [userProfileState])

  if (!userProfileState.id) {
    return <></>
  }

  return (
    <Styled.HighlightsWrapper>
      <Styled.HighlightsListHeader>
        <TextAtom fc="link">{HIGHLIGHTS_TITLE}</TextAtom>

        <FieldMolecule
          type="select"
          placeholder={CONTACTS_OPTIONS_PLACEHOLDER}
          options={CONTACTS_OPTIONS}
          small
        />
      </Styled.HighlightsListHeader>

      <Styled.Highlights>
        <Styled.StoryItem isSelf>
          <ButtonAtom round transparent>
            <PictureAtom
              squared
              w={60}
              src={userProfileState.picture}
              alt={userProfileState.name}
            />
          </ButtonAtom>

          <TextAtom fs="8px" fc="link" ta="center">
            {userProfileState.name}
          </TextAtom>
        </Styled.StoryItem>

        {storiesList.map((profileItem) => (
          <Styled.StoryItem key={profileItem.id}>
            <ButtonAtom round transparent>
              <PictureAtom
                w={60}
                squared
                src={profileItem.picture}
                alt={profileItem.name}
              />
            </ButtonAtom>

            <TextAtom fs="8px" fc="link" ta="center">
              {profileItem.name}
            </TextAtom>
          </Styled.StoryItem>
        ))}
      </Styled.Highlights>
    </Styled.HighlightsWrapper>
  )
}
