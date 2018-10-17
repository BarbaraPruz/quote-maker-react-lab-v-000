export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [ ...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter( quote => quote.id !== action.id);
    case "UPVOTE_QUOTE":
      let idx = state.findIndex( (quote) => quote.id === action.id)
      return state.map ( function (quote, index) {
        if (index === idx) quote.votes++
        return quote;
      });
    case "DOWNVOTE_QUOTE":
      let idx = state.findIndex( (quote) => quote.id === action.id)
      return state.map ( function (quote, index) {
        if ((index === idx) && (quote.votes > 0))quote.votes--
        return quote;
      });
    default:
      return state;
  }

}
