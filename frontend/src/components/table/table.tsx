import { useEffect } from "react";
import { Column, usePagination, useTable } from "react-table";

import styles from "./table.module.css";
import { Pagination } from "./pagination/pagination";

export interface ITableProps<T> {
  columns: Column[];
  data: T[];
  setQueryPageIndex: (page: number) => void;
  setQueryPageSize: (page: number) => void;
  queryPageIndex: number;
  queryPageSize: number;
  isError: boolean;
  isLoading: boolean;
}

const Table = <T extends object>(props: ITableProps<T>) => {
  const {
    data,
    columns,
    setQueryPageIndex,
    queryPageIndex,
    setQueryPageSize,
    queryPageSize,
    isError,
    isLoading,
  } = props;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: columns,
      data: data || [],
      manualPagination: true,
      initialState: {
        pageIndex: queryPageIndex,
        pageSize: queryPageSize,
      },
      pageCount: 10,
    },
    usePagination
  );

  useEffect(() => {
    setQueryPageIndex(pageIndex);
  }, [pageIndex, setQueryPageIndex]);

  useEffect(() => {
    setQueryPageSize(pageSize);
  }, [pageSize, setQueryPageSize]);

  if (isError) {
    return (
      <div>
        <p>Cannot load data to the table... :(</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <p className={styles.loading}>Loading...</p>
      </div>
    );
  }

  if (data?.length === 0) {
    return (
      <div>
        <p className={styles.noData}>There is no data in table...</p>
      </div>
    );
  }

  return (
    <>
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
          nextPage={nextPage}
          pageSize={pageSize}
          previousPage={previousPage}
          setPageSize={setPageSize}
        />
      </div>
    </>
  );
};

export default Table;
