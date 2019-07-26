import { withPhotos } from '../hoc/withPhotos';
import PhotoCardList from '../components/photo-card/PhotoCardList';

export const ListOfPhotoCards = withPhotos(PhotoCardList);
