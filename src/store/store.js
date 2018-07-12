import createStore from "react-waterfall";
import merge from "lodash/merge";

import countStore from "./countStore";

const store = merge(countStore);

export const { Provider, connect, actions } = createStore(store);
