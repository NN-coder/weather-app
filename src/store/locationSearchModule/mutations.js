export function setLoadingAndErrorStates(state, payload) {
  state.isLoading = payload.isLoading ?? state.isLoading;
  state.hasError = payload.hasError ?? state.hasError;
}

export function setSearchText(state, searchText) {
  state.searchText = searchText;
}

export function setSearchSuggestions(state, searchSuggestions) {
  state.searchSuggestions = searchSuggestions;
}
