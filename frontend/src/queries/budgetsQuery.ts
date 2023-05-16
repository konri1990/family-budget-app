import axios from "axios";
import { Budget } from "components/table/domain";

export type BudgetQuery = {
  pageSize: number;
  page: number;
};

export const getBudgets = async (query: BudgetQuery) => {
  const { page, pageSize } = query;
  const response = await axios.get<Budget[]>(
    `/Budget?pageSize=${pageSize}&page=${page}`
  );
  return response.data;
};
