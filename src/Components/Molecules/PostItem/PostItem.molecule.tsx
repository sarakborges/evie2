import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '@/Utils/Constants'

import { PictureAtom, TextAtom } from '@/Components/Atoms'

import { PostItemProps } from './PostItem.props'
import * as Styled from './PostItem.style'

export const PostItemMolecule: FC<PostItemProps> = ({ senderProfile }) => {
  return (
    <Styled.Post>
      <Styled.PostHeader>
        <Link
          to={ROUTES.get('PROFILE').PATH.replace(':url', senderProfile.url)}
        >
          <PictureAtom
            src={senderProfile.picture}
            alt={senderProfile.name}
            w={32}
            squared
          />
        </Link>

        <span>
          <Styled.ProfileName>
            <Link
              to={ROUTES.get('PROFILE').PATH.replace(':url', senderProfile.url)}
            >
              <TextAtom fc="link" fs="12px" fw={500}>
                {senderProfile.name}
              </TextAtom>

              <TextAtom fc="link" fs="8px">
                <> • </>
              </TextAtom>

              <TextAtom fs="8px" fc="textWeak">
                @{senderProfile.url}
              </TextAtom>
            </Link>
          </Styled.ProfileName>

          <Styled.SentAt>
            <Link
              to={ROUTES.get('PROFILE').PATH.replace(':url', senderProfile.url)}
            >
              <TextAtom fc="textWeak" fs="8px">
                12 hours ago
              </TextAtom>
            </Link>
          </Styled.SentAt>
        </span>
      </Styled.PostHeader>

      <Styled.PostContent>
        <TextAtom fc="link" fs="12px">
          #newpfp
        </TextAtom>

        <PictureAtom
          src={senderProfile.picture}
          alt={senderProfile.name}
          squared
        />
      </Styled.PostContent>
    </Styled.Post>
  )
}
