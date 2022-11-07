import { PostType } from '../../reducers/types';
import { RootState } from '../../store';

export const selectPosts = (state: RootState): PostType[] => state.posts.posts;
