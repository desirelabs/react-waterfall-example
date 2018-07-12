import createStore from 'react-waterfall'
import initialState from './state'
import actionsCreators from './actions'

const store = {
  initialState,
  actionsCreators
}

export const { Provider, connect, actions } = createStore(store)
