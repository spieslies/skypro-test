import { EExpenseCategory } from "../../app/enums";
import { ArrowDown, ArrowUp, Trash2 } from "lucide-react";

import s from "./expenses-table.module.scss";
import useExpensesTable from "./hooks/useExpensesTable";

const ExpensesTable = () => {
  const {
    categories,
    visibleData,
    currentSortDirection,
    handleSort,
    handleFilterExpense,
    deleteExpense,
  } = useExpensesTable();

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
              {categories.map((item, index) => (
                <option key={index} className={s.option} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className={s.tableActionsItem}>
            Сортировать по
            <a href="" onClick={(e) => handleSort(e)}>
              дате
            </a>
            {currentSortDirection === "asc" ? (
              <ArrowUp size={12} />
            ) : (
              <ArrowDown size={12} />
            )}
          </div>
        </div>
      </header>
      <div className={s.tableContent}>
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
      </div>
    </section>
  );
};

export default ExpensesTable;
