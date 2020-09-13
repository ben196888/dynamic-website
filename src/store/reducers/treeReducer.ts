import {
  Element, SET_ELEMENTS, TreeState, TreeNode, ElementActionTypes,
} from './types';

const treeReducer = (state: TreeState = [], action: ElementActionTypes) => {
  switch (action.type) {
    case SET_ELEMENTS: {
      const mapper = (e: Element): (TreeNode | string) => {
        if (typeof e === 'string') { return e; }
        if (!e.children) { return { key: e.key, type: e.type }; }
        return {
          key: e.key,
          type: e.type,
          children: e.children.map(mapper),
        };
      };
      return action.payload.map(mapper);
    }
    default: return state;
  }
};

export default treeReducer;
