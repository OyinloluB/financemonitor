import expenseUserTypes from "./expense.types";

export const registerExpenseStart = () => ({
  type: expenseUserTypes.REGISTER_EXPENSE_START,
});

export const registerExpenseSuccess = (expense, id) => ({
  type: expenseUserTypes.REGISTER_EXPENSE_SUCCESS,
  payload: {
    id: id,
    date: expense.date,
    amount: expense.amount,
  },
});

export const registerExpenseFailure = (error) => ({
  type: expenseUserTypes.REGISTER_EXPENSE_FAILURE,
  payload: error,
});

export const registerExpense = (expense, id) => {
  return (dispatch) => {
    return new Promise(async (reject) => {
      dispatch(registerExpenseStart());
      try {
        console.log(id);
        dispatch(registerExpenseSuccess(expense, id));
      } catch (error) {
        dispatch(registerExpenseFailure(error));
        reject(error);
      }
    });
  };
};
