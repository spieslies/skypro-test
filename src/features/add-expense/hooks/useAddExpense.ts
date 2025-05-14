import { type ChangeEvent } from "react";
import useExpensesStore from "../../../app/stores/expenses-store";
import { v4 as uuidv4 } from 'uuid';

const useAddExpense = () => {
  const { expenses, newExpense, addExpense, setNewExpense } =
    useExpensesStore();

  const handleCategorySelect = (value: string) => {
    setNewExpense(value, "category");
  };
  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewExpense(e.target.value, "description");
  };
  const handleSumChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewExpense({ amount: Number(e.target.value), currency: "₽" }, "sum");
  };
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewExpense(e.target.value, "date");
  };

  const handleAddExpense = () => {
    addExpense({...newExpense, id: uuidv4()});
  };

  return {
    handleCategorySelect,
    handleDescriptionChange,
    handleSumChange,
    handleDateChange,
    handleAddExpense,
    expenses,
    newExpense,
  };
};

export default useAddExpense;
