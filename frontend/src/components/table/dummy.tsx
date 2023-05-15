import { Column } from "react-table";

export enum UserRole {
  Admin = 0,
  Member = 1,
}

export type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
};

export const familyMembersColumns = () => {
  const data: Column[] = [
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
  ];

  return data;
};
