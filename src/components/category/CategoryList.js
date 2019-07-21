import React, { useState, useEffect, Fragment } from 'react';
import Category from './Category';
import { List, Item } from '../../styles/category/category-list';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const req = await fetch(
        `https://petgram-app-server-ln46kf2xq.now.sh/categories`,
      );
      const res = await req.json();
      if (!ignore) setCategories(res);
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

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
    <List className={fixed && 'fixed'}>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
}
