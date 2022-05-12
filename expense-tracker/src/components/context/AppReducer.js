export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        // ...state, // Unnecessary
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        // ...state, // Unnecessary
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};
