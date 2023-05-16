import { BudgetItem, BudgetItemType } from "components/table/domain";
import Table from "components/table/table";
import { BudgetDetailQuery, getBudgetDetails } from "queries/budgetsQuery";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { Column } from "react-table";

import styles from "./budgets.module.css";
import { useParams } from "react-router-dom";

type BudgetRoute = {
  budgetId: string;
};

const BudgetDetails = () => {
  const [queryPageIndex, setPageSize] = useState<number>(1);
  const [queryPageSize, setPage] = useState<number>(3);
  const { budgetId } = useParams<BudgetRoute>();
  const { isLoading, isError, data, isSuccess } = useQuery<BudgetItem[], Error>(
    ["budgetsDetails", queryPageIndex, queryPageSize, budgetId],
    () =>
      getBudgetDetails({
        budgetId: Number(budgetId) || 0,
        pageSize: queryPageSize,
        page: queryPageIndex,
      } as BudgetDetailQuery),
    {
      keepPreviousData: false,
      staleTime: Infinity,
    }
  );

  const columns: Column[] = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Value",
        accessor: "value",
      },
      {
        Header: "Type",
        accessor: "type",
        Cell: (props: { value: number }) => {
          return <span>{BudgetItemType[props.value]}</span>;
        },
      },
    ],
    []
  );

  return (
    <>
      <section className={styles.tableContainer}>
        {isSuccess && (
          <Table
            columns={columns}
            data={data || []}
            setQueryPageIndex={setPageSize}
            queryPageIndex={queryPageIndex}
            queryPageSize={queryPageSize}
            setQueryPageSize={setPage}
            isError={isError}
            isLoading={isLoading}
          />
        )}
      </section>
    </>
  );
};

export default BudgetDetails;
