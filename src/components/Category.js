import React from 'react';
import { Anchor, Image } from '../styles/category';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export default function Category({ cover = DEFAULT_IMAGE, path, emoji = '?' }) {
  return (
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  );
}
