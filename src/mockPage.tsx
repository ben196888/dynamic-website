import { Element } from './store/reducers/types';

export const elements: Element[] = [
  {
    key: 'div-one',
    type: 'div',
    children: ['Hello world ', { key: 'inner', type: 'span', children: ['John Doe'] }],
  }, {
    key: 'link',
    type: 'a',
    href: 'https://google.com',
    children: ['link'],
  }, {
    key: '_1',
    type: 'br',
  }, {
    key: 'button',
    type: 'button',
    onClick: {
      name: 'alert',
      parameters: {
        message: 'hello world',
      },
    },
    children: ['click to alert'],
  }, {
    key: 'helloworld',
    type: 'MyComponent',
    children: ['my component does not take children'],
  },
  {
    key: '_2',
    type: 'br',
  },
  'String can render straight away',
];

export default elements;
