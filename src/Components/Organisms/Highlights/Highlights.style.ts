import styled from 'styled-components'

export const HighlightsWrapper = styled.div`
  width: 100%;
`

export const HighlightsListHeader = styled.div`
  display: flex;
  place-items: center;
  place-content: space-between;

  padding: 8px;

  > div {
    max-width: 120px;
  }
`

export const Highlights = styled.div`
  display: flex;
  gap: 12px;

  width: calc(100% - 16px);
  min-height: 84px;
  padding: 8px 0 16px;
  margin: 0 8px;
  overflow: auto;
  scroll-snap-type: x mandatory;

  button {
    min-width: 60px;
    aspect-ratio: 1;
    padding: 2px;
    scroll-snap-align: start;

    img {
      width: 100%;
      min-width: 100%;

      border-radius: 100%;
    }
  }
`

interface StoryItemProps {
  isSelf?: boolean
}
export const StoryItem = styled.div<StoryItemProps>`
  display: flex;
  flex-flow: column;
  gap: 8px;

  > p {
    max-width: 60px;
    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button {
    width: 60px;

    border: 2px solid
      var(
        --${({ isSelf }) => (isSelf ? `userProfileStoryBorder` : `formFieldBorder`)}
      );
  }
`
