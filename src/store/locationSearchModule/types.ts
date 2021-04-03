import { ILocationSearchResponse } from '@/api/types';

export interface IState {
  isLoading: boolean;
  hasError: boolean;
  searchText: string;
  searchSuggestions: ILocationSearchResponse;
}
