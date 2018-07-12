import { initStore } from "react-waterfall";
import reduxDevTools from "react-waterfall-redux-devtools-middleware";
import merge from "lodash/merge";

import userStore from "./user.store.js";
import programStore from "./program.store.js";

const store = merge(userStore, programStore);

export const { Provider, connect } = initStore(store, reduxDevTools());
