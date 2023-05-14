import { Column } from "react-table";

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export const familyMembersData = () => {
  const data: User[] = [
    {
      id: 1,
      name: "Test User 1",
      email: "testuser1@gmail.com",
      role: "admin",
    },
    {
      id: 2,
      name: "Test User 2",
      email: "testuser2@gmail.com",
      role: "member",
    },
    {
      id: 3,
      name: "Test User 3",
      email: "testuser3@gmail.com",
      role: "member",
    },
    {
      id: 4,
      name: "Test User 4",
      email: "testuser4@gmail.com",
      role: "member",
    },
    {
      id: 5,
      name: "Test User 5",
      email: "testuser5@gmail.com",
      role: "member",
    },
    {
      id: 6,
      name: "Test User 6",
      email: "testuser6@gmail.com",
      role: "member",
    },
    {
      id: 7,
      name: "Test User 7",
      email: "testuser7@gmail.com",
      role: "member",
    },
    {
      id: 8,
      name: "Test User 8",
      email: "testuser8@gmail.com",
      role: "member",
    },
  ];
  return data;
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
    },
  ];

  return data;
};
