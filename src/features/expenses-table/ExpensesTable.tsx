import { EExpenseCategory } from "../../app/enums";
import useExpensesStore from "../../app/stores/expenses-store";
import { Trash2 } from "lucide-react";

import s from "./expenses-table.module.scss";
import type { TExpenseCategory } from "../../app/types";
import { useEffect, useState } from "react";

const categories: TExpenseCategory[] = [];

for (const item in EExpenseCategory) {
  categories.push({
    name: EExpenseCategory[item as keyof typeof EExpenseCategory],
    value: item,
  });
}

const ExpensesTable = () => {
  const { expenses, deleteExpense } = useExpensesStore();
  const [visibleData, setVisibleData] = useState(expenses);

  const handleFilterExpense = (category: string) => {
    if (category === "all") {
      setVisibleData(expenses);
      return;
    }
    const filteredExpense = expenses.filter(
      (item) => item.category && String(item.category) === category
    );
    setVisibleData(filteredExpense);
  };

  const handleSort = (e: any) => {
    e.preventDefault();
    setVisibleData((prev) => [
      ...prev.sort(
        (a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime()
      ),
    ]);
  };

  useEffect(() => setVisibleData(expenses), [expenses]);

  return (
    <section className={s.tableWrapper}>
      <header className={s.header}>
        <h1 className={s.tableTitle}>Таблица расходов</h1>
        <div className={s.tableActions}>
          <div className={s.tableActionsItem}>
            Фильтровать по
            <select
              name="category"
              id="category"
              className={s.select}
              onChange={(e) => handleFilterExpense(e.target.value)}
            >
              <option className={s.option} value="all">
                Все
              </option>
              {categories.map((item) => (
                <option className={s.option} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className={s.tableActionsItem}>
            Сортировать по{" "}
            <a href="" onClick={handleSort}>
              дате
            </a>
          </div>
        </div>
      </header>
      <table className={s.table}>
        <thead className={s.tableHeader}>
          <tr>
            <th className={s.tableHeadCell}>Описание</th>
            <th className={s.tableHeadCell}>Категория</th>
            <th className={s.tableHeadCell}>Дата</th>
            <th className={s.tableHeadCell}>Сумма</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {visibleData.length ? (
            visibleData.map((expense) => {
              const { category, description, date, sum, id } = expense;
              return (
                <tr key={id} className={s.tableRow}>
                  <td className={s.tableCell}>{description}</td>
                  <td className={s.tableCell}>
                    {EExpenseCategory[category as keyof typeof category]}
                  </td>
                  <td className={s.tableCell}>
                    {date ? String(new Date(date).toLocaleDateString()) : "-"}
                  </td>
                  <td className={s.tableCell}>
                    {Number(sum?.amount).toLocaleString("ru-RU")}{" "}
                    {sum?.currency}
                  </td>
                  <td
                    className={s.tableCell}
                    style={{ textAlign: "right", paddingRight: 35 }}
                  >
                    <Trash2
                      className={s.action}
                      color={"#999"}
                      size={12}
                      onClick={() => deleteExpense(id)}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} className={s.noData}>
                Нет данных
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default ExpensesTable;
