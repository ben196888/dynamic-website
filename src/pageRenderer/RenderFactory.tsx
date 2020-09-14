import React, { Attributes } from 'react';
import {
  ElementState, ElementNode, TreeNode, Handler,
} from '../store/reducers/types';
import MyComponent from '../components/MyComponent';
import alert from '../eventHandlers/alert';

const mapToHandler: { [name: string]: (parameters: Handler['parameters']) => any } = {
  [alert.name]: alert,
};

function getAttributesAndProps<P extends {}>(node: ElementNode): Attributes & P {
  return Object.keys(node)
    .reduce((attributesAndProps, key) => {
      if (/^on[A-Z]/.test(key)) {
        const handler: Handler = node[key];
        if (mapToHandler[handler.name]) {
          return {
            ...attributesAndProps,
            // TODO: find an elegant way to deal with events
            [key]: (/* event */) => mapToHandler[handler.name](handler.parameters),
          };
        }
        // eslint-disable-next-line no-console
        console.warn(`Handler: ${handler.name} not found. Please ensure you have registered the handler function in mapToHandler.`);
      }
      return {
        ...attributesAndProps,
        [key]: node[key],
      };
    }, {} as (Attributes & P));
}

const mapToComponent: { [name: string]: () => JSX.Element; } = {
  [MyComponent.name]: MyComponent,
};

function factory(treeNode: (TreeNode | string), nodeMap: ElementState): JSX.Element | string {
  if (typeof treeNode === 'string') {
    return treeNode;
  }
  const type = mapToComponent[treeNode.type] || treeNode.type;
  const attributesAndProps = nodeMap[treeNode.key]
    ? getAttributesAndProps(nodeMap[treeNode.key]) : null;
  const children = (treeNode.children || [])
    .map((child) => factory(child, nodeMap));
  return React.createElement(type, attributesAndProps, ...children);
}

export default factory;
