import React from 'react';
import Category from './Category';
import { List, Item } from '../../styles/category/category-list';

export default function CategoryList() {
  return (
    <List>
      {[1, 2].map(category => (
        <Item>
          <Category />
        </Item>
      ))}
    </List>
  );
}
