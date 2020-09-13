import { SET_ELEMENTS, ElementActionTypes, Element } from './types';

export const setElements = (elements: Element[]): ElementActionTypes => ({
  type: SET_ELEMENTS,
  payload: elements,
});

export default {
  setElements,
};
