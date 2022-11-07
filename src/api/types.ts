export type BlogsResponseType = {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: [
    {
      id: string;
      name: string;
      youtubeUrl: string;
    },
  ];
};

export type ParamsBlogsType = {
  pageNumber: string;
  pageSize: string;
  searchNameTerm: string;
};
