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

export enum BudgetItemType {
  Income = 0,
  Expense = 1,
}

export type BudgetItem = {
  id: number;
  name: string;
  value: number;
  type: BudgetItemType;
};

export type Budget = {
  id: number;
  name: string;
  owner: User;
  role: UserRole;
  type: BudgetItemType;
  items: BudgetItem[];
};
