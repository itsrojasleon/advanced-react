import React from 'react';
import Category from './Category';
import { List, Item } from '../../styles/category/category-list';
import { categories } from '../../../api/db.json';

export default function CategoryList() {
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
