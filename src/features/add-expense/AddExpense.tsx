import { EExpenseCategory } from "../../app/enums";
import type { TExpenseCategory } from "../../app/types";
import Button from "../../shared/ui/button/Button";
import Input from "../../shared/ui/input/Input";
import styles from "./add-expense.module.scss";
import CategoriesList from "./components/CategoriesList";
import useAddExpense from "./hooks/useAddExpense";

import {
  Hamburger,
  GraduationCap,
  Drama,
  StickyNote,
  Hotel,
  Bus,
} from "lucide-react";

const categories: TExpenseCategory[] = [];

const iconsMap = {
  [EExpenseCategory.FOOD]: <Hamburger size={14} />,
  [EExpenseCategory.EDUCATION]: <GraduationCap size={14}/>,
  [EExpenseCategory.FUN]: <Drama size={14}/>,
  [EExpenseCategory.MISC]: <StickyNote size={14}/>,
  [EExpenseCategory.RENT]: <Hotel size={14}/>,
  [EExpenseCategory.TRANSPORT]: <Bus size={14}/>,
};

for (const item in EExpenseCategory) {
  categories.push({
    name: EExpenseCategory[item as keyof typeof EExpenseCategory],
    value: item,
    icon: iconsMap[
      EExpenseCategory[
        item as keyof typeof EExpenseCategory
      ] as keyof typeof iconsMap
    ],
  });
}

const AddExpenseForm = () => {
  const {
    handleDescriptionChange,
    handleCategorySelect,
    handleDateChange,
    handleSumChange,
    handleAddExpense,
  } = useAddExpense();

  return (
    <section className={styles.addExpense}>
      <h1 className={styles.addExpenseTitle}>Новый расход</h1>
      <div className={styles.field}>
        <Input
          name="description"
          label="Описание"
          placeholder="Введите описание"
          onChange={handleDescriptionChange}
        />
      </div>
      <div className={styles.field}>
        <CategoriesList
          items={categories}
          onSelectCategory={handleCategorySelect}
        />
      </div>
      <div className={styles.field}>
        <Input
          name="date"
          label="Дата"
          placeholder="Введите дату"
          type="date"
          onChange={handleDateChange}
        />
      </div>
      <div className={styles.field}>
        <Input
          name="sum"
          label="Сумма"
          placeholder="Введите сумму"
          type="number"
          onChange={handleSumChange}
        />
      </div>
      <div className={styles.field}>
        <Button onClick={handleAddExpense}>Добавить</Button>
      </div>
    </section>
  );
};

export default AddExpenseForm;
