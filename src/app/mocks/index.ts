import { faker } from "@faker-js/faker";
import type { TExpense, TSum } from "../types";
import { EExpenseCategory } from "../enums";

function createRandomExpense(): TExpense {
  return {
    id: faker.string.uuid(),
    date: faker.date.between({ from: "2025-01-01", to: Date.now() }),
    category: faker.helpers.arrayElement<string>(Object.keys(EExpenseCategory)),
    description: faker.lorem.word(),
    sum: faker.helpers.arrayElement<TSum>([
      {
        amount: faker.number.int({ max: 10000, min: 100 }),
        currency: "₽",
      },
    ]),
  };
}

export const mockExpenses = faker.helpers.multiple(createRandomExpense, {
  count: 10,
});
