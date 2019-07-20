import React, { useState, useEffect } from 'react';
import Category from './Category';
import { List, Item } from '../../styles/category/category-list';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

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
  return (
    <List>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
}
