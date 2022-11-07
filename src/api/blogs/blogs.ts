import { AxiosResponse } from 'axios';

import { instance } from '../config';
import { BlogsResponseType, ParamsBlogsType } from '../types';

export const blogsAPI = {
  getAllBlogs(params: ParamsBlogsType) {
    return instance.get<ParamsBlogsType, AxiosResponse<BlogsResponseType>>(`bloggers`, {
      params,
    });
  },
  createNewBlog(data: ParamsBlogsType) {
    return instance.post<ParamsBlogsType, AxiosResponse<BlogsResponseType[]>>(
      `blogs`,
      data,
    );
  },
  getCurrentBlog(id: string) {
    return instance.get<
      string,
      AxiosResponse<{
        id: string;
        name: string;
        youtubeUrl: string;
      }>
    >(`bloggers/${id}`);
  },
  updateBlog(id: string, data: ParamsBlogsType) {
    return instance.put<ParamsBlogsType, AxiosResponse<BlogsResponseType[]>>(
      `blogs/${id}`,
      data,
    );
  },
  removeBlog(id: string) {
    return instance.delete(`blogs/${id}`);
  },
};
