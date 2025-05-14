import { type ChangeEvent } from "react";
import type { TExpenseCategory } from "../../../app/types";
import cn from "classnames";

import s from "./categories-list.module.scss";
import useExpensesStore from "../../../app/stores/expenses-store";

type TCategoriesListProps = {
  items: TExpenseCategory[];
  onSelectCategory: (value: string) => void;
};

const CategoriesList: React.FC<TCategoriesListProps> = ({
  items,
  onSelectCategory,
}) => {
  const { getCurrentCategory } = useExpensesStore();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    onSelectCategory(e.target.value);
  };

  return (
    <div className={s.list}>
      {items.map((item, index) => {
        const checked = item.value === getCurrentCategory();
        return (
          <div key={index} >
            <input
              className={s.category}
              type="radio"
              id={item.name}
              name={item.name}
              value={item.value}
              onChange={handleClick}
              checked={checked}
            />
            <label
              className={cn(s.categoryLabel, {
                [s.categoryLabelActive]: checked,
              })}
              htmlFor={item.name}
            >
              {item.icon ?? item.icon} {item.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};
export default CategoriesList;
