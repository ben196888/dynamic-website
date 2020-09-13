import React from 'react';
import { ElementState, TreeNode } from '../store/reducers/types';
import MyComponent from '../components/MyComponent';

const mapToComponent: { [name: string]: () => JSX.Element; } = {
  [MyComponent.name]: MyComponent,
};

function factory(treeNode: (TreeNode | string), nodeMap: ElementState): JSX.Element | string {
  if (typeof treeNode === 'string') {
    return treeNode;
  }
  const type = mapToComponent[treeNode.type] || treeNode.type;
  const attributesAndProps = nodeMap[treeNode.key] || null;
  const children = (treeNode.children || [])
    .map((child) => factory(child, nodeMap));
  return React.createElement(type, attributesAndProps, ...children);
}

export default factory;
