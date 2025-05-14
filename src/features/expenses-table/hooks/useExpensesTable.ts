import { useEffect, useState } from "react";
import useExpensesStore from "../../../app/stores/expenses-store";
import type { TExpenseCategory } from "../../../app/types";
import { EExpenseCategory } from "../../../app/enums";
type TSortDirection = "asc" | "desc";

const useExpensesTable = () => {
  const { expenses, deleteExpense } = useExpensesStore();
  const [visibleData, setVisibleData] = useState(() => expenses);
  const [currentFilter, setCurrentFilter] = useState<string>("all");
  const [currentSortDirection, setSortDirection] =
    useState<TSortDirection>("desc");

  const categories: TExpenseCategory[] = [];

  for (const item in EExpenseCategory) {
    categories.push({
      name: EExpenseCategory[item as keyof typeof EExpenseCategory],
      value: item,
    });
  }

  const handleFilterExpense = (category: string) => {
    setCurrentFilter(category);
  };

  const handleSort = (e: React.MouseEvent) => {
    e.preventDefault();
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const applyFilterAndSort = (
    initialData: any[],
    filter: string,
    sortDir: TSortDirection
  ) => {
    let filteredData = [...initialData];
    if (filter === "all") {
      filteredData = filteredData;
    } else {
      filteredData = filteredData.filter(
        (item) => item.category && String(item.category) === filter
      );
    }
    switch (sortDir) {
      case "asc":
        filteredData.sort((a, b) => {
          if (a.date && b.date) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          }
          return 0;
        });
        break;
      case "desc":
        filteredData.sort((a, b) => {
          if (a.date && b.date) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          }
          return 0;
        });
        break;
      default:
        return filteredData;
    }
    return filteredData;
  };
  useEffect(() => {
    setVisibleData(
      applyFilterAndSort(expenses, currentFilter, currentSortDirection)
    );
  }, [currentFilter, currentSortDirection, expenses]);

  return {
    visibleData,
    categories,
    currentSortDirection,
    handleSort,
    handleFilterExpense,
    deleteExpense,
  };
};

export default useExpensesTable;
