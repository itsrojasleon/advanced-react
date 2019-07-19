import React from 'react';
import CategoryList from './category/CategoryList';
import { GlobalStyle } from '../global-style';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <CategoryList />
    </div>
  );
}
