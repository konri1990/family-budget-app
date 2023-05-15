import { User, familyMembersColumns } from "components/table/dummy";
import Table from "components/table/table";
import { useMemo, useState } from "react";

import styles from "./users.module.css";

import { useQuery } from "react-query";
import { UserQuery, getUsers } from "queries/usersQuery";

const Users = () => {
  const [queryPageIndex, setPageSize] = useState<number>(1);
  const [queryPageSize, setPage] = useState<number>(3);
  const { isLoading, error, data, isSuccess } = useQuery<User[], Error>(
    ["users", queryPageIndex, queryPageSize],
    () =>
      getUsers({ pageSize: queryPageSize, page: queryPageIndex } as UserQuery),
    {
      keepPreviousData: true,
      staleTime: Infinity,
    }
  );

  const columns = useMemo(() => familyMembersColumns(), []);

  if (error) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className={styles.tableContainer}>
        {isSuccess && (
          <Table
            columns={columns}
            data={data}
            setQueryPageIndex={setPageSize}
            queryPageIndex={queryPageIndex}
            queryPageSize={queryPageSize}
            setQueryPageSize={setPage}
          />
        )}
      </section>
    </>
  );
};

export default Users;
