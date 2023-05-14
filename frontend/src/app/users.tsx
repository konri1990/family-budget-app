import Menu from "components/menu/menu";
import {
  familyMembersColumns,
  familyMembersData,
} from "components/table/dummy";
import Table from "components/table/table";
import { useMemo } from "react";

import styles from "./users.module.css";

const Users = () => {
  const data = useMemo(() => familyMembersData(), []);

  const columns = useMemo(() => familyMembersColumns(), []);

  return (
    <>
      <section className={styles.tableContainer}>
        <Table columns={columns} data={data} />
      </section>
    </>
  );
};

export default Users;
