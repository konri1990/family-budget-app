import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import styles from "./pagination.module.css";
import Button from "components/atoms/button";
import { useMemo } from "react";

export interface IPaginationProps {
  gotoPage: (pageIndex: number) => void;
  previousPage: () => void;
  nextPage: () => void;
  setPageSize: (pageIndex: number) => void;
  pageSize: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  pageIndex: number;
}

export const Pagination = (props: IPaginationProps) => {
  const {
    gotoPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    pageIndex,
    previousPage,
    nextPage,
    setPageSize,
    pageSize,
  } = props;

  const isPreviousButtonDisabled: boolean = useMemo(() => {
    return pageIndex >= 2 && !canPreviousPage;
  }, [pageIndex, canPreviousPage]);

  return (
    <div className={styles.paginationList}>
      <Button onClick={() => gotoPage(1)} disabled={isPreviousButtonDisabled}>
        <ChevronDoubleLeftIcon className={styles.icon} />
      </Button>
      <Button
        onClick={() => previousPage()}
        disabled={isPreviousButtonDisabled}
      >
        <ChevronLeftIcon className={styles.icon} />
      </Button>
      <Button onClick={() => nextPage()} disabled={!canNextPage}>
        <ChevronRightIcon className={styles.icon} />
      </Button>
      <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        <ChevronDoubleRightIcon className={styles.icon} />
      </Button>
      <div className={styles.paginationText}>
        Page <strong>{pageIndex}</strong>{" "}
      </div>
      <div className={styles.paginationChoosePage}>
        <label
          htmlFor="pagination_page"
          className={styles.paginationChoosePageLabel}
        >
          | Go to page:{" "}
        </label>
        <input
          type="number"
          id="pagination_page"
          value={pageIndex}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) : 1;
            gotoPage(page <= 0 ? 1 : page);
          }}
          className={styles.paginationSelectPage}
          placeholder="Select page..."
        />
      </div>{" "}
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[3, 5, 10, 15, 20].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};
