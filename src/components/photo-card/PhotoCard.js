import React, { Fragment, useRef, useEffect, useState } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { Article, ImgWrapper, Img, Button } from '../../styles/photo-card';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export default function PhotoCard({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const [show, setShow] = useState();
  const el = useRef();

  useEffect(
    function() {
      const observer = new window.IntersectionObserver(function(entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(el.current);
    },
    [el],
  );
  return (
    <Article ref={el}>
      {show && (
        <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size='32px' /> {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
}
