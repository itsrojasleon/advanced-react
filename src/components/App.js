import React, { Fragment } from 'react';
import { ListOfPhotoCards } from '../containers/ListOfPhotoCard';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';
import CategoryList from './category/CategoryList';
import Logo from './Logo';
import { GlobalStyle } from '../styles/global/global-style';

export default function App() {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Fragment>
          <CategoryList />
          <ListOfPhotoCards categoryId={1} />
        </Fragment>
      )}
    </div>
  );
}
