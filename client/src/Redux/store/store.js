import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/reducer';
import thunk from 'redux-thunk';

// se usa para manejar la extension de chrome de redux deevtools
const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk)),
);

export default store;