import { BlogType } from '../../reducers/types';
import { RootState } from '../../store';

export const selectBlog = (state: RootState): BlogType => state.blogs.blog;
