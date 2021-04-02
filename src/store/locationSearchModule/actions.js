/* eslint-disable promise/catch-or-return */
import { searchLocation as searchLocationApi } from '../../api';
import { transliterate } from './utils';

let abortController = new AbortController();

export function searchLocation({ commit, state }) {
  abortController.abort();
  abortController = new AbortController();
  commit('setLoadingAndErrorStates', { isLoading: true });

  if (state.searchText === '') {
    commit('setSearchSuggestions', []);
    commit('setLoadingAndErrorStates', { isLoading: false, hasError: false });
    return;
  }

  searchLocationApi(transliterate(state.searchText), { signal: abortController.signal })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error(res.statusText);
    })
    .then((searchSuggestions) => {
      commit('setSearchSuggestions', searchSuggestions);
      commit('setLoadingAndErrorStates', { hasError: false });
      return searchSuggestions;
    })
    .catch((err) => {
      if (err.name !== 'AbortError') commit('setLoadingAndErrorStates', { hasError: true });
    })
    .finally(() => commit('setLoadingAndErrorStates', { isLoading: false }));
}
