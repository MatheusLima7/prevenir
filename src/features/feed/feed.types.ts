export interface Feed {
  category: string;
  description: string;
  feedId: string;
  images: string[];
  publicationDate: string;
  sketch: number;
  title: string;
  userId: string;
}

export interface FeedsData {
  data: Feed[];
  pageNumber: number;
  nextPage: number;
  lastPage: number;
  pageSize: number;
  totalPages: number;
  total: number;
}

export interface FeedsResponse<T> {
  message: string;
  response: T;
  pageCount: number;
}

export interface FeedDetailDataResponse {
  data: FeedDetailData;
}

export interface FeedDetailData {
  categoryId: string;
  description: string;
  feedId: string;
  images: string[];
  publicationDate: string;
  sketch: boolean;
  title: string;
  userId: string;
}

export interface NormalizedFeedDetailData {
  userId: string;
  feedId: string;
  userName: string;
  userNumbers: string[];
  title: string;
  category: string;
  description: string;
  publicationDate: string;
  sketch: boolean;
  images: string[];
}
