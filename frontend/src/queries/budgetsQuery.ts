import axios from "axios";
import { Budget, BudgetItem } from "components/table/domain";
import { PagedQuery } from "./utils";

export type BudgetQuery = PagedQuery;

export const getBudgets = async (query: BudgetQuery) => {
  const { page, pageSize } = query;
  const response = await axios.get<Budget[]>(
    `/Budget?pageSize=${pageSize}&page=${page}`
  );
  return response.data;
};

export type BudgetDetailQuery = PagedQuery & { budgetId: number };

export const getBudgetDetails = async (query: BudgetDetailQuery) => {
  const { budgetId, page, pageSize } = query;
  const response = await axios.get<BudgetItem[]>(
    `/Budget/${budgetId}?pageSize=${pageSize}&page=${page}`
  );
  return response.data;
};
