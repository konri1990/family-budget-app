import { Budget, BudgetItem, BudgetItemType } from "components/table/domain";
import Table from "components/table/table";
import { BudgetQuery, getBudgets } from "queries/budgetsQuery";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { Column } from "react-table";

import styles from "./budgets.module.css";
import { Link } from "react-router-dom";

const Budgets = () => {
  const [queryPageIndex, setPageSize] = useState<number>(1);
  const [queryPageSize, setPage] = useState<number>(3);
  const { isLoading, isError, data, isSuccess } = useQuery<Budget[], Error>(
    ["budgets", queryPageIndex, queryPageSize],
    () =>
      getBudgets({
        pageSize: queryPageSize,
        page: queryPageIndex,
      } as BudgetQuery),
    {
      keepPreviousData: true,
      staleTime: Infinity,
    }
  );

  const columns: Column[] = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
        Cell: (props: { value: number }) => {
          return <Link to={"/budget/" + props.value}>{props.value}</Link>;
        },
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Owner",
        accessor: "owner.name",
      },
      {
        Header: "Budget Value",
        accessor: "items",
        Cell: (props: { value: BudgetItem[] }) => {
          const sum = props.value.reduce((accumulator, budgetItem) => {
            if (budgetItem.type === BudgetItemType.Expense)
              return accumulator - budgetItem.value;
            if (budgetItem.type === BudgetItemType.Income)
              return accumulator + budgetItem.value;
            return 0;
          }, 0);
          return <span>{sum}</span>;
        },
      },
    ],
    []
  );

  return (
    <>
      <Link to={"/budgets"}> Budgets </Link>;
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

export default Budgets;
