export type QueryParamsType = {
  pagesCount: string;
  page: string;
  pageSize: string;
  totalCount: string;
};
export type BlogsResponseType = QueryParamsType & {
  items: [
    {
      id: string;
      name: string;
      youtubeUrl: string;
    },
  ];
};
export type PostsResponseType = QueryParamsType & {
  items: [
    {
      id: string;
      title: string;
      shortDescription: string;
      content: string;
      bloggerId: string;
      bloggerName: string;
      addedAt: string;
    },
  ];
};

export type ParamsBlogsType = {
  pageNumber: string;
  pageSize: string;
  searchNameTerm: string;
};

export type ParamsPostsType = {
  pageNumber: string;
  pageSize: string;
};
