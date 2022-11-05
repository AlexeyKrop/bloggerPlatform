import { AxiosResponse } from 'axios';

import { instance } from '../config';
import { BlogsResponseType, ParamsBlogsType } from '../types';

export const blogsAPI = {
  getAllBlogs() {
    return instance.get<AxiosResponse<BlogsResponseType[]>>(`blogs`);
  },
  createNewBlog(data: ParamsBlogsType) {
    return instance.post<ParamsBlogsType, AxiosResponse<BlogsResponseType[]>>(
      `blogs`,
      data,
    );
  },
  getBlog(id: string) {
    return instance.get<AxiosResponse<BlogsResponseType[]>>(`blogs/${id}`);
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
