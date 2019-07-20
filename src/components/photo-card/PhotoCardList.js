import React from 'react';
import PhotoCard from './PhotoCard';

export default function PhotoCardList() {
  return (
    <ul>
      {[1, 2, 3].map(i => (
        <PhotoCard key={i} />
      ))}
    </ul>
  );
}
