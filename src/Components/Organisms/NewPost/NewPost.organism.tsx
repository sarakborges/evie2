import { FC } from 'react'
import {
  EmojiSmileFill,
  CameraVideoFill,
  CardImage
} from 'styled-icons/bootstrap'

import { ButtonAtom } from '@/Components/Atoms'
import { FieldMolecule } from '@/Components/Molecules'

import * as Styled from './NewPost.style'

export const NewPostOrganism: FC = () => {
  return (
    <Styled.Publish>
      <FieldMolecule
        type="textarea"
        placeholder="Publish blabla"
        id="home-publish-text"
      />

      <Styled.PublishOptions>
        <Styled.PublishOptionsList>
          <ButtonAtom round>
            <CardImage />
          </ButtonAtom>

          <ButtonAtom round>
            <CameraVideoFill />
          </ButtonAtom>

          <ButtonAtom round>
            <EmojiSmileFill />
          </ButtonAtom>
        </Styled.PublishOptionsList>

        <ButtonAtom>Send</ButtonAtom>
      </Styled.PublishOptions>
    </Styled.Publish>
  )
}
