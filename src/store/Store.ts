import {
  createStore, combineReducers, compose,
} from 'redux';
import treeReducer from './reducers/treeReducer';
import { TreeState, ElementState } from './reducers/types';
import elementReducer from './reducers/elementReducer';

export interface State {
  tree: TreeState;
  elements: ElementState;
}

export const rootReducer = combineReducers<State>({
  tree: treeReducer,
  elements: elementReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(rootReducer, composeEnhancers());
