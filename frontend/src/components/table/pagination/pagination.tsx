import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import styles from "./pagination.module.css";
import Button from "components/atoms/button";

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

  return (
    <div className={styles.paginationList}>
      <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        <ChevronDoubleLeftIcon className={styles.icon} />
      </Button>
      <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
        <ChevronLeftIcon className={styles.icon} />
      </Button>
      <Button onClick={() => nextPage()} disabled={!canNextPage}>
        <ChevronRightIcon className={styles.icon} />
      </Button>
      <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        <ChevronDoubleRightIcon className={styles.icon} />
      </Button>
      <div className={styles.paginationText}>
        Page <strong>{pageIndex + 1}</strong>{" "}
      </div>
      <div className={styles.paginationChoosePage}>
        <label
          htmlFor="pagination_page"
          className={styles.paginationChoosePageLabel}
        >
          | Go to page:{"     "}
        </label>
        <input
          type="number"
          id="pagination_page"
          value={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex flex-col w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
