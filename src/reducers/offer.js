import { GET_OFFERS } from "../actionTypes/offer";
import { Map, List } from "immutable";
function offerReducer(prevState = new Map({ offers: [] }), action) {
  console.log("offerReducer", action);
  switch (action.type) {
    case GET_OFFERS:
      let newState = prevState.set("offers", new List([{ offerId: 1 }]));
      console.log("newState", newState.toJS());
      return newState;
    default:
      return prevState;
  }
}

export default offerReducer;
