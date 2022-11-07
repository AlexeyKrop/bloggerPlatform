import { BlogType } from '../../reducers/types';
import { RootState } from '../../store';

export const selectBlogs = (state: RootState): BlogType[] => state.blogs.blogs;
