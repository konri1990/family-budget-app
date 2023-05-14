import { useEffect } from "react";
import { User } from "./dummy";
import { Column, usePagination, useTable } from "react-table";

import styles from "./table.module.css";
import { Pagination } from "./pagination/pagination";

export interface ITableProps {
  columns: Column[];
  data: User[];
}

const Table = (props: ITableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    // nextPage,
    // previousPage,
    setPageSize,
  } = useTable(
    {
      columns: props.columns,
      data: props.data,
    },
    usePagination
  );

  const { pageIndex } = state;

  useEffect(() => {
    setPageSize(3);
  }, [setPageSize]);

  return (
    <div className={styles.table}>
      <table {...getTableProps()} className={styles.tableProps}>
        <thead className="bg-gray-10">
          {headerGroups.map((headerGroup, rowIndex) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={rowIndex}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  {...column.getHeaderProps()}
                  key={columnIndex}
                  className={styles.headerColumnProps}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className={styles.tableBody}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i} className={styles.row}>
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      key={cellIndex}
                      className={styles.cell}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        gotoPage={gotoPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    </div>
  );
};

export default Table;
