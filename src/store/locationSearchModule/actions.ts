/* eslint-disable promise/catch-or-return */
import { Action } from 'vuex';
import { searchLocation as searchLocationApi } from '../../api';
import { transliterate } from './transliterate';
import { IRootState } from '../types';
import { IState } from './types';

let abortController = new AbortController();

const abortAndUpdateController = () => {
  abortController.abort();
  abortController = new AbortController();
};

export const searchLocation: Action<IState, IRootState> = ({ commit, state }) => {
  abortAndUpdateController();
  commit('setLoadingAndErrorStates', { isLoading: true });

  if (state.searchText === '') {
    commit('setSearchSuggestions', []);
    commit('setLoadingAndErrorStates', { isLoading: false, hasError: false });
    return;
  }

  searchLocationApi(transliterate(state.searchText), { signal: abortController.signal })
    .then((searchSuggestions) => {
      commit('setSearchSuggestions', searchSuggestions);
      commit('setLoadingAndErrorStates', { hasError: false });
      return searchSuggestions;
    })
    .catch((err) => {
      if (err.name !== 'AbortError') commit('setLoadingAndErrorStates', { hasError: true });
    })
    .finally(() => commit('setLoadingAndErrorStates', { isLoading: false }));
};
