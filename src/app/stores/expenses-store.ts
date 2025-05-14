import { create } from "zustand";
import type { TExpense, TSum } from "../types";
import { mockExpenses } from "../mocks";

interface IExpensesState {
  expenses: TExpense[];
  newExpense: TExpense;
}

interface IExpensesStoreActions {
  addExpense: (newExpense: TExpense) => void;
  deleteExpense: (id: string) => void;
  setNewExpense: (data: string | TSum, field: keyof TExpense) => void;
  getCurrentCategory: () => any;
}

const useExpensesStore = create<IExpensesState & IExpensesStoreActions>()(
  (set, get) => ({
    expenses: mockExpenses,
    newExpense: {
      id: "",
      date: undefined,
      description: "",
      category: undefined,
      sum: undefined,
    },
    getCurrentCategory: () => get().newExpense.category,
    setNewExpense: (data: string | TSum, field: keyof TExpense) =>
      set((state) => ({ newExpense: { ...state.newExpense, [field]: data } })),
    addExpense: (newExpense) =>
      set((state) => ({ expenses: [...state.expenses, newExpense] })),
    deleteExpense: (id: string) =>
      set((state) => ({
        expenses: state.expenses.filter((item) => item.id !== id),
      })),
  })
);

export default useExpensesStore;
