// ======== state interface ========
export type TreeNode = {
  key: string;
  type: string;
  children?: TreeNode[];
} | string;

export type TreeState = TreeNode[];

export interface Handler<P = any> {
  name: string;
  parameters: P;
}

export interface ElementNode {
  key: string; // TODO: rethink global state
  [otherProperty: string]: Handler | any;
}

export interface ElementState {
  [key: string]: ElementNode;
}

// ======== Payload interface ========
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
