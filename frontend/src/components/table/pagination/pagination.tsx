import { ReactElement, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface IPaginationButtonProps {
  content: number | ReactElement;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
}

import styles from "./pagination.module.css";
import Button from "components/atoms/button";

const PaginationButton = (props: IPaginationButtonProps) => {
  return (
    <Button onClick={props.onClick} disabled={props.disabled}>
      {props.content}
    </Button>
  );
};

export interface IPaginationProps {
  gotoPage: (pageIndex: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  pageIndex: number;
}

export const Pagination = (props: IPaginationProps) => {
  const { gotoPage, canPreviousPage, canNextPage, pageCount, pageIndex } =
    props;

  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null;
    const visiblePageButtonCount = 3;
    let numberOfButtons =
      pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
    const pageIndices = [pageIndex];
    numberOfButtons--;
    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1;
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
      if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore);
      } else {
        pageIndices.push(pageNumberAfter);
      }
    });
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <PaginationButton
          content={pageIndexToMap + 1}
          onClick={() => gotoPage(pageIndexToMap)}
          active={pageIndex === pageIndexToMap}
        />
      </li>
    ));
  }, [pageCount, pageIndex, gotoPage]);

  return (
    <ul className={styles.paginationList}>
      <li>
        <PaginationButton
          content={
            <div className={styles.icon}>
              <ChevronLeftIcon />
            </div>
          }
          onClick={() => gotoPage(0)}
          disabled={canPreviousPage}
        />
      </li>
      {renderPageLinks()}
      <li>
        <PaginationButton
          content={
            <div className={styles.icon}>
              <ChevronRightIcon />
            </div>
          }
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </li>
    </ul>
  );
};
