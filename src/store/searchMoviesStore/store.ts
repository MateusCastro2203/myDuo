// store.ts
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // Se estiver usando middlewares, como redux-thunk
import rootReducer from './reducers';
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
