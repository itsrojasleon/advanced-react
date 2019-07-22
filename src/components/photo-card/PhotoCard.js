import React, { Fragment, useRef, useEffect, useState } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Article, ImgWrapper, Img, Button } from '../../styles/photo-card';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export default function PhotoCard({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const [show, setShow] = useState(false);
  const key = `like-${id}`;
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key);
      return like;
    } catch (e) {
      console.log('Error:', e);
    }
  });
  const el = useRef();

  useEffect(() => {
    import('intersection-observer');
    const observer = new IntersectionObserver(entries => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(el.current);
    () => {
      observer.unobserve(el.current);
    };
  }, [el]);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (e) {
      console.log(error);
    }
  };
  return (
    <Article ref={el}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
}
