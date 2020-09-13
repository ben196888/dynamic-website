export type TreeNode = {
  key: string;
  type: string;
  children?: TreeNode[];
} | string;

export type TreeState = TreeNode[];

interface ElementNode {
  key: string; // TODO: rethink global state
  [otherProperty: string]: any;
}

export interface ElementState {
  [key: string]: ElementNode;
}

export interface ElementObject {
  type: string;
  key: string; // TODO: rethink global state
  children?: Element[];
  [otherProperty: string]: any;
}

export type Element = ElementObject | string;

export const SET_ELEMENTS = 'SET_ELEMENTS';

interface SetElementsAction {
  type: typeof SET_ELEMENTS;
  payload: Element[];
}

export type ElementActionTypes = SetElementsAction;
