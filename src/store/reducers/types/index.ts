export type BlogType = {
  id: string;
  name: string;
  youtubeUrl: string;
};
export type PostType = {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  bloggerId: string;
  bloggerName: string;
  addedAt: string;
};
