import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

export const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`);
