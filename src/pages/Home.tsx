import AddExpenseForm from "../features/add-expense/AddExpense";
import ExpensesTable from "../features/expenses-table/ExpensesTable";
import DefaultLayout from "../shared/layouts/DefaultLayout";
import Grid from "../shared/ui/grid/Grid";

const HomePage = () => {
  return (
    <DefaultLayout>
      <h1>Мои расходы</h1>
      <Grid>
        <ExpensesTable />
        <AddExpenseForm />
      </Grid>
    </DefaultLayout>
  );
};

export default HomePage;
