import React from 'react';
import PhotoCard from './PhotoCard';
import { withPhotos } from '../../hoc/withPhotos';

function PhotoCardList({ data: { photos = [] } } = {}) {
  return (
    <ul>
      {photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
}
export default withPhotos(PhotoCardList);
