import { Element } from './store/reducers/types';

export const elements: Element[] = [
  {
    key: 'div-one',
    type: 'div',
    children: ['Jasmine', { key: 'inner', type: 'span', children: ['word'] }],
  }, {
    key: 'link',
    type: 'a',
    href: 'https://google.com',
    children: ['link'],
  }, {
    key: 'button',
    type: 'button',
    children: ['click my butt'],
  }, {
    key: 'helloworld',
    type: 'MyComponent',
    children: ['button'],
  },
  'asadfasdfads',
];

export default elements;
