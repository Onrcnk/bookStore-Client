import rootReducer from './Reducers/rootReducer';
import { createStore } from 'redux';

const store = createStore(
  rootReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export { store };
