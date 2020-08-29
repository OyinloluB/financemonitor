import expenseUserTypes from "./expense.types";

const initialState = {
  expenses: [
    {
      item: "Food",
      date: "",
      amount: 0.0,
      id: 0,
    },
    {
      item: "Internet",
      date: "",
      amount: 0.0,
      id: 1,
    },
    {
      item: "Repairs",
      date: "",
      amount: 0.0,
      id: 2,
    },
    {
      item: "Housing",
      date: "",
      amount: 0.0,
      id: 3,
    },
    {
      item: "Electronics",
      date: "",
      amount: 0.0,
      id: 4,
    },
    {
      item: "Clothing",
      date: "",
      amount: 0.0,
      id: 5,
    },
  ],
  loading: false,
  error: null,
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case expenseUserTypes.REGISTER_EXPENSE_START:
      return {
        ...state,
        loading: true,
      };
    case expenseUserTypes.REGISTER_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: [
          ...state.expenses.map((expense) => {
            if (expense.id === action.payload.id) {
              return {
                ...expense,
                amount: action.payload.amount,
                date: action.payload.date,
              };
            }
            return expense;
          }),
        ],
        loading: false,
        error: null,
      };
    case expenseUserTypes.REGISTER_EXPENSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default expenseReducer;
