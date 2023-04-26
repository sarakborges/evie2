import styled from 'styled-components'

export const Post = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;

  width: 100%;
`

export const PostHeader = styled.div`
  display: flex;
  place-items: center;
  gap: 12px;

  padding: 8px;
  width: 100%;

  border-width: 1px 0;

  img {
    border-radius: 100%;
  }

  > span {
    display: flex;
    flex-flow: column;
    gap: 4px;

    max-width: 100%;
    overflow: hidden;

    color: var(--textWeak);
  }
`

export const ProfileName = styled.span`
  > a {
    display: inline-block;

    overflow: hidden;
    max-width: 100%;

    text-overflow: ellipsis;

    > p {
      display: inline;

      white-space: nowrap;
      line-height: 1.5;
    }
  }
`

export const SentAt = styled.span`
  display: flex;

  > a {
    display: inline-flex;
  }
`

export const PostContent = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;

  > p {
    padding: 0 12px;
  }

  > img {
    width: 100%;
  }
`
