
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


// Session Storage is used to persist Store in Redux
function saveToSessionStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState)
  }
  catch (e) {
    console.log(e);
  }
}
function loadFromSessionStorage() {
  try {
    const serializedState = sessionStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  }
  catch (e) {
    console.log(e);
  }
}
const persistedState = loadFromSessionStorage();

const middleware = [
  thunk
]
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, persistedState, withDevTools(
  applyMiddleware(...middleware)
))

store.subscribe(() => { saveToSessionStorage(store.getState()) });

export default store;