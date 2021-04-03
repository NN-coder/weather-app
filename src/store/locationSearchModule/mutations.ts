import { Mutation } from 'vuex';
import { ILocationSearchResponse } from '@/api/types';
import { IState } from './types';

export const setLoadingAndErrorStates: Mutation<IState> = (
  state,
  payload: { isLoading?: boolean; hasError?: boolean }
) => {
  state.isLoading = payload.isLoading ?? state.isLoading;
  state.hasError = payload.hasError ?? state.hasError;
};

export const setSearchText: Mutation<IState> = (state, searchText: string) => {
  state.searchText = searchText;
};

export const setSearchSuggestions: Mutation<IState> = (
  state,
  searchSuggestions: ILocationSearchResponse
) => {
  state.searchSuggestions = searchSuggestions;
};
