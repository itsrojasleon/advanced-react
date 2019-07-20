import React from 'react';
import CategoryList from './category/CategoryList';
import PhotoCardList from './photo-card/PhotoCardList';
import Logo from './Logo';
import { GlobalStyle } from '../global-style';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <CategoryList />
      <PhotoCardList />
    </div>
  );
}
