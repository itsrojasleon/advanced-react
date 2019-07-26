import React from 'react';
import PhotoCard from './PhotoCard';

export default function PhotoCardList({ data: { photos = [] } } = {}) {
  return (
    <ul>
      {photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
}
