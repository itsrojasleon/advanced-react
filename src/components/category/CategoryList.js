import React, { useState, useEffect, Fragment } from 'react';
import Category from './Category';
import Spinner from '../Spinner';
import { List, Item } from '../../styles/category/category-list';
import useFetchResource from '../../hooks/useFetchResource';

export default function CategoryList() {
  const [showFixed, setShowFixed] = useState(false);
  const [categories, loading, error] = useFetchResource('categories');

  useEffect(() => {
    function onScroll() {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    }

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [showFixed]);

  const renderList = fixed => (
    <List fixed={fixed}>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
  return (
    <Fragment>
      {loading && (
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <Spinner />
        </div>
      )}
      {showFixed && renderList(true)}
    </Fragment>
  );
}
