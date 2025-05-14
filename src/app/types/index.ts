export type TDefaultProps = {
  children?: React.ReactNode;
};

export type TSum = {
  amount: number;
  currency: "$" | "€" | "₽";
};

export type TExpense = {
  id: string;
  date: Date | undefined;
  category: string | undefined;
  description: string;
  sum: TSum | undefined;
};

export type TExpenseCategory = {
  name: string;
  icon?: any;
  value: string;
};
