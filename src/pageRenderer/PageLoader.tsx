import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../store/Store';
import {
  ElementState, Element, TreeState,
} from '../store/reducers/types';
import { elements } from '../mockPage';
import factory from './RenderFactory';
import { setElements } from '../store/reducers/actions';

export default function PageLoader() {
  const [loading, setLoading] = useState(0);
  const dispatch = useDispatch();
  const tree = useSelector<State, TreeState>((state) => state.tree);
  const nodeMap = useSelector<State, ElementState>((state) => state.elements);
  useEffect(() => {
    Promise.resolve(elements)
      .then((result: Element[]) => {
        dispatch(setElements(result));
        setLoading(2);
      })
      .catch(() => {
        setLoading(1);
      });
  }, [dispatch]);
  let text: string = '';
  if (loading === 0) { text = 'Now loading'; }
  if (loading === 1) { text = 'Load failed'; }
  return (
    <>
      {text}
      {tree.map((e) => factory(e, nodeMap))}
    </>
  );
}
