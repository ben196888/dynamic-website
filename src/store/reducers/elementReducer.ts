import {
  Element, SET_ELEMENTS, ElementState, ElementActionTypes,
} from './types';

const elementReducer = (state: ElementState = {}, action: ElementActionTypes) => {
  switch (action.type) {
    case SET_ELEMENTS: {
      const reducer = (s: ElementState, element: Element): ElementState => {
        if (typeof element === 'string') {
          return s;
        }
        const { children, ...value } = element;
        const newS = {
          ...s,
          [element.key]: value,
        };
        if (!children) { return newS; }
        return children.reduce(reducer, newS);
      };
      return action.payload.reduce(reducer, state);
    }
    default: return state;
  }
};

export default elementReducer;
