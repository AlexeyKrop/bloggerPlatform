import { AxiosResponse } from 'axios';

import { instance } from '../config';
import { ParamsPostsType, PostsResponseType } from '../types';

export const postsAPI = {
  getAllPosts(params: ParamsPostsType) {
    return instance.get<ParamsPostsType, AxiosResponse<PostsResponseType>>(`posts`, {
      params,
    });
  },
};
