import styled from 'styled-components'

export const PostsList = styled.div`
  display: flex;
  flex-flow: column;

  width: 100%;
`

export const PostsListHeader = styled.div`
  display: flex;
  place-items: center;
  place-content: space-between;

  padding: 8px;

  > div {
    max-width: 120px;
  }
`
