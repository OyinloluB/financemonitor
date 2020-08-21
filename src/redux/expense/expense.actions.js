import expenseUserTypes from "./expense.types";

export const registerExpenseStart = () => ({
  type: expenseUserTypes.REGISTER_EXPENSE_START,
});

export const registerExpenseSuccess = (expense) => ({
  type: expenseUserTypes.REGISTER_EXPENSE_SUCCESS,
  payload: user,
});

export const registerExpenseFailure = (error) => ({
  type: expenseUserTypes.REGISTER_EXPENSE_FAILURE,
  payload: error,
});

export const registerExpense = (expense) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      dispatch(registerExpenseStart());
      try {
        dispatch(registerExpenseSuccess(expense));
      } catch (error) {
        dispatch(registerExpenseFailure(error));
        reject(error);
      }
    });
  };
};
