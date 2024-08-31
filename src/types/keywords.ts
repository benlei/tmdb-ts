import { Movie } from '.';

export interface KeywordsOptions {
  include_adult?: boolean;
  language?: string;
}

export interface BelongingMovies {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Keyword {
  id: number;
  name: string;
}

export interface MovieKeywords {
  id: number;
  keywords: Keyword[];
}

export interface TvKeywords {
  id: number;
  results: Keyword[];
}
