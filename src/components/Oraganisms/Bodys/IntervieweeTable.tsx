/* eslint-disable react/jsx-key */
import React from 'react'
import { usePagination, useTable } from 'react-table'

import {
  MovePageButton,
  PageNumber,
  PageText,
  PaginationWrap,
  TableContent,
  TableWrap
} from './IntervieweeTable.style'

export default function IntervieweeTable({ columns, data, onClickList }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    usePagination
  )
  return (
    <TableWrap>
      <TableContent {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, idx) => {
            prepareRow(row)
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => {
                  onClickList(pageIndex * 10 + idx)
                }}
              >
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </TableContent>
      <PaginationWrap>
        <MovePageButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </MovePageButton>
        <MovePageButton
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </MovePageButton>
        <MovePageButton onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </MovePageButton>
        <MovePageButton
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </MovePageButton>
        <PageText>
          Page
          <PageNumber>
            {pageIndex + 1} of {pageOptions.length}
          </PageNumber>
        </PageText>
      </PaginationWrap>
    </TableWrap>
  )
}
