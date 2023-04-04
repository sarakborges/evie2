import styled from 'styled-components'

export const Stories = styled.div`
  display: flex;
  gap: 12px;

  width: 100%;
  padding: 0 8px 16px;
  overflow: auto;

  button {
    min-width: 60px;
    aspect-ratio: 1;
    padding: 1px;

    border: 2px solid var(--formFieldBorder);

    img {
      width: 100%;
      min-width: 100%;

      border-radius: 100%;
    }
  }
`

export const UserProfileStory = styled.div`
  button {
    border: 2px solid var(--userProfileStoryBorder);
  }
`
