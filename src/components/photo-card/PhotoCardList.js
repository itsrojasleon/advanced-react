import React from 'react';
import PhotoCard from './PhotoCard';

export default function PhotoCardList() {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
        <PhotoCard key={i} id={i} />
      ))}
    </ul>
  );
}
