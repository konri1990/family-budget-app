import axios from "axios";
import { User } from "components/table/domain";

export type UserQuery = {
  pageSize: number;
  page: number;
};

export const getUsers = async (query: UserQuery) => {
  const { page, pageSize } = query;
  const response = await axios.get<User[]>(
    `/User?pageSize=${pageSize}&page=${page}`
  );
  return response.data;
};
