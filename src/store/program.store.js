const initialState = { count: 0 };
const actions = {
  increment: ({ count }) => ({ count: count + 1 }),
  reset: ({ count }) => ({ count: 0 })
};
const programStore = { initialState, actions };

export default programStore;
