import { User, UserRole } from "components/table/domain";
import Table from "components/table/table";
import { useMemo, useState } from "react";

import styles from "./users.module.css";

import { useQuery } from "react-query";
import { UserQuery, getUsers } from "queries/usersQuery";
import { Column } from "react-table";

const Users = () => {
  const [queryPageIndex, setPageSize] = useState<number>(1);
  const [queryPageSize, setPage] = useState<number>(3);
  const { isLoading, data, isError } = useQuery<User[], Error>(
    ["users", queryPageIndex, queryPageSize],
    () =>
      getUsers({ pageSize: queryPageSize, page: queryPageIndex } as UserQuery),
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
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "role",
        Cell: (props: { value: number }) => {
          return <span>{UserRole[props.value]}</span>;
        },
      },
    ],
    []
  );

  return (
    <>
      <section className={styles.tableContainer}>
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
      </section>
    </>
  );
};

export default Users;
