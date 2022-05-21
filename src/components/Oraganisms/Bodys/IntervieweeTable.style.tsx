import styled from '@emotion/styled'

export const TableWrap = styled.div`
  padding: 16px 24px;
  border-radius: 16px;
  background-color: white;
  width: fit-content;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const TableContent = styled.table`
  border-collapse: collapse;

  tr {
    text-align: center;
    border-bottom: 1px solid black;
    cursor: pointer;
  }

  th {
    margin: 0;
    padding: 0.5rem;
    font-weight: bold;
    border-bottom: 2px solid black;
    :last-child {
      border-right: 0;
    }
  }

  td {
    margin: 0;
    padding: 8px 32px;

    :last-child {
      border-right: 0;
    }
  }
`

export const PaginationWrap = styled.div`
  display: flex;
  margin-top: 16px;
`

export const MovePageButton = styled.button`
  margin: 0 4px;
`

export const PageText = styled.span`
  display: flex;
`

export const PageNumber = styled.div`
  margin-left: 4px;
  font-weight: 800;
`
